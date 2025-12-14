# Backend Application

Express.js + TypeScript

---

## Folder Structure

```
server/
└── src/
    ├── routes/              # API endpoint definitions
    │   └── routes.ts        # All route handlers
    │
    ├── middlewares/         # Middleware functions
    │   └── auth.ts          # Authentication (Passport.js)
    │
    ├── controllers/         # Request handlers
    │   └── (future)
    │
    ├── services/            # Business logic
    │   └── storage.ts       # Data layer with seed data
    │
    ├── models/              # Database
    │   └── db.ts            # PostgreSQL connection
    │
    ├── utils/               # Helper functions
    │   ├── seed.ts          # Database seeding
    │   └── vite.ts          # Vite integration
    │
    └── index.ts             # Server entry point
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/companies` | Get 3 main companies |
| GET | `/api/plans` | Get subscription plans |
| GET | `/api/listings` | Get business listings |
| GET | `/api/listings?category=X` | Filter by category |
| GET | `/api/blog` | Get blog posts |
| POST | `/api/leads` | Submit contact form |
| POST | `/api/newsletter` | Subscribe to newsletter |

---

## Adding New Endpoint

1. Add to `routes/routes.ts`:
```typescript
router.get("/my-endpoint", async (req, res) => {
  const data = await storage.getMyData();
  res.json(data);
});
```

2. Add storage method in `services/storage.ts`:
```typescript
async getMyData(): Promise<MyType[]> {
  return this.myData;
}
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection |
| `SESSION_SECRET` | Session encryption |
| `STRIPE_SECRET_KEY` | Stripe API key |

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
```
