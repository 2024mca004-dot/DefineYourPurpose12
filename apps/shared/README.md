# Shared Code

Code shared between frontend and backend.

---

## Files

### `schema.ts`

Contains:
1. **Database tables** - Drizzle ORM schema
2. **TypeScript types** - For type safety
3. **Zod schemas** - For validation

---

## Data Models

| Model | Fields |
|-------|--------|
| `users` | id, username, password |
| `companies` | id, name, tagline, description, logo, website |
| `subscriptionPlans` | id, name, price, features[], isPopular |
| `businessListings` | id, name, category, banner, logo, contactEmail |
| `blogPosts` | id, title, excerpt, content, category |
| `leads` | id, name, email, message, source, status |
| `newsletterSubscribers` | id, email, isActive |

---

## Usage

### In Backend
```typescript
import { Company, InsertLead } from "@shared/schema";

async function createLead(lead: InsertLead): Promise<Lead> {
  // ...
}
```

### In Frontend
```typescript
import type { Company } from "@shared/schema";

const { data } = useQuery<Company[]>({
  queryKey: ["/api/companies"]
});
```
