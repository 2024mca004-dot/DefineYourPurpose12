# Prashun Shetty - Personal Branding & Business Marketplace Platform

A full-stack web application for personal branding and business listing marketplace featuring three companies (TagSkills EdTech, Invayas Technologies, Frillory Design House), subscription-based business listings, lead generation, and Stripe payment integration.

---

## Project Structure

```
📁 ROOT
│
├── 📁 client/                    # FRONTEND (React + TypeScript)
│   ├── 📁 src/
│   │   ├── 📁 components/        # React UI components
│   │   │   ├── 📁 ui/            # Base components (Button, Card, Input, etc.)
│   │   │   ├── Header.tsx        # Navigation header with logo
│   │   │   ├── Footer.tsx        # Page footer with links
│   │   │   ├── Hero.tsx          # Hero banner section
│   │   │   ├── CompaniesSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── BusinessListingsSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── YouTubeSection.tsx
│   │   ├── 📁 pages/             # Page components
│   │   │   ├── Home.tsx          # Main landing page
│   │   │   └── not-found.tsx     # 404 error page
│   │   ├── 📁 hooks/             # Custom React hooks
│   │   ├── 📁 lib/               # Utilities & API client (Axios)
│   │   ├── App.tsx               # Main app with routing
│   │   ├── main.tsx              # React entry point
│   │   └── index.css             # Global styles (Tailwind)
│   ├── 📁 public/                # Static assets
│   └── index.html                # HTML template
│
├── 📁 server/                    # BACKEND (Express + TypeScript)
│   ├── index.ts                  # Server entry point (port 5000)
│   ├── routes.ts                 # All API endpoints
│   ├── storage.ts                # Data layer with seed data
│   ├── auth.ts                   # Authentication (Passport.js)
│   ├── db.ts                     # PostgreSQL connection
│   ├── seed.ts                   # Database seeding
│   └── vite.ts                   # Dev server integration
│
├── 📁 shared/                    # SHARED (Frontend + Backend)
│   └── schema.ts                 # Database schema & TypeScript types
│
├── 📁 attached_assets/           # Images & uploaded files
│
└── 📄 Config Files
    ├── config.js                 # Main configuration (all settings)
    ├── config.ts                 # TypeScript version of config
    ├── package.json              # Dependencies & npm scripts
    ├── tsconfig.json             # TypeScript configuration
    ├── vite.config.ts            # Vite bundler config
    ├── tailwind.config.ts        # Tailwind CSS config
    └── drizzle.config.ts         # Database ORM config
```

---

## Quick Start

### On Replit
Click **"Run"** - everything is pre-configured!

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
http://localhost:5000
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui components |
| **HTTP Client** | Axios (configured in `client/src/lib/queryClient.ts`) |
| **State Management** | React Query (TanStack Query) |
| **Routing** | Wouter |
| **Backend** | Express.js, TypeScript |
| **Database** | PostgreSQL with Drizzle ORM |
| **Payments** | Stripe |
| **Authentication** | Passport.js |

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/companies` | Get 3 main companies |
| `GET` | `/api/plans` | Get subscription plans (₹2,000 / ₹5,000 / ₹10,000) |
| `GET` | `/api/listings` | Get business listings (supports `?category=` filter) |
| `GET` | `/api/blog` | Get published blog posts |
| `POST` | `/api/leads` | Submit contact form |
| `POST` | `/api/newsletter` | Subscribe to newsletter |

### Example API Usage (with Axios)

```typescript
import { api } from "@/lib/queryClient";

// GET request
const { data: companies } = await api.get("/api/companies");

// POST request
await api.post("/api/leads", {
  name: "John Doe",
  email: "john@example.com",
  message: "Hello!"
});
```

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `SESSION_SECRET` | Session encryption key |
| `STRIPE_SECRET_KEY` | Stripe API secret key |
| `VITE_STRIPE_PUBLIC_KEY` | Stripe publishable key (frontend) |

---

## Features

- **Personal Branding** - Showcase 3 companies with logos & descriptions
- **Business Marketplace** - Partners can list their companies
- **Subscription Plans** - 3 tiers (Starter, Professional, Enterprise)
- **Lead Generation** - Contact forms save to database + open Gmail
- **Newsletter** - Email subscription with duplicate detection
- **YouTube Integration** - Embedded TagSkills videos
- **Stripe Payments** - Subscription checkout flow
- **Responsive Design** - Works on mobile, tablet, desktop

---

## Companies Featured

1. **TagSkills EdTech** - SAP training & professional development
2. **Invayas Technologies** - SAP S/4HANA implementations
3. **Frillory Design House** - Brand identity & UI/UX design

---

## Contact

| Platform | Link |
|----------|------|
| **Email** | Prashunshetty@tagskills.com |
| **Phone** | +91 8971164999 |
| **Location** | Bangalore, Karnataka, India |
| **LinkedIn** | [linkedin.com/in/prashun-shetty-41903a39](https://linkedin.com/in/prashun-shetty-41903a39/) |
| **YouTube** | [@tagskills9749](https://youtube.com/@tagskills9749) |
| **TagSkills** | [tagskills.com](https://www.tagskills.com) |
| **Invayas** | [invayas.com](https://www.invayas.com/) |
| **Frillory** | [frillory.com](https://www.frillory.com/) |

---

## License

Private project - All rights reserved.
