# Frontend-Only Setup Guide

This guide explains how to extract just the frontend design from this project and run it standalone.

## ✅ What's Already Done

I've converted all components to use static data instead of backend API calls:
- Created static data files in `client/src/data/`
- Updated all components to use local data
- Removed React Query dependencies from components
- Simplified form submissions to show success messages

## 📋 Steps to Create Frontend-Only Version

### 1. Download the Project

Use Replit's "Export as ZIP" option:
- Click the three-dot menu (⋮) in Replit
- Select "Download as ZIP" or "Export as ZIP"
- Extract the ZIP file on your computer

### 2. Create a New Vite React Project

```bash
npm create vite@latest my-prashun-design -- --template react-ts
cd my-prashun-design
```

### 3. Copy These Folders/Files

From the extracted ZIP, copy:

**Required:**
- `client/src/components/` → `src/components/`
- `client/src/pages/Home.tsx` → `src/pages/Home.tsx`  
- `client/src/pages/not-found.tsx` → `src/pages/not-found.tsx`
- `client/src/data/` → `src/data/` (static data files)
- `client/src/hooks/` → `src/hooks/`
- `client/src/lib/utils.ts` → `src/lib/utils.ts`
- `client/src/index.css` → `src/index.css`
- `client/src/App.tsx` → `src/App.tsx`
- `tailwind.config.ts` → `tailwind.config.ts`
- `postcss.config.js` → `postcss.config.js`
- `attached_assets/` → `public/assets/`

### 4. Install Dependencies

```bash
npm install wouter lucide-react
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-slot @radix-ui/react-label
npm install @radix-ui/react-toast @radix-ui/react-tooltip
npm install tailwindcss autoprefixer postcss
npm install tailwindcss-animate

# Install other Radix UI components as needed based on what's used
```

### 5. Update `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./public/assets"),
    },
  },
});
```

### 6. Update `src/main.tsx`

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 7. Update Asset Paths

Since assets are now in `public/assets/`, update the paths in data files:

**In `src/data/companies.ts`:**
```typescript
logo: "/assets/generated_images/TagSkills_EdTech_logo_21a5e2e4.png"
```

Keep the paths as they are - they'll work with the public folder.

### 8. Run the Project

```bash
npm run dev
```

Your frontend-only design should now be running at `http://localhost:5173`

## 🎨 What's Included

### Design System
- **Colors**: Navy Blue (#0A2342) + Gold (#F1C40F)
- **Fonts**: Inter (body) + Poppins (headings)
- **Components**: Fully styled shadcn/ui components

### Sections
✅ Hero with CTA
✅ Companies showcase (3 companies)
✅ Business listings with category filters (6 listings)
✅ Pricing tiers (3 plans)
✅ Blog/Thought Hub (6 articles)
✅ Contact form (with toast notifications)
✅ Newsletter subscription
✅ Footer with links

### Features
- Smooth scrolling navigation
- Responsive design (mobile, tablet, desktop)
- Dark/light mode support
- Toast notifications
- Category filtering
- All interactive elements with hover states

## 🔄 Customizing Data

Edit the files in `src/data/` to customize:
- `companies.ts` - Your companies
- `subscriptionPlans.ts` - Pricing tiers
- `blogPosts.ts` - Blog articles
- `businessListings.ts` - Partner listings

## 📝 Notes

- Forms submit locally and show success messages (no actual sending)
- All data is static - perfect for demos and prototypes
- No backend required - just pure React + Vite
- All images use external URLs (Unsplash) or local assets

## 🚀 Deploy

Build for production:
```bash
npm run build
```

Deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

**Need help?** All components are self-contained and well-documented with data-testid attributes for easy reference.
