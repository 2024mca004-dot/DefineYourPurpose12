# Architecture Documentation

## Overview

This project follows a **monorepo structure** using pnpm workspaces and Turborepo for build orchestration.

---

## Folder Structure

```
📁 Root
├── apps/           → Application code (client, server, shared)
├── packages/       → Reusable modules (config, types)
├── assets/         → Media files (images, screenshots)
├── docs/           → Documentation
└── config files    → package.json, tsconfig.json, etc.
```

---

## Apps

### `/apps/client` - Frontend Application

**Technology:** React 18 + TypeScript + Vite

**Structure:**
```
client/
├── src/
│   ├── components/
│   │   ├── ui/          → shadcn/ui base components
│   │   ├── common/      → Header, Footer, Hero, Newsletter
│   │   ├── sections/    → Large page sections
│   │   └── cards/       → Card components
│   ├── pages/           → Route components
│   ├── hooks/           → Custom React hooks
│   ├── lib/             → Axios, utilities
│   └── data/            → Static data (legacy)
└── public/              → Static assets
```

**Key Files:**
- `App.tsx` - Main component with routing
- `main.tsx` - React entry point
- `lib/queryClient.ts` - Axios + React Query setup

---

### `/apps/server` - Backend Application

**Technology:** Express.js + TypeScript

**Structure:**
```
server/
└── src/
    ├── routes/          → API endpoint definitions
    ├── middlewares/     → Auth, error handling
    ├── controllers/     → Request handlers
    ├── services/        → Business logic, storage
    ├── models/          → Database connection
    ├── utils/           → Helpers, seeding
    └── index.ts         → Server entry point
```

**Key Files:**
- `index.ts` - Express server setup
- `routes/routes.ts` - All API endpoints
- `services/storage.ts` - Data layer

---

### `/apps/shared` - Shared Code

**Purpose:** Code used by both frontend and backend

**Contents:**
- `schema.ts` - Drizzle ORM schema + Zod validation

---

## Packages

### `/packages/config`
Central configuration for the entire project.

### `/packages/types`
Shared TypeScript type definitions.

---

## Data Flow

```
┌─────────────┐     HTTP/Axios      ┌─────────────┐
│   Client    │ ──────────────────► │   Server    │
│   (React)   │                     │  (Express)  │
└─────────────┘                     └──────┬──────┘
                                           │
                                           ▼
                                    ┌─────────────┐
                                    │  PostgreSQL │
                                    │   (Neon)    │
                                    └─────────────┘
```

---

## API Architecture

### REST Endpoints

| Method | Endpoint | Handler |
|--------|----------|---------|
| GET | /api/companies | getCompanies() |
| GET | /api/plans | getPlans() |
| GET | /api/listings | getListings() |
| POST | /api/leads | createLead() |
| POST | /api/newsletter | subscribe() |

### Data Models

```typescript
// Companies
{ id, name, tagline, description, logo, website, order }

// Subscription Plans
{ id, name, price, description, features[], isPopular }

// Business Listings
{ id, name, category, description, banner, logo, contactEmail, website, isFeatured }

// Leads
{ id, name, email, company, message, source, status, createdAt }

// Newsletter
{ id, email, isActive, subscribedAt }
```

---

## Authentication

**Strategy:** Passport.js with Local Strategy

**Flow:**
1. User submits credentials
2. Server validates with scrypt hash
3. Session created with express-session
4. Cookie stored on client

---

## Payment Integration

**Provider:** Stripe

**Flow:**
1. User selects plan
2. Frontend creates checkout session
3. Redirect to Stripe checkout
4. Webhook handles payment confirmation
5. Listing activated in database

---

## Build & Deploy

### Development
```bash
pnpm dev          # Run all apps
pnpm --filter client dev   # Run client only
pnpm --filter server dev   # Run server only
```

### Production
```bash
pnpm build        # Build all apps
pnpm start        # Start production server
```

### Database
```bash
pnpm db:push      # Sync schema to database
pnpm db:studio    # Open Drizzle Studio
```

---

## Environment Configuration

| Environment | Usage |
|-------------|-------|
| `development` | Local development with hot reload |
| `production` | Deployed on Replit |

---

## Future Migration Path

### Next.js (if migrating)

```
apps/client/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── (marketing)/
│   └── api/         → Server routes
└── public/
```

---

## Performance Considerations

1. **React Query caching** - Prevents unnecessary re-fetches
2. **Axios interceptors** - Centralized error handling
3. **Code splitting** - Vite handles automatic splitting
4. **Image optimization** - Use WebP format for assets
