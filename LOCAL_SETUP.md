# Running DefineYourPurpose Locally (Outside Replit)

This guide helps you run the project on your local machine (Windows/Mac/Linux).

## Prerequisites

- **Node.js 20.11+** (required for `import.meta.dirname`)
- **npm** or **yarn**

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Application

**Option A: Use the local Vite config (Recommended)**

```bash
# Start frontend only
npx vite --config vite.config.local.ts

# In another terminal, start backend
npx tsx server/index.ts
```

**Option B: Modify package.json scripts**

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

Then run:
```bash
npm run dev:local
```

## Troubleshooting

### Error: "Failed to resolve import @/components/ui/..."

This means the path aliases aren't working. Use the `vite.config.local.ts` file:

```bash
npx vite --config vite.config.local.ts
```

### Error: "import.meta.dirname is not defined"

Your Node.js version is too old. Update to Node.js 20.11 or newer:

```bash
node --version  # Should be v20.11.0 or higher
```

### Error: "Cannot find module '@replit/...'"

These are Replit-specific packages. Use `vite.config.local.ts` which doesn't require them.

### Database Not Working

This project uses **in-memory storage** by default, so no database setup is required. Data will reset when the server restarts.

If you want persistent data, you can:
1. Set up a PostgreSQL database (e.g., using Neon, Supabase, or local PostgreSQL)
2. Set the `DATABASE_URL` environment variable
3. Update `server/storage.ts` to use `DbStorage` instead of `MemStorage`

## Environment Variables (Optional)

Create a `.env` file in the root directory:

```env
# Only needed if you want Stripe payments
STRIPE_SECRET_KEY=your_stripe_secret_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

# Only needed if using database (optional)
DATABASE_URL=postgresql://user:password@host:5432/database
```

## Project Structure

```
DefineYourPurpose/
├── client/           # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.tsx
├── server/           # Express backend
│   ├── index.ts
│   ├── routes.ts
│   └── storage.ts    # In-memory data storage
├── shared/           # Shared types
├── attached_assets/  # Images and assets
├── vite.config.ts    # Replit Vite config
└── vite.config.local.ts  # Local Vite config (use this locally)
```

## Need Help?

Contact: prashunsshetty@gmail.com
