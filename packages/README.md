# Packages

Reusable modules shared across the monorepo.

---

## Structure

```
packages/
├── config/          # Configuration files
│   ├── config.js    # JavaScript config
│   └── config.ts    # TypeScript config
│
└── types/           # TypeScript type definitions
    └── (future)
```

---

## `/packages/config`

Central configuration for the entire project.

**Usage:**
```typescript
import { config } from "@packages/config";

console.log(config.contact.email);
console.log(config.api.endpoints.companies);
```

**Contents:**
- App info (name, version)
- Server settings (port, host)
- API endpoints
- Stripe configuration
- Contact information
- Design tokens

---

## `/packages/types`

Shared TypeScript type definitions.

*Currently empty - add types as needed.*
