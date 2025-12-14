/**
 * ============================================
 * PROJECT CONFIGURATION (TypeScript)
 * ============================================
 * 
 * This file contains all configuration settings
 * for the Prashun Shetty Personal Branding Platform
 * 
 * Use this file for TypeScript imports
 * ============================================
 */

export const config = {
  
  // ==========================================
  // APP INFO
  // ==========================================
  app: {
    name: "Prashun Shetty Platform",
    description: "Personal Branding & Business Marketplace Platform",
    version: "1.0.0",
    author: "Prashun Shetty"
  },

  // ==========================================
  // SERVER CONFIGURATION
  // ==========================================
  server: {
    port: 5000,
    host: "0.0.0.0",
    environment: process.env.NODE_ENV || "development"
  },

  // ==========================================
  // DATABASE CONFIGURATION
  // ==========================================
  database: {
    url: process.env.DATABASE_URL,
    provider: "PostgreSQL (Neon Serverless)",
    orm: "Drizzle ORM"
  },

  // ==========================================
  // API ENDPOINTS
  // ==========================================
  api: {
    baseUrl: "/api",
    endpoints: {
      companies: "/api/companies",
      plans: "/api/plans",
      listings: "/api/listings",
      blog: "/api/blog",
      leads: "/api/leads",
      newsletter: "/api/newsletter"
    }
  },

  // ==========================================
  // AUTHENTICATION
  // ==========================================
  auth: {
    sessionSecret: process.env.SESSION_SECRET || "prashun-shetty-platform-secret",
    strategy: "Passport.js Local Strategy",
    passwordHashing: "scrypt"
  },

  // ==========================================
  // STRIPE PAYMENT
  // ==========================================
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    publicKey: process.env.VITE_STRIPE_PUBLIC_KEY,
    currency: "INR",
    apiVersion: "2025-10-29.clover"
  },

  // ==========================================
  // SUBSCRIPTION PLANS (in INR)
  // ==========================================
  plans: {
    starter: {
      name: "Starter",
      price: 2000,
      duration: "30 days"
    },
    professional: {
      name: "Professional",
      price: 5000,
      duration: "90 days",
      isPopular: true
    },
    enterprise: {
      name: "Enterprise",
      price: 10000,
      duration: "180 days"
    }
  },

  // ==========================================
  // COMPANIES
  // ==========================================
  companies: [
    {
      name: "TagSkills EdTech",
      website: "https://www.tagskills.com",
      description: "SAP Training & Professional Development"
    },
    {
      name: "Invayas Technologies",
      website: "https://www.invayas.com",
      description: "SAP S/4HANA Implementations"
    },
    {
      name: "Frillory Design House",
      website: "https://www.frillory.com",
      description: "Brand Identity & UI/UX Design"
    }
  ],

  // ==========================================
  // BUSINESS LISTING CATEGORIES
  // ==========================================
  categories: [
    "EdTech",
    "SAP Partner",
    "Training",
    "Recruitment"
  ] as const,

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  contact: {
    email: "Prashunshetty@tagskills.com",
    phone: "+91 8971164999",
    location: "Bangalore, Karnataka, India"
  },

  // ==========================================
  // SOCIAL MEDIA LINKS
  // ==========================================
  social: {
    linkedin: "https://linkedin.com/in/prashun-shetty-41903a39/",
    youtube: "https://youtube.com/@tagskills9749",
    youtubeChannel: "@tagskills9749"
  },

  // ==========================================
  // FRONTEND TECH STACK
  // ==========================================
  frontend: {
    framework: "React 18",
    language: "TypeScript",
    bundler: "Vite",
    styling: "Tailwind CSS",
    components: "shadcn/ui",
    httpClient: "Axios",
    stateManagement: "React Query (TanStack Query)",
    routing: "Wouter"
  },

  // ==========================================
  // BACKEND TECH STACK
  // ==========================================
  backend: {
    framework: "Express.js",
    language: "TypeScript",
    database: "PostgreSQL",
    orm: "Drizzle ORM",
    authentication: "Passport.js",
    payments: "Stripe"
  },

  // ==========================================
  // FILE PATHS
  // ==========================================
  paths: {
    frontend: {
      root: "client/",
      source: "client/src/",
      components: "client/src/components/",
      pages: "client/src/pages/",
      hooks: "client/src/hooks/",
      lib: "client/src/lib/",
      styles: "client/src/index.css"
    },
    backend: {
      root: "server/",
      routes: "server/routes.ts",
      storage: "server/storage.ts",
      auth: "server/auth.ts",
      database: "server/db.ts"
    },
    shared: {
      root: "shared/",
      schema: "shared/schema.ts"
    },
    assets: "attached_assets/"
  },

  // ==========================================
  // DESIGN TOKENS
  // ==========================================
  design: {
    colors: {
      primary: "#0A2342",    // Navy Blue
      accent: "#F1C40F",     // Gold
      background: "#FFFFFF",
      foreground: "#1A1A1A"
    },
    fonts: {
      primary: "Inter",
      headings: "Poppins"
    },
    spacing: [4, 6, 8, 12, 16, 20, 24] as const,
    maxWidth: "7xl"
  }

} as const;

// ==========================================
// TYPE EXPORTS
// ==========================================
export type Config = typeof config;
export type Category = typeof config.categories[number];
export type Plan = keyof typeof config.plans;

export default config;
