# AI Marketing Design Generator - Step 1 Complete

This step implements authentication with Clerk, a protected dashboard, and a backend webhook to sync users to a Neon PostgreSQL database via Prisma.

## Setup Instructions

### 1. Clerk Configuration
1. Create a new Clerk application at [dashboard.clerk.com](https://dashboard.clerk.com).
2. Enable **Email** and **Google OAuth** as sign-in methods.
3. Set the **After sign-up redirect URL** to `http://localhost:5173/dashboard`.
4. Set the **After sign-in redirect URL** to `http://localhost:5173/dashboard`.
5. Go to **Webhooks** -> **Add Endpoint**.
   - Endpoint URL: `http://localhost:3001/webhooks/clerk` (Use **ngrok** for local testing: `ngrok http 3001`).
   - Events to listen to: `user.created`.
6. Copy the **Signing Secret** (starts with `whsec_`) and paste it into `server/.env`.
7. Copy the **Publishable Key** (starts with `pk_test_`) and paste it into `client/.env`.

### 2. Database (Neon + Prisma)
1. Get your **DATABASE_URL** from the Neon dashboard.
2. Paste it into `server/.env`.
3. Run migrations and generate the Prisma client:
   ```bash
   cd server
   npx prisma migrate dev --name init
   npx prisma generate
   ```

## How to Run

### Terminal 1 — Backend
```bash
cd server
npm run dev
```

### Terminal 2 — Frontend
```bash
cd client
npm run dev
```

## Project Structure
- `/client`: React (Vite) + Clerk + Tailwind.
- `/server`: Node.js + Express + Prisma + Clerk Webhooks.
