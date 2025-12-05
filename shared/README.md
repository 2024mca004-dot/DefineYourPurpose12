# Shared Code

This folder contains code **shared between frontend and backend**.

---

## Files

### `schema.ts` - Database Schema & Types

This single file defines:
1. **Database tables** using Drizzle ORM
2. **TypeScript types** for type safety
3. **Zod validation schemas** for runtime validation

---

## Data Models

| Table | Description | Key Fields |
|-------|-------------|------------|
| `users` | User accounts | username, password (hashed) |
| `companies` | Prashun's 3 companies | name, tagline, logo, website |
| `subscriptionPlans` | Pricing tiers | name, price, features[] |
| `businessListings` | Partner listings | name, category, banner, logo |
| `blogPosts` | Blog articles | title, excerpt, content |
| `leads` | Contact submissions | name, email, message, source |
| `newsletterSubscribers` | Email list | email, isActive |

---

## How to Use Types

### In Backend (`server/`)
```typescript
import { Company, Lead, InsertLead } from "@shared/schema";

// Use types for function parameters
async function createLead(lead: InsertLead): Promise<Lead> {
  // ...
}
```

### In Frontend (`client/`)
```typescript
import type { Company, SubscriptionPlan } from "@shared/schema";

// Use for React Query typing
const { data } = useQuery<Company[]>({
  queryKey: ["/api/companies"]
});
```

---

## Schema Structure

### Companies
```typescript
{
  id: number;
  name: string;           // "TagSkills EdTech"
  tagline: string;        // "Transforming Education..."
  description: string;    // Full description
  logo: string | null;    // Image path
  website: string | null; // Company URL
  order: number | null;   // Display order (1, 2, 3)
}
```

### Subscription Plans
```typescript
{
  id: number;
  name: string;           // "Starter", "Professional", "Enterprise"
  price: number;          // 2000, 5000, 10000 (in INR)
  description: string;
  features: string[];     // ["Basic listing", "Logo display", ...]
  isPopular: boolean;     // Highlight "Most Popular" badge
  stripePriceId: string | null;
}
```

### Business Listings
```typescript
{
  id: number;
  name: string;           // Company name
  category: string;       // "EdTech", "SAP Partner", "Training", "Recruitment"
  description: string;
  banner: string | null;  // Banner image URL
  logo: string | null;    // Logo image URL
  contactEmail: string | null;
  website: string | null;
  isFeatured: boolean;    // Show "Featured" badge
  isActive: boolean;      // Visible on site
  planId: number | null;  // Linked subscription plan
  expiresAt: Date | null; // Listing expiration
}
```

### Leads (Contact Form)
```typescript
{
  id: number;
  name: string;
  email: string;
  company: string | null;
  message: string;
  source: string;         // "contact_form", "pricing", etc.
  status: string;         // "new", "contacted", "converted"
  createdAt: Date;
}
```

### Newsletter Subscribers
```typescript
{
  id: number;
  email: string;
  isActive: boolean;      // Can unsubscribe
  subscribedAt: Date;
}
```

---

## Validation Schemas (Zod)

Each model has an insert schema for validation:

```typescript
import { insertLeadSchema } from "@shared/schema";

// Validate incoming data
const validatedData = insertLeadSchema.parse(req.body);

// Throws error if invalid:
// - Missing required fields
// - Wrong types
// - Invalid email format
```

---

## Why Share Code?

| Benefit | Description |
|---------|-------------|
| **Type Safety** | Same types on both sides prevents bugs |
| **Single Source of Truth** | Change once, applies everywhere |
| **Consistency** | Frontend and backend always agree on data shape |
| **Validation** | Same rules on client and server |

---

## Adding a New Model

### Step 1: Define table in `schema.ts`
```typescript
export const myTable = pgTable("my_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
```

### Step 2: Create insert schema
```typescript
export const insertMySchema = createInsertSchema(myTable).omit({
  id: true,
  createdAt: true
});
```

### Step 3: Export types
```typescript
export type MyType = typeof myTable.$inferSelect;
export type InsertMyType = z.infer<typeof insertMySchema>;
```

### Step 4: Push to database
```bash
npm run db:push
```
