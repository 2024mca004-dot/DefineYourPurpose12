# Shared Code

This folder contains code that is **shared between frontend and backend**.

---

## Files

### `schema.ts` - Database Schema & Types

This file defines:
1. **Database tables** using Drizzle ORM
2. **TypeScript types** for data models
3. **Validation schemas** using Zod

---

## Data Models

| Model | Description |
|-------|-------------|
| `users` | User accounts (username, password) |
| `companies` | Prashun's 3 main companies |
| `subscriptionPlans` | Pricing tiers (Starter, Pro, Enterprise) |
| `businessListings` | Marketplace company listings |
| `blogPosts` | Blog articles |
| `leads` | Contact form submissions |
| `newsletterSubscribers` | Email subscribers |

---

## How Types Are Used

**In Backend (`server/`):**
```typescript
import { Company, InsertLead } from "@shared/schema";
```

**In Frontend (`client/`):**
```typescript
import type { Company } from "@shared/schema";
```

---

## Why Share Code?

1. **Type Safety:** Same types on frontend & backend prevents errors
2. **Single Source of Truth:** Change once, applies everywhere
3. **Validation:** Same validation rules on both sides
