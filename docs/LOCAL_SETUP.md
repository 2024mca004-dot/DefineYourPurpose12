# Running DefineYourPurpose Locally (Outside Replit)

This guide helps you run the project on your local machine (Windows/Mac/Linux) after cloning from GitHub.

## Prerequisites

- **Node.js 18+** (Node.js 20+ recommended)
- **npm** (comes with Node.js)

## Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd DefineYourPurpose
npm install
```

### 2. Run the Application

**Run Frontend (Terminal 1):**
```bash
npx vite --config vite.config.local.ts
```

**Run Backend (Terminal 2):**
```bash
npx tsx server/index.ts
```

The frontend will run at `http://localhost:5173` and the backend at `http://localhost:5000`.

## Alternative: Single Command Setup

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev:local": "concurrently \"npx tsx server/index.ts\" \"npx vite --config vite.config.local.ts\"",
    "frontend": "npx vite --config vite.config.local.ts",
    "backend": "npx tsx server/index.ts"
  }
}
```

Then install concurrently and run:
```bash
npm install concurrently
npm run dev:local
```

## Features

This project uses **in-memory storage** by default:
- No database setup required
- All data (companies, plans, leads) is pre-loaded
- Data resets when server restarts (perfect for demos)

## Optional: Persistent Database

If you want data to persist between restarts:

1. Create a free PostgreSQL database at [Neon](https://neon.tech) or [Supabase](https://supabase.com)

2. Create a `.env` file:
```env
DATABASE_URL=postgresql://user:password@host:5432/database
```

3. The app will automatically use the database when `DATABASE_URL` is set

## Optional: Stripe Payments

To enable payment processing:

1. Get API keys from [Stripe Dashboard](https://dashboard.stripe.com)

2. Add to your `.env` file:
```env
STRIPE_SECRET_KEY=sk_test_...
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

## Troubleshooting

### "Failed to resolve import @/components/ui/..."

Use the local Vite config:
```bash
npx vite --config vite.config.local.ts
```

### "Cannot find module '@replit/...'"

These are Replit-specific packages. The `vite.config.local.ts` file doesn't use them.

### "DATABASE_URL environment variable is required"

This error should not occur with the latest version. If it does, make sure you pulled the latest code that uses in-memory storage.

## Project Structure

```
DefineYourPurpose/
├── client/               # React frontend
│   └── src/
│       ├── components/   # UI components
│       ├── pages/        # Page components
│       └── App.tsx       # Main app
├── server/               # Express backend
│   ├── index.ts          # Server entry
│   ├── routes.ts         # API routes
│   └── storage.ts        # In-memory data
├── shared/               # Shared TypeScript types
├── attached_assets/      # Images and logos
├── vite.config.ts        # Replit config (don't use locally)
└── vite.config.local.ts  # Local config (use this!)
```

## Contact

Questions? Contact: Prashunshetty@tagskills.com
