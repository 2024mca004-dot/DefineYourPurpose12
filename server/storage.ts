import * as schema from "@shared/schema";

export interface IStorage {
  getCompanies(): Promise<schema.Company[]>;
  getSubscriptionPlans(): Promise<schema.SubscriptionPlan[]>;
  getBusinessListings(category?: string): Promise<schema.BusinessListing[]>;
  getBlogPosts(): Promise<schema.BlogPost[]>;
  createLead(lead: schema.InsertLead): Promise<schema.Lead>;
  createNewsletterSubscriber(subscriber: schema.InsertNewsletterSubscriber): Promise<schema.NewsletterSubscriber>;
}

export class MemStorage implements IStorage {
  private companies: schema.Company[] = [
    {
      id: 1,
      name: "TagSkills EdTech",
      tagline: "Transforming Education Through Technology",
      description: "Leading EdTech platform providing comprehensive SAP training, professional development courses, and skill enhancement programs for aspiring technology professionals.",
      logo: "/attached_assets/image_1763310394785.png",
      website: "https://www.tagskills.com",
      order: 1
    },
    {
      id: 2,
      name: "Invayas Technologies",
      tagline: "Enterprise Solutions & Innovation",
      description: "Delivering cutting-edge SAP S/4HANA implementations, enterprise resource planning solutions, and digital transformation consulting services to businesses worldwide.",
      logo: "/attached_assets/image_1763310692087.png",
      website: "https://www.invayas.com/",
      order: 2
    },
    {
      id: 3,
      name: "Frillory Design House",
      tagline: "Creative Excellence in Digital Design",
      description: "Premium design studio specializing in brand identity, UI/UX design, and creative solutions for modern businesses seeking distinctive visual presence.",
      logo: "/attached_assets/image_1763310816169.png",
      website: "https://www.frillory.com/",
      order: 3
    }
  ];

  private subscriptionPlans: schema.SubscriptionPlan[] = [
    {
      id: 1,
      name: "Starter",
      price: 2000,
      description: "Perfect for small businesses getting started",
      features: ["Basic company listing", "Logo display", "Contact information", "30-day visibility"],
      isPopular: false,
      stripePriceId: null
    },
    {
      id: 2,
      name: "Professional",
      price: 5000,
      description: "Best for growing businesses",
      features: ["Enhanced listing", "Priority placement", "Social media links", "90-day visibility", "Analytics dashboard"],
      isPopular: true,
      stripePriceId: null
    },
    {
      id: 3,
      name: "Enterprise",
      price: 10000,
      description: "For established enterprises",
      features: ["Premium listing", "Featured badge", "Video showcase", "180-day visibility", "Dedicated support", "Custom branding"],
      isPopular: false,
      stripePriceId: null
    }
  ];

  private businessListings: schema.BusinessListing[] = [];
  private blogPosts: schema.BlogPost[] = [];
  private leads: schema.Lead[] = [];
  private newsletterSubscribers: schema.NewsletterSubscriber[] = [];
  private leadIdCounter = 1;
  private subscriberIdCounter = 1;

  async getCompanies(): Promise<schema.Company[]> {
    return this.companies.sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  async getSubscriptionPlans(): Promise<schema.SubscriptionPlan[]> {
    return this.subscriptionPlans;
  }

  async getBusinessListings(category?: string): Promise<schema.BusinessListing[]> {
    if (category) {
      return this.businessListings.filter(listing => listing.category === category);
    }
    return this.businessListings;
  }

  async getBlogPosts(): Promise<schema.BlogPost[]> {
    return this.blogPosts.filter(post => post.isPublished);
  }

  async createLead(lead: schema.InsertLead): Promise<schema.Lead> {
    const newLead: schema.Lead = {
      id: this.leadIdCounter++,
      name: lead.name,
      email: lead.email,
      company: lead.company || null,
      message: lead.message,
      source: lead.source,
      status: "new",
      createdAt: new Date()
    };
    this.leads.push(newLead);
    return newLead;
  }

  async createNewsletterSubscriber(subscriber: schema.InsertNewsletterSubscriber): Promise<schema.NewsletterSubscriber> {
    const existingSubscriber = this.newsletterSubscribers.find(s => s.email === subscriber.email);
    if (existingSubscriber) {
      return existingSubscriber;
    }
    
    const newSubscriber: schema.NewsletterSubscriber = {
      id: this.subscriberIdCounter++,
      email: subscriber.email,
      isActive: true,
      subscribedAt: new Date()
    };
    this.newsletterSubscribers.push(newSubscriber);
    return newSubscriber;
  }
}

export const storage = new MemStorage();
