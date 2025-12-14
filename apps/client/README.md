# Frontend Application

React 18 + TypeScript + Vite

---

## Folder Structure

```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   │
│   │   ├── common/          # Shared layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Newsletter.tsx
│   │   │
│   │   ├── sections/        # Large page sections
│   │   │   ├── CompaniesSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── BusinessListingsSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   ├── YouTubeSection.tsx
│   │   │   └── ContactForm.tsx
│   │   │
│   │   └── cards/           # Card components
│   │       ├── CompanyCard.tsx
│   │       ├── PricingCard.tsx
│   │       ├── BusinessListingCard.tsx
│   │       └── BlogPostCard.tsx
│   │
│   ├── pages/               # Route pages
│   │   ├── Home.tsx
│   │   └── not-found.tsx
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   │
│   ├── lib/                 # Utilities
│   │   ├── queryClient.ts   # Axios + React Query
│   │   └── utils.ts         # Helper functions
│   │
│   ├── data/                # Static data (legacy)
│   │
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # React entry point
│   └── index.css            # Tailwind styles
│
├── public/                  # Static assets
│   └── favicon.png
│
└── index.html               # HTML template
```

---

## Components Organization

### `/components/ui/` - Base UI Library
shadcn/ui components - buttons, cards, inputs, forms, etc.
These are the building blocks used by other components.

### `/components/common/` - Layout Components
Used across all pages:
- **Header** - Top navigation bar
- **Footer** - Page footer with links
- **Hero** - Hero banner section
- **Newsletter** - Email subscription form

### `/components/sections/` - Page Sections
Large sections that make up pages:
- **CompaniesSection** - Displays 3 main companies
- **PricingSection** - Subscription plans
- **BusinessListingsSection** - Marketplace listings
- **BlogSection** - Blog posts grid
- **YouTubeSection** - Embedded videos
- **ContactForm** - Lead capture form

### `/components/cards/` - Card Components
Reusable card layouts:
- **CompanyCard** - Single company display
- **PricingCard** - Single pricing plan
- **BusinessListingCard** - Single listing
- **BlogPostCard** - Single blog post

---

## Using Axios

```typescript
import { api } from "@/lib/queryClient";

// GET request
const { data } = await api.get("/api/companies");

// POST request
await api.post("/api/leads", {
  name: "John",
  email: "john@test.com"
});
```

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
```
