# Frontend (Client)

This folder contains the **frontend code** built with React, TypeScript, and Vite.

---

## Folder Structure

```
📁 client/
├── 📁 src/
│   ├── 📁 components/              # All React components
│   │   ├── 📁 ui/                  # shadcn/ui base components
│   │   │   ├── button.tsx          # Button variants
│   │   │   ├── card.tsx            # Card container
│   │   │   ├── input.tsx           # Form inputs
│   │   │   ├── form.tsx            # Form handling
│   │   │   ├── toast.tsx           # Notifications
│   │   │   └── ...                 # 40+ UI components
│   │   │
│   │   ├── Header.tsx              # Top navigation bar
│   │   ├── Footer.tsx              # Page footer
│   │   ├── Hero.tsx                # Hero banner with CTA
│   │   ├── CompaniesSection.tsx    # 3 company cards
│   │   ├── CompanyCard.tsx         # Single company card
│   │   ├── PricingSection.tsx      # Subscription plans
│   │   ├── PricingCard.tsx         # Single plan card
│   │   ├── BusinessListingsSection.tsx  # Marketplace grid
│   │   ├── BusinessListingCard.tsx # Single listing card
│   │   ├── ContactForm.tsx         # Lead capture form
│   │   ├── Newsletter.tsx          # Email subscription
│   │   ├── YouTubeSection.tsx      # Embedded videos
│   │   ├── BlogSection.tsx         # Blog posts grid
│   │   └── BlogPostCard.tsx        # Single blog card
│   │
│   ├── 📁 pages/                   # Route pages
│   │   ├── Home.tsx                # Main landing page (/)
│   │   └── not-found.tsx           # 404 page
│   │
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── use-toast.ts            # Toast notifications
│   │   └── use-mobile.tsx          # Mobile detection
│   │
│   ├── 📁 lib/                     # Utilities
│   │   ├── queryClient.ts          # Axios + React Query setup
│   │   └── utils.ts                # Helper functions (cn, etc.)
│   │
│   ├── 📁 data/                    # Static data (legacy - now from API)
│   │
│   ├── App.tsx                     # Main app with routing
│   ├── main.tsx                    # React entry point
│   └── index.css                   # Tailwind styles
│
├── 📁 public/
│   └── favicon.png                 # Site favicon
│
└── index.html                      # HTML template
```

---

## Key Files Explained

| File | Purpose |
|------|---------|
| `App.tsx` | Main component with routing (Wouter) |
| `main.tsx` | React initialization, wraps app with providers |
| `index.css` | Tailwind CSS + custom styles + dark mode |
| `lib/queryClient.ts` | **Axios configuration** + React Query setup |
| `lib/utils.ts` | Utility functions like `cn()` for classnames |

---

## Using Axios for API Calls

The project uses **Axios** for all HTTP requests. It's configured in `lib/queryClient.ts`:

### Import the API client
```typescript
import { api, apiRequest } from "@/lib/queryClient";
```

### GET Request
```typescript
// Using axios instance directly
const { data } = await api.get("/api/companies");

// With React Query (automatic)
const { data, isLoading } = useQuery({
  queryKey: ["/api/companies"]
});
```

### POST Request
```typescript
// Using apiRequest helper
await apiRequest("POST", "/api/leads", {
  name: "John",
  email: "john@test.com",
  message: "Hello"
});

// With React Query mutation
const mutation = useMutation({
  mutationFn: async (data) => {
    const response = await apiRequest("POST", "/api/newsletter", data);
    return response.data;
  }
});
```

### Error Handling
```typescript
import { ApiError } from "@/lib/queryClient";

try {
  await apiRequest("POST", "/api/newsletter", { email });
} catch (error) {
  if (error instanceof ApiError) {
    console.log(error.status);  // HTTP status code (e.g., 409)
    console.log(error.message); // Error message
  }
}
```

---

## Adding a New Page

1. Create page in `src/pages/MyPage.tsx`:
```tsx
export default function MyPage() {
  return <div>My New Page</div>;
}
```

2. Add route in `src/App.tsx`:
```tsx
import MyPage from "@/pages/MyPage";

// Inside Router component
<Route path="/my-page" component={MyPage} />
```

---

## Adding a New Component

1. Create in `src/components/MyComponent.tsx`:
```tsx
export default function MyComponent() {
  return <div className="p-4 bg-card rounded-lg">Content</div>;
}
```

2. Use in any page:
```tsx
import MyComponent from "@/components/MyComponent";

<MyComponent />
```

---

## Styling Guide

### Tailwind CSS Classes
```tsx
<div className="p-4 bg-background text-foreground rounded-lg shadow">
  <h1 className="text-2xl font-bold text-primary">Title</h1>
  <p className="text-muted-foreground">Description</p>
</div>
```

### Using shadcn/ui Components
```tsx
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

<Card className="p-6">
  <Input placeholder="Enter email" />
  <Button>Submit</Button>
</Card>
```

### Dark Mode
Dark mode is automatic based on system preference. Use Tailwind's dark variants:
```tsx
<div className="bg-white dark:bg-gray-900">
```

---

## Available Scripts

```bash
# Development (with hot reload)
npm run dev

# Build for production
npm run build

# Type checking
npm run check
```
