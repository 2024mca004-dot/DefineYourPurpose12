# Frontend (Client)

This folder contains all the **frontend code** built with React and TypeScript.

---

## Folder Structure

```
client/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Base UI components (buttons, cards, forms, etc.)
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Page footer
│   │   ├── Hero.tsx        # Hero/banner section
│   │   ├── CompaniesSection.tsx    # Companies display
│   │   ├── PricingSection.tsx      # Pricing plans
│   │   ├── BusinessListingsSection.tsx  # Marketplace listings
│   │   ├── ContactForm.tsx         # Lead capture form
│   │   ├── Newsletter.tsx          # Email subscription
│   │   └── YouTubeSection.tsx      # YouTube videos
│   │
│   ├── pages/              # Page components (one per route)
│   │   ├── Home.tsx        # Homepage
│   │   └── not-found.tsx   # 404 page
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── use-toast.ts    # Toast notifications
│   │   └── use-mobile.tsx  # Mobile detection
│   │
│   ├── lib/                # Utilities & API
│   │   ├── queryClient.ts  # API request handler
│   │   └── utils.ts        # Helper functions
│   │
│   ├── App.tsx             # Main app with routing
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles
│
├── public/                 # Static files (favicon)
└── index.html              # HTML template
```

---

## Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main component, defines all routes |
| `main.tsx` | React initialization |
| `index.css` | Tailwind CSS + custom styles |
| `lib/queryClient.ts` | API calls to backend |

---

## How It Works

1. **Data Fetching:** Uses React Query to fetch from `/api/*` endpoints
2. **Routing:** Uses Wouter for client-side navigation
3. **Styling:** Tailwind CSS with shadcn/ui component library
4. **State:** React Query handles server state, React hooks for local state

---

## Adding a New Page

1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" component={NewPage} />
   ```

## Adding a New Component

1. Create in `src/components/MyComponent.tsx`
2. Import and use in any page
