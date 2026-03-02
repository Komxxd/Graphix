import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import webhookRouter from './routes/webhooks.js';

const app = express();
const PORT = process.env.PORT || 3001;

// 1. CORS Configuration
app.use(cors({
    origin: 'http://localhost:5173'
}));

// 2. Webhook route — mounted BEFORE express.json()
// The Clerk webhook endpoint requires the raw request body as a Buffer.
app.use('/webhooks', webhookRouter);

// 3. Regular JSON middleware for other routes
app.use(express.json());

// 4. Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// START
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
