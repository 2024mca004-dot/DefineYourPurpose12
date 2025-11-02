import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";
import {
  users,
  companies,
  subscriptionPlans,
  businessListings,
  blogPosts,
  leads,
  newsletterSubscribers,
  type User,
  type InsertUser,
  type Company,
  type InsertCompany,
  type SubscriptionPlan,
  type InsertSubscriptionPlan,
  type BusinessListing,
  type InsertBusinessListing,
  type BlogPost,
  type InsertBlogPost,
  type Lead,
  type InsertLead,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber,
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getCompanies(): Promise<Company[]>;
  getCompany(id: string): Promise<Company | undefined>;
  createCompany(company: InsertCompany): Promise<Company>;
  updateCompany(id: string, company: Partial<InsertCompany>): Promise<Company | undefined>;
  deleteCompany(id: string): Promise<void>;

  getSubscriptionPlans(): Promise<SubscriptionPlan[]>;
  getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined>;
  createSubscriptionPlan(plan: InsertSubscriptionPlan): Promise<SubscriptionPlan>;
  updateSubscriptionPlan(id: string, plan: Partial<InsertSubscriptionPlan>): Promise<SubscriptionPlan | undefined>;

  getBusinessListings(category?: string): Promise<BusinessListing[]>;
  getBusinessListing(id: string): Promise<BusinessListing | undefined>;
  createBusinessListing(listing: InsertBusinessListing): Promise<BusinessListing>;
  updateBusinessListing(id: string, listing: Partial<InsertBusinessListing>): Promise<BusinessListing | undefined>;
  deleteBusinessListing(id: string): Promise<void>;

  getBlogPosts(published?: boolean): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<void>;

  getLeads(): Promise<Lead[]>;
  createLead(lead: InsertLead): Promise<Lead>;
  updateLeadStatus(id: string, status: string): Promise<Lead | undefined>;

  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  unsubscribeNewsletter(email: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getCompanies(): Promise<Company[]> {
    return await db.select().from(companies).orderBy(companies.order);
  }

  async getCompany(id: string): Promise<Company | undefined> {
    const [company] = await db.select().from(companies).where(eq(companies.id, id));
    return company;
  }

  async createCompany(company: InsertCompany): Promise<Company> {
    const [newCompany] = await db.insert(companies).values(company).returning();
    return newCompany;
  }

  async updateCompany(id: string, company: Partial<InsertCompany>): Promise<Company | undefined> {
    const [updated] = await db.update(companies).set(company).where(eq(companies.id, id)).returning();
    return updated;
  }

  async deleteCompany(id: string): Promise<void> {
    await db.delete(companies).where(eq(companies.id, id));
  }

  async getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    return await db.select().from(subscriptionPlans).orderBy(subscriptionPlans.price);
  }

  async getSubscriptionPlan(id: string): Promise<SubscriptionPlan | undefined> {
    const [plan] = await db.select().from(subscriptionPlans).where(eq(subscriptionPlans.id, id));
    return plan;
  }

  async createSubscriptionPlan(plan: InsertSubscriptionPlan): Promise<SubscriptionPlan> {
    const [newPlan] = await db.insert(subscriptionPlans).values(plan).returning();
    return newPlan;
  }

  async updateSubscriptionPlan(id: string, plan: Partial<InsertSubscriptionPlan>): Promise<SubscriptionPlan | undefined> {
    const [updated] = await db.update(subscriptionPlans).set(plan).where(eq(subscriptionPlans.id, id)).returning();
    return updated;
  }

  async getBusinessListings(category?: string): Promise<BusinessListing[]> {
    if (category && category !== "All") {
      return await db.select().from(businessListings)
        .where(and(eq(businessListings.isActive, true), eq(businessListings.category, category)))
        .orderBy(desc(businessListings.isFeatured), desc(businessListings.createdAt));
    }
    return await db.select().from(businessListings)
      .where(eq(businessListings.isActive, true))
      .orderBy(desc(businessListings.isFeatured), desc(businessListings.createdAt));
  }

  async getBusinessListing(id: string): Promise<BusinessListing | undefined> {
    const [listing] = await db.select().from(businessListings).where(eq(businessListings.id, id));
    return listing;
  }

  async createBusinessListing(listing: InsertBusinessListing): Promise<BusinessListing> {
    const [newListing] = await db.insert(businessListings).values(listing).returning();
    return newListing;
  }

  async updateBusinessListing(id: string, listing: Partial<InsertBusinessListing>): Promise<BusinessListing | undefined> {
    const [updated] = await db.update(businessListings).set(listing).where(eq(businessListings.id, id)).returning();
    return updated;
  }

  async deleteBusinessListing(id: string): Promise<void> {
    await db.delete(businessListings).where(eq(businessListings.id, id));
  }

  async getBlogPosts(published = true): Promise<BlogPost[]> {
    if (published) {
      return await db.select().from(blogPosts)
        .where(eq(blogPosts.isPublished, true))
        .orderBy(desc(blogPosts.publishedAt));
    }
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [newPost] = await db.insert(blogPosts).values(post).returning();
    return newPost;
  }

  async updateBlogPost(id: string, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [updated] = await db.update(blogPosts).set({ ...post, updatedAt: new Date() }).where(eq(blogPosts.id, id)).returning();
    return updated;
  }

  async deleteBlogPost(id: string): Promise<void> {
    await db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async getLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async createLead(lead: InsertLead): Promise<Lead> {
    const [newLead] = await db.insert(leads).values(lead).returning();
    return newLead;
  }

  async updateLeadStatus(id: string, status: string): Promise<Lead | undefined> {
    const [updated] = await db.update(leads).set({ status }).where(eq(leads.id, id)).returning();
    return updated;
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return await db.select().from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.isActive, true))
      .orderBy(desc(newsletterSubscribers.subscribedAt));
  }

  async createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const [newSubscriber] = await db.insert(newsletterSubscribers).values(subscriber).returning();
    return newSubscriber;
  }

  async unsubscribeNewsletter(email: string): Promise<void> {
    await db.update(newsletterSubscribers)
      .set({ isActive: false })
      .where(eq(newsletterSubscribers.email, email));
  }
}

export const storage = new DatabaseStorage();
