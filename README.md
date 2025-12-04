# Prashun Shetty - Personal Branding & Business Marketplace Platform

A full-stack web application for personal branding and business listing marketplace.

---

## Project Structure

```
├── client/                 # FRONTEND (React + TypeScript)
│   ├── src/
│   │   ├── components/     # React UI components
│   │   ├── pages/          # Page components (routes)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions & API client
│   │   ├── App.tsx         # Main app component with routing
│   │   ├── main.tsx        # React entry point
│   │   └── index.css       # Global styles & Tailwind config
│   ├── public/             # Static assets (favicon, etc.)
│   └── index.html          # HTML template
│
├── server/                 # BACKEND (Express + TypeScript)
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route handlers
│   ├── storage.ts          # Data storage layer
│   ├── auth.ts             # Authentication logic
│   ├── db.ts               # Database connection
│   └── seed.ts             # Database seeding
│
├── shared/                 # SHARED CODE (Used by both frontend & backend)
│   └── schema.ts           # Database schema & TypeScript types
│
├── attached_assets/        # Uploaded images & media files
│
└── Configuration Files
    ├── package.json        # Dependencies & scripts
    ├── tsconfig.json       # TypeScript configuration
    ├── vite.config.ts      # Vite bundler configuration
    ├── tailwind.config.ts  # Tailwind CSS configuration
    └── drizzle.config.ts   # Database ORM configuration
```

---

## Quick Start

### On Replit
Just click "Run" - everything is pre-configured!

### Local Development
```bash
npm install
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/companies` | Get all companies |
| GET | `/api/plans` | Get subscription plans |
| GET | `/api/listings` | Get business listings |
| GET | `/api/blog` | Get blog posts |
| POST | `/api/leads` | Submit contact form |
| POST | `/api/newsletter` | Subscribe to newsletter |

---

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Tailwind CSS + shadcn/ui components
- React Query + Axios for data fetching
- Wouter for routing

**Backend:**
- Express.js with TypeScript
- PostgreSQL database
- Drizzle ORM
- Stripe for payments

---

## Contact

- **Email:** Prashunshetty@tagskills.com
- **Phone:** +91 8971164999
- **Location:** Bangalore, Karnataka, India
- **LinkedIn:** [linkedin.com/in/prashun-shetty-41903a39](https://linkedin.com/in/prashun-shetty-41903a39/)
- **YouTube:** [@tagskills9749](https://youtube.com/@tagskills9749)
