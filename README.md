# Prashun Shetty Portfolio Website

Personal Branding & Business Marketplace Platform for SAP S/4 HANA Mentor and Entrepreneur.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Quick Start (Replit)](#quick-start-replit)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [Folder Breakdown](#folder-breakdown)
- [API Documentation](#api-documentation)
- [Design Guidelines](#design-guidelines)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Overview

This is a full-stack web application serving as a personal branding platform for Prashun Shetty. The platform showcases three main companies:

1. **TagSkills EdTech** - SAP Training & Professional Development
2. **Invayas Technologies** - SAP S/4HANA Implementations  
3. **Frillory Design House** - Brand Identity & UI/UX Design

It also functions as a marketplace for EdTech and business partners to list their companies through paid subscription plans.

---

## Features

- **Personal Branding** - Showcase companies with logos & descriptions
- **Business Marketplace** - Partners can list their companies
- **Subscription Plans** - 3 tiers (₹2,000 / ₹5,000 / ₹10,000)
- **Lead Generation** - Contact forms save to database + open Gmail
- **Newsletter** - Email subscription with duplicate detection
- **YouTube Integration** - Embedded TagSkills videos
- **Stripe Payments** - Subscription checkout flow
- **Responsive Design** - Works on mobile, tablet, desktop
- **Dark Mode** - Automatic theme switching

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui |
| **HTTP Client** | Axios |
| **State** | React Query (TanStack) |
| **Routing** | Wouter |
| **Backend** | Express.js, TypeScript |
| **Database** | PostgreSQL, Drizzle ORM |
| **Payments** | Stripe |
| **Auth** | Passport.js |

---

## Project Structure

```
📁 Prashun-Shetty-Portfolio
│
├── 📁 apps/                          # Application code
│   ├── 📁 client/                    # FRONTEND (React)
│   │   ├── public/
│   │   └── src/
│   │       ├── components/
│   │       │   ├── ui/               # shadcn UI library
│   │       │   ├── common/           # Header, Footer, Hero, Newsletter
│   │       │   ├── sections/         # Page sections (Pricing, Companies, etc.)
│   │       │   └── cards/            # Card components
│   │       ├── hooks/                # Custom React hooks
│   │       ├── data/                 # Static data (legacy)
│   │       ├── pages/                # Route pages
│   │       ├── lib/                  # Utilities & API client
│   │       ├── App.tsx
│   │       └── main.tsx
│   │
│   ├── 📁 server/                    # BACKEND (Express)
│   │   └── src/
│   │       ├── routes/               # API route handlers
│   │       ├── middlewares/          # Auth & middleware
│   │       ├── controllers/          # Request handlers
│   │       ├── services/             # Business logic & storage
│   │       ├── models/               # Database models
│   │       ├── utils/                # Helper functions
│   │       └── index.ts              # Server entry point
│   │
│   └── 📁 shared/                    # Shared code
│       └── schema.ts                 # Database schema & types
│
├── 📁 packages/                      # Reusable modules
│   ├── config/                       # Configuration files
│   └── types/                        # TypeScript types
│
├── 📁 assets/                        # Media files
│   ├── images/                       # Logos, banners
│   ├── generated/                    # AI-generated images
│   ├── screenshots/                  # App screenshots
│   └── notes/                        # Text notes
│
├── 📁 docs/                          # Documentation
│   ├── design_guidelines.md
│   ├── LOCAL_SETUP.md
│   ├── FRONTEND-ONLY-SETUP.md
│   └── architecture.md
│
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
├── tailwind.config.ts                # Tailwind config
├── vite.config.ts                    # Vite bundler
└── pnpm-workspace.yaml               # Monorepo workspace
```

---

## Getting Started

### Quick Start (Replit)
Click **"Run"** - everything is pre-configured!

### Frontend Setup
```bash
cd apps/client
npm install
npm run dev
```

### Backend Setup
```bash
cd apps/server
npm install
npm run dev
```

### Full Stack (Monorepo)
```bash
# Install all dependencies
pnpm install

# Run both frontend and backend
pnpm dev
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run db:push` | Push database schema |
| `npm run db:studio` | Open database GUI |

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `SESSION_SECRET` | Yes | Session encryption key |
| `STRIPE_SECRET_KEY` | Yes | Stripe API secret |
| `VITE_STRIPE_PUBLIC_KEY` | Yes | Stripe publishable key |
| `NODE_ENV` | No | `development` or `production` |

---

## Folder Breakdown

### `/apps/client` - Frontend
| Folder | Contents |
|--------|----------|
| `components/ui/` | shadcn/ui base components (Button, Card, Input, etc.) |
| `components/common/` | Header, Footer, Hero, Newsletter |
| `components/sections/` | CompaniesSection, PricingSection, ContactForm |
| `components/cards/` | CompanyCard, PricingCard, BlogPostCard |
| `pages/` | Home, NotFound |
| `lib/` | Axios client, utilities |
| `hooks/` | useToast, useMobile |

### `/apps/server` - Backend
| Folder | Contents |
|--------|----------|
| `routes/` | API endpoint definitions |
| `middlewares/` | Authentication, error handling |
| `services/` | Business logic, storage |
| `models/` | Database connection |
| `utils/` | Helper functions, seeding |

### `/packages` - Shared Modules
| Folder | Contents |
|--------|----------|
| `config/` | Configuration settings |
| `types/` | TypeScript type definitions |

---

## API Documentation

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/companies` | Get 3 main companies |
| `GET` | `/api/plans` | Get subscription plans |
| `GET` | `/api/listings` | Get business listings |
| `GET` | `/api/listings?category=EdTech` | Filter by category |
| `GET` | `/api/blog` | Get blog posts |
| `POST` | `/api/leads` | Submit contact form |
| `POST` | `/api/newsletter` | Subscribe to newsletter |

### Example with Axios
```typescript
import { api } from "@/lib/queryClient";

// GET
const { data } = await api.get("/api/companies");

// POST
await api.post("/api/leads", {
  name: "John",
  email: "john@test.com",
  message: "Hello!"
});
```

---

## Design Guidelines

See [docs/design_guidelines.md](docs/design_guidelines.md) for:
- Color palette (Navy Blue #0A2342, Gold #F1C40F)
- Typography (Inter, Poppins)
- Spacing system
- Component patterns

---

## Future Enhancements

- [ ] Next.js migration (App Router)
- [ ] Email service integration (SendGrid/Resend)
- [ ] Admin dashboard
- [ ] Blog CMS
- [ ] Multi-language support
- [ ] Analytics dashboard

---

## Contact

| Platform | Link |
|----------|------|
| **Email** | Prashunshetty@tagskills.com |
| **Phone** | +91 8971164999 |
| **Location** | Bangalore, Karnataka, India |
| **LinkedIn** | [prashun-shetty](https://linkedin.com/in/prashun-shetty-41903a39/) |
| **YouTube** | [@tagskills9749](https://youtube.com/@tagskills9749) |

---

## License

Private project - All rights reserved.

---

Built with ❤️ by Prashun Shetty
