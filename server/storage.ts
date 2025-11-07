import { db } from "./db";
import * as schema from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCompanies(): Promise<schema.Company[]>;
  getSubscriptionPlans(): Promise<schema.SubscriptionPlan[]>;
  getBusinessListings(category?: string): Promise<schema.BusinessListing[]>;
  getBlogPosts(): Promise<schema.BlogPost[]>;
  createLead(lead: schema.InsertLead): Promise<schema.Lead>;
  createNewsletterSubscriber(subscriber: schema.InsertNewsletterSubscriber): Promise<schema.NewsletterSubscriber>;
}

export class DbStorage implements IStorage {
  async getCompanies(): Promise<schema.Company[]> {
    return await db.select().from(schema.companies).orderBy(schema.companies.order);
  }

  async getSubscriptionPlans(): Promise<schema.SubscriptionPlan[]> {
    return await db.select().from(schema.subscriptionPlans);
  }

  async getBusinessListings(category?: string): Promise<schema.BusinessListing[]> {
    if (category) {
      return await db
        .select()
        .from(schema.businessListings)
        .where(eq(schema.businessListings.category, category));
    }
    return await db.select().from(schema.businessListings);
  }

  async getBlogPosts(): Promise<schema.BlogPost[]> {
    return await db
      .select()
      .from(schema.blogPosts)
      .where(eq(schema.blogPosts.isPublished, true))
      .orderBy(schema.blogPosts.publishedAt);
  }

  async createLead(lead: schema.InsertLead): Promise<schema.Lead> {
    const [result] = await db.insert(schema.leads).values(lead).returning();
    return result;
  }

  async createNewsletterSubscriber(subscriber: schema.InsertNewsletterSubscriber): Promise<schema.NewsletterSubscriber> {
    const [result] = await db.insert(schema.newsletterSubscribers).values(subscriber).returning();
    return result;
  }
}

export const storage = new DbStorage();
