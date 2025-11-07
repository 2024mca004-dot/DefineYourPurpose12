# Prashun Shetty Personal Branding & Business Listing Platform

## Overview

This is a personal branding and business listing marketplace platform for Prashun Shetty, an SAP S/4 HANA Mentor and founder of multiple companies. The platform serves three core purposes:

1. **Personal Branding** - Showcasing Prashun Shetty's achievements, expertise, and leadership in SAP and EdTech
2. **Company Showcase** - Highlighting three core companies: TagSkills EdTech, Invayas Technologies, and Frillory Design House
3. **Business Listing Marketplace** - A lead generation platform where EdTech and startup companies can list their businesses, subscribe to monthly plans, and generate leads through contact forms

The platform is built as a full-stack web application with a professional SaaS-inspired design system, drawing inspiration from Stripe's clarity, Linear's precision, and enterprise platforms like HubSpot.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and API data fetching
- Tailwind CSS for utility-first styling

**UI Component System:**
- shadcn/ui component library with Radix UI primitives for accessible components
- Custom design system using Inter (primary) and Poppins (secondary) fonts
- Comprehensive component catalog in `/client/src/components/ui/`
- Reusable page sections in `/client/src/components/` (Hero, CompaniesSection, BlogSection, etc.)

**Design Principles:**
- Professional authority with clean, confident design
- Clear information hierarchy for complex content sections
- Conversion-focused with strategic CTAs for lead generation
- Responsive mobile-first approach with breakpoints at 768px and 1024px
- Consistent spacing system using multiples of 4px (4, 6, 8, 12, 16, 20, 24)

**State Management Strategy:**
- Server state managed via React Query with infinite stale time and no automatic refetching
- Form state handled locally with React hooks
- Authentication state managed through passport session cookies
- No global client state management library needed

### Backend Architecture

**Technology Stack:**
- Node.js with Express.js for the HTTP server
- TypeScript for type safety across the full stack
- Drizzle ORM for database interactions with type-safe schema
- Neon serverless PostgreSQL for database (configured but can be swapped)
- Passport.js with local strategy for authentication

**API Design:**
- RESTful API endpoints under `/api/` prefix
- JSON request/response format
- Session-based authentication with express-session
- Protected admin routes using `requireAuth` middleware

**Key API Endpoints:**
- `/api/companies` - CRUD operations for company showcase
- `/api/listings` - Business listing management with category filtering
- `/api/plans` - Subscription plan management
- `/api/blog` - Blog post CRUD operations
- `/api/leads` - Lead capture from contact forms
- `/api/newsletter` - Newsletter subscription management
- `/api/create-checkout-session` - Stripe payment integration
- `/api/auth/*` - Authentication endpoints (register, login, logout)

**Authentication Strategy:**
- Password hashing using Node.js crypto scrypt with random salts
- Session storage using memory store (can be upgraded to PostgreSQL store via connect-pg-simple)
- User model with username and hashed password fields
- Protected routes require authentication middleware

### Data Storage Architecture

**Database Schema (Drizzle ORM):**

The application uses a relational schema with the following core tables:

1. **users** - Authentication and user management
   - id (UUID primary key)
   - username (unique)
   - password (hashed)

2. **companies** - Showcase of owned companies
   - id, name, tagline, description, logo, website, order, createdAt

3. **subscriptionPlans** - Pricing tiers for business listings
   - id, name, price, description, features (array), isPopular, stripePriceId, createdAt

4. **businessListings** - Third-party company listings
   - id, name, category, description, banner, logo, contactEmail, website, planId (FK), isFeatured, isActive, createdAt, expiresAt

5. **blogPosts** - SAP insights and thought leadership content
   - id, title, excerpt, content, image, category, readTime, isPublished, publishedAt, createdAt

6. **leads** - Contact form submissions and inquiries
   - id, name, email, company, message, source, createdAt

7. **newsletterSubscribers** - Email newsletter subscriptions
   - id, email, subscribedAt

**Database Connection:**
- Uses Neon serverless PostgreSQL with WebSocket support
- Connection pooling via @neondatabase/serverless Pool
- Environment variable `DATABASE_URL` required for connection
- Drizzle Kit for schema migrations in `/migrations` directory

**Seeding Strategy:**
- Initial seed data in `server/seed.ts` for companies, subscription plans, and sample content
- Checks for existing data before inserting to prevent duplicates

### External Dependencies

**Payment Processing:**
- **Stripe Integration** - Subscription payment handling
  - Frontend: `@stripe/stripe-js` and `@stripe/react-stripe-js` for checkout UI
  - Backend: Stripe Node.js SDK for creating checkout sessions
  - Environment variables required: `STRIPE_SECRET_KEY` (server), `VITE_STRIPE_PUBLIC_KEY` (client)
  - Subscription plans linked via `stripePriceId` field
  - Checkout flow: Plan selection → `/checkout` page → Stripe session → `/success` redirect

**Database Service:**
- **Neon Serverless PostgreSQL** - Cloud PostgreSQL database
  - Serverless architecture with automatic scaling
  - WebSocket connections for real-time capabilities
  - Requires `DATABASE_URL` environment variable
  - Can be replaced with any PostgreSQL-compatible database

**Session Management:**
- Session storage using `memorystore` (development)
- Can be upgraded to PostgreSQL-backed sessions via `connect-pg-simple` package
- Requires `SESSION_SECRET` environment variable for secure session encryption

**Development Tools:**
- Replit-specific plugins for development environment (@replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner)
- Only loaded in development mode when `REPL_ID` is present

**Email Service:**
- Newsletter subscription storage (no email provider integrated yet)
- Lead submissions stored in database for manual follow-up
- Ready for integration with SendGrid, Mailgun, or similar services

**Asset Management:**
- Static assets stored in `/attached_assets` directory
- Images referenced using Vite's asset import system
- Path aliases configured: `@assets` maps to `/attached_assets`