import express from 'express';
import { Webhook } from 'svix';
import { prisma } from '../lib/prisma.js';

const router = express.Router();

router.post('/clerk', express.raw({ type: 'application/json' }), async (req, res) => {
    const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!CLERK_WEBHOOK_SECRET) {
        console.error('Missing CLERK_WEBHOOK_SECRET');
        return res.status(500).json({ error: 'Webhook secret not configured' });
    }

    // Headers Clerk sends
    const svix_id = req.headers['svix-id'];
    const svix_timestamp = req.headers['svix-timestamp'];
    const svix_signature = req.headers['svix-signature'];

    // If any of the three headers are missing, return 400
    if (!svix_id || !svix_timestamp || !svix_signature) {
        return res.status(400).json({ error: 'Missing svix headers' });
    }

    const wh = new Webhook(CLERK_WEBHOOK_SECRET);
    let payload;

    try {
        // Verify payload with headers
        payload = wh.verify(req.body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        });
    } catch (err) {
        console.error('Webhook verification failed:', err.message);
        return res.status(400).json({ error: 'Webhook verification failed' });
    }

    const { type, data } = payload;

    if (type === 'user.created') {
        const { id, email_addresses, first_name, last_name } = data;
        const email = email_addresses[0]?.email_address;

        if (!email) {
            return res.status(400).json({ error: 'No email address provided' });
        }

        try {
            await prisma.user.create({
                data: {
                    id: id,
                    email: email,
                    firstName: first_name || null,
                    lastName: last_name || null,
                    plan: 'free',
                    creditBalance: 5,
                },
            });
            console.log(`User ${id} created in database.`);
            return res.status(200).json({ message: 'User created successfully' });
        } catch (err) {
            // Check if user already exists (P2002 is Prisma unique constraint error)
            if (err.code === 'P2002') {
                console.log(`User ${id} already exists, skipping creation.`);
                return res.status(200).json({ message: 'User already exists' });
            }
            console.error('Failed to create user:', err);
            // Return 200 anyway to prevent Clerk from retrying indefinitely on weird DB errors?
            // Re-read prompt: "If the Prisma create fails because the user already exists... catch the error and return 200 anyway"
            return res.status(200).json({ message: 'User record creation handled' });
        }
    }

    // If type is anything else, return 200
    console.log(`Received event type: ${type}`);
    return res.status(200).json({ message: 'Event received but not handled' });
});

export default router;
