# Prashun Shetty Personal Branding & Business Marketplace Platform

## Overview

This is a full-stack web application serving as a personal branding platform for Prashun Shetty, SAP S/4 HANA Mentor and entrepreneur. The platform showcases three main companies (TagSkills EdTech, Invayas Technologies, and Frillory Design House) while also functioning as a marketplace for EdTech and business partners to list their companies through paid subscription plans.

The application enables lead generation through contact forms, newsletter subscriptions, and business listing inquiries. It integrates Stripe for payment processing and provides a content management system for blog posts, companies, and business listings.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite as the build tool and development server.

**UI Component System**: Utilizes shadcn/ui (a collection of re-usable components built with Radix UI primitives) in the "new-york" style variant. This provides accessible, customizable components with consistent styling.

**Styling Approach**: TailwindCSS with custom design tokens. The design system follows professional SaaS patterns inspired by Stripe and Linear, emphasizing clarity, trust, and conversion optimization. Custom CSS variables handle theming for both light and dark modes.

**State Management**: React Query (TanStack Query) handles all server state management, data fetching, caching, and synchronization. Local component state uses React hooks.

**HTTP Client**: Axios is used for all API requests. The axios instance is configured in `client/src/lib/queryClient.ts` with:
- Base URL configuration
- Credentials included for session cookies
- Custom `ApiError` class for error handling with HTTP status codes
- Integration with React Query for automatic data fetching

**Routing**: Wouter is used for client-side routing, providing a lightweight alternative to React Router. Routes include Home (`/`), Checkout (`/checkout`), Success (`/success`), and a 404 page.

**Design Principles**: 
- Professional typography using Inter (primary) and Poppins (headings)
- Consistent spacing primitives (4, 6, 8, 12, 16, 20, 24)
- Container max-width of 7xl with responsive padding
- Elevation-based interaction states (hover-elevate, active-elevate-2)

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript. The server handles API routes, authentication, session management, and serves the static frontend in production.

**API Design**: RESTful API with endpoints organized by resource type:
- `/api/auth/*` - Authentication (register, login, logout, user info)
- `/api/companies` - Company CRUD operations
- `/api/listings` - Business listing management with category filtering
- `/api/plans` - Subscription plan retrieval
- `/api/blog` - Blog post management
- `/api/leads` - Lead capture from contact forms
- `/api/newsletter` - Newsletter subscription management
- `/api/create-checkout-session` - Stripe checkout session creation
- `/api/webhook` - Stripe webhook handler for payment events

**Session Management**: Uses express-session with MemoryStore for development. Sessions are configured with secure cookies and handle user authentication state.

**Authentication Strategy**: Passport.js with Local Strategy for username/password authentication. Passwords are hashed using scrypt with random salts. Authentication middleware (`requireAuth`) protects admin endpoints.

**Development Mode**: Hot module replacement (HMR) through Vite middleware integrated into Express. The server proxies all non-API requests to Vite during development.

**Production Build**: Frontend is built to `dist/public`, backend is bundled using esbuild to `dist/index.js`.

### Data Storage

**Database**: PostgreSQL (configured to use Neon serverless Postgres with WebSocket support via `@neondatabase/serverless`).

**ORM**: Drizzle ORM provides type-safe database access with zero-cost type inference. Schema definitions are shared between client and server through the `shared/schema.ts` file.

**Schema Structure**:
- `users` - Authentication credentials (username, hashed password)
- `companies` - Prashun Shetty's three main companies with logo, description, tagline, website, and display order
- `subscription_plans` - Pricing tiers for business listings (name, price, features array, Stripe price ID)
- `business_listings` - Partner company listings linked to subscription plans (banner, logo, category, contact info, featured status, expiration)
- `blog_posts` - Content management for SAP insights blog (title, excerpt, image, category, publish status)
- `leads` - Contact form submissions (name, email, company, message, source)
- `newsletter_subscribers` - Email list for newsletter

**Data Access Layer**: Storage abstraction (`server/storage.ts`) implements an `IStorage` interface, providing CRUD operations for all entities. This allows for potential storage backend changes without affecting business logic.

**Migrations**: Drizzle Kit manages schema migrations with configuration in `drizzle.config.ts`. Migrations are stored in the `migrations/` directory.

**Seeding**: Initial data seeding (`server/seed.ts`) populates the three main companies and subscription plans on first run.

### External Dependencies

**Payment Processing**: Stripe integration for subscription payments
- Uses Stripe Elements and Stripe.js on the frontend
- Backend creates checkout sessions and handles webhook events
- Environment variables: `STRIPE_SECRET_KEY`, `VITE_STRIPE_PUBLIC_KEY`
- API version: "2025-10-29.clover"

**Database Service**: Neon Serverless Postgres
- Serverless PostgreSQL with WebSocket support
- Connection via `DATABASE_URL` environment variable
- Uses connection pooling via `@neondatabase/serverless` Pool

**Email/Newsletter**: Infrastructure for newsletter subscriptions is in place (database schema, API endpoints), but actual email sending service is not yet integrated.

**Session Storage**: Currently uses in-memory session store (MemoryStore from `memorystore` package). In production, this should be replaced with a persistent store like Redis or PostgreSQL-backed sessions (`connect-pg-simple` is already installed but not configured).

**Image Assets**: Static images are stored in `attached_assets/` directory with references in the database. The application serves both uploaded assets and generated placeholder images.

**Font Services**: Google Fonts CDN for typography (Inter, Poppins, DM Sans, Fira Code, Geist Mono, Architects Daughter).

**Build Tools**:
- Vite for frontend bundling and development server
- esbuild for backend bundling
- TypeScript compiler for type checking
- PostCSS with Tailwind and Autoprefixer

**Replit-Specific Integrations**: When running on Replit (`REPL_ID` environment variable present), the application loads additional Vite plugins:
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development banner
- `@replit/vite-plugin-runtime-error-modal` - Runtime error overlay

**Environment Variables Required**:
- `DATABASE_URL` - PostgreSQL connection string
- `STRIPE_SECRET_KEY` - Stripe secret key for backend
- `VITE_STRIPE_PUBLIC_KEY` - Stripe publishable key for frontend
- `SESSION_SECRET` - Secret for session signing (defaults to "prashun-shetty-platform-secret")
- `NODE_ENV` - Environment mode (development/production)