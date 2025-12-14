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

  private businessListings: schema.BusinessListing[] = [
    {
      id: 1,
      name: "SAP Academy Pro",
      category: "EdTech",
      description: "Premier SAP training institute offering certified courses in S/4HANA, Fiori, and BTP with 95% placement rate.",
      banner: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      contactEmail: "contact@sapacademypro.com",
      website: "https://sapacademypro.com",
      isFeatured: true,
      isActive: true,
      planId: 2,
      expiresAt: null
    },
    {
      id: 2,
      name: "TechCorp Solutions",
      category: "SAP Partner",
      description: "Gold SAP partner specializing in end-to-end S/4HANA implementations for enterprise clients globally.",
      banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      contactEmail: "info@techcorpsolutions.com",
      website: "https://techcorpsolutions.com",
      isFeatured: true,
      isActive: true,
      planId: 3,
      expiresAt: null
    },
    {
      id: 3,
      name: "Digital Skills Hub",
      category: "Training",
      description: "Comprehensive online and offline SAP training programs with hands-on projects and industry mentorship.",
      banner: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&q=80",
      contactEmail: "hello@digitalskillshub.com",
      website: "https://digitalskillshub.com",
      isFeatured: false,
      isActive: true,
      planId: 1,
      expiresAt: null
    },
    {
      id: 4,
      name: "SAP Talent Connect",
      category: "Recruitment",
      description: "Specialized recruitment agency connecting SAP professionals with top companies across India and abroad.",
      banner: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&q=80",
      contactEmail: "careers@saptalentconnect.com",
      website: "https://saptalentconnect.com",
      isFeatured: false,
      isActive: true,
      planId: 2,
      expiresAt: null
    },
    {
      id: 5,
      name: "Enterprise Learning Portal",
      category: "EdTech",
      description: "AI-powered learning platform for SAP professionals with personalized course recommendations and certifications.",
      banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80",
      contactEmail: "support@enterpriselearning.com",
      website: "https://enterpriselearning.com",
      isFeatured: true,
      isActive: true,
      planId: 2,
      expiresAt: null
    },
    {
      id: 6,
      name: "CloudBridge Consulting",
      category: "SAP Partner",
      description: "SAP BTP specialists helping organizations build cloud-native applications and migrate to SAP Cloud.",
      banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      logo: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&q=80",
      contactEmail: "contact@cloudbridge.com",
      website: "https://cloudbridge.com",
      isFeatured: false,
      isActive: true,
      planId: 1,
      expiresAt: null
    }
  ];
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
      throw new Error("unique constraint violation: email already subscribed");
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
