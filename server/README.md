# Backend (Server)

This folder contains the **backend code** built with Express.js and TypeScript.

---

## File Structure

```
📁 server/
├── index.ts        # Server entry point (starts on port 5000)
├── routes.ts       # All API route handlers
├── storage.ts      # Data layer with seed data
├── auth.ts         # User authentication (Passport.js)
├── db.ts           # PostgreSQL database connection
├── seed.ts         # Database seeding script
└── vite.ts         # Vite dev server integration (DO NOT MODIFY)
```

---

## Key Files Explained

### `index.ts` - Server Entry Point
- Starts Express server on port 5000
- Sets up middleware (CORS, JSON parsing, sessions)
- Mounts API routes under `/api/*`
- Integrates Vite for development

### `routes.ts` - API Endpoints
All API routes are defined here:

| Method | Endpoint | Description | Returns |
|--------|----------|-------------|---------|
| `GET` | `/api/companies` | Get all 3 companies | `Company[]` |
| `GET` | `/api/plans` | Get subscription plans | `SubscriptionPlan[]` |
| `GET` | `/api/listings` | Get business listings | `BusinessListing[]` |
| `GET` | `/api/listings?category=EdTech` | Filter by category | `BusinessListing[]` |
| `GET` | `/api/blog` | Get published posts | `BlogPost[]` |
| `POST` | `/api/leads` | Save contact form | `Lead` |
| `POST` | `/api/newsletter` | Subscribe email | `NewsletterSubscriber` |

### `storage.ts` - Data Layer
Contains:
- `MemStorage` class with in-memory data
- Seed data for companies, plans, listings
- CRUD methods for all entities

**Seed Data Included:**
- 3 companies (TagSkills, Invayas, Frillory)
- 3 subscription plans (Starter ₹2,000, Professional ₹5,000, Enterprise ₹10,000)
- 6 sample business listings

### `auth.ts` - Authentication
- Passport.js Local Strategy
- Password hashing with scrypt
- Session-based authentication

### `db.ts` - Database Connection
- PostgreSQL via Drizzle ORM
- Uses `DATABASE_URL` environment variable

---

## API Response Examples

### GET /api/companies
```json
[
  {
    "id": 1,
    "name": "TagSkills EdTech",
    "tagline": "Transforming Education Through Technology",
    "description": "Leading EdTech platform...",
    "logo": "/attached_assets/image_xxx.png",
    "website": "https://www.tagskills.com",
    "order": 1
  }
]
```

### GET /api/plans
```json
[
  {
    "id": 1,
    "name": "Starter",
    "price": 2000,
    "description": "Perfect for small businesses",
    "features": ["Basic listing", "Logo display", "30-day visibility"],
    "isPopular": false
  }
]
```

### POST /api/leads
**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "message": "Interested in partnership",
  "source": "contact_form"
}
```
**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "status": "new",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### POST /api/newsletter
**Request:**
```json
{
  "email": "user@example.com"
}
```
**Response (Success):**
```json
{
  "id": 1,
  "email": "user@example.com",
  "isActive": true,
  "subscribedAt": "2024-01-01T00:00:00.000Z"
}
```
**Response (Duplicate - 409):**
```json
{
  "error": "Email already subscribed"
}
```

---

## Adding a New API Endpoint

### Step 1: Add storage method (if needed)
In `storage.ts`:
```typescript
// Add to IStorage interface
getMyData(): Promise<MyType[]>;

// Add to MemStorage class
async getMyData(): Promise<MyType[]> {
  return this.myData;
}
```

### Step 2: Add route
In `routes.ts`:
```typescript
// GET endpoint
router.get("/my-endpoint", async (req, res) => {
  try {
    const data = await storage.getMyData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// POST endpoint with validation
router.post("/my-endpoint", async (req, res) => {
  try {
    const validatedData = insertMySchema.parse(req.body);
    const result = await storage.createMyData(validatedData);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});
```

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `SESSION_SECRET` | Yes | Secret for session encryption |
| `STRIPE_SECRET_KEY` | Yes | Stripe API secret key |
| `NODE_ENV` | No | `development` or `production` |

---

## Database Commands

```bash
# Push schema changes to database
npm run db:push

# Generate migration
npm run db:generate

# Open Drizzle Studio (database GUI)
npm run db:studio
```

---

## Important Notes

- Server runs on **port 5000**
- All API routes are prefixed with `/api/`
- **DO NOT modify `vite.ts`** - it handles dev server integration
- Sessions use in-memory storage (use Redis for production)
- All dates are returned in ISO 8601 format
