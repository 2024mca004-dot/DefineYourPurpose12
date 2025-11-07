import { pgTable, serial, varchar, text, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull(),
  description: text("description").notNull(),
  logo: text("logo").notNull(),
  website: text("website"),
  order: integer("order").notNull().default(0),
});

export const subscriptionPlans = pgTable("subscription_plans", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  isPopular: boolean("is_popular").notNull().default(false),
  stripePriceId: text("stripe_price_id"),
});

export const businessListings = pgTable("business_listings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  banner: text("banner").notNull(),
  logo: text("logo").notNull(),
  contactEmail: text("contact_email").notNull(),
  website: text("website"),
  planId: integer("plan_id"),
  isFeatured: boolean("is_featured").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  expiresAt: timestamp("expires_at"),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  readTime: text("read_time").notNull(),
  isPublished: boolean("is_published").notNull().default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  source: text("source").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  isActive: boolean("is_active").notNull().default(true),
  subscribedAt: timestamp("subscribed_at").notNull().defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Export types
export type Company = typeof companies.$inferSelect;
export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;
export type BusinessListing = typeof businessListings.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Lead = typeof leads.$inferSelect;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type User = typeof users.$inferSelect;

// Insert schemas
export const insertCompanySchema = createInsertSchema(companies).omit({ id: true });
export const insertSubscriptionPlanSchema = createInsertSchema(subscriptionPlans).omit({ id: true });
export const insertBusinessListingSchema = createInsertSchema(businessListings).omit({ id: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true, createdAt: true });
export const insertLeadSchema = createInsertSchema(leads).omit({ id: true, createdAt: true, status: true });
export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({ id: true, subscribedAt: true });

// Insert types
export type InsertCompany = z.infer<typeof insertCompanySchema>;
export type InsertSubscriptionPlan = z.infer<typeof insertSubscriptionPlanSchema>;
export type InsertBusinessListing = z.infer<typeof insertBusinessListingSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
