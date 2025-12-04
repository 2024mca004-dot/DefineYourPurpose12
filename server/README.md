# Backend (Server)

This folder contains all the **backend code** built with Express.js and TypeScript.

---

## File Structure

```
server/
├── index.ts        # Server entry point - starts Express
├── routes.ts       # API endpoints (GET, POST, etc.)
├── storage.ts      # Data storage & seed data
├── auth.ts         # User authentication
├── db.ts           # Database connection (PostgreSQL)
├── seed.ts         # Database seeding script
└── vite.ts         # Vite integration (don't modify)
```

---

## Key Files Explained

### `index.ts` - Server Entry Point
Starts the Express server on port 5000, sets up middleware, and connects routes.

### `routes.ts` - API Endpoints
All API routes are defined here:

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/companies` | Returns 3 main companies |
| GET | `/api/plans` | Returns subscription plans |
| GET | `/api/listings` | Returns business listings |
| GET | `/api/blog` | Returns blog posts |
| POST | `/api/leads` | Saves contact form data |
| POST | `/api/newsletter` | Saves newsletter subscription |

### `storage.ts` - Data Layer
Contains:
- In-memory storage with seed data
- CRUD operations for all entities
- Companies, plans, and listings data

### `auth.ts` - Authentication
Handles user login/registration using Passport.js.

### `db.ts` - Database
PostgreSQL connection using Drizzle ORM.

---

## Adding a New API Endpoint

1. Open `routes.ts`
2. Add your route:
   ```typescript
   router.get("/my-endpoint", async (req, res) => {
     const data = await storage.getMyData();
     res.json(data);
   });
   ```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `SESSION_SECRET` | Session encryption key |
| `STRIPE_SECRET_KEY` | Stripe API key |

---

## Important Notes

- Server runs on port 5000
- All API routes are prefixed with `/api/`
- Don't modify `vite.ts` - it handles development setup
