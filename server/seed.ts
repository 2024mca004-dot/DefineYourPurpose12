import { db } from "./db";
import { companies, subscriptionPlans, blogPosts, businessListings } from "@shared/schema";

export async function seed() {
  console.log("Seeding database...");

  const existingCompanies = await db.select().from(companies);
  if (existingCompanies.length === 0) {
    await db.insert(companies).values([
      {
        name: "TagSkills EdTech",
        tagline: "Transforming Education Through Technology",
        description: "Leading EdTech platform providing comprehensive SAP training, professional development courses, and skill enhancement programs for aspiring technology professionals.",
        logo: "/assets/generated_images/TagSkills_EdTech_logo_21a5e2e4.png",
        website: "https://tagskills.com",
        order: 1
      },
      {
        name: "Invayas Technologies",
        tagline: "Enterprise Solutions & Innovation",
        description: "Delivering cutting-edge SAP S/4HANA implementations, enterprise resource planning solutions, and digital transformation consulting services to businesses worldwide.",
        logo: "/assets/generated_images/Invayas_Technologies_logo_7b61a3fd.png",
        website: "https://invayas.com",
        order: 2
      },
      {
        name: "Frillory Design House",
        tagline: "Creative Excellence in Digital Design",
        description: "Premium design studio specializing in brand identity, UI/UX design, and creative solutions for modern businesses seeking distinctive visual presence.",
        logo: "/assets/generated_images/Frillory_Design_House_logo_bf8228b5.png",
        website: "https://frillory.com",
        order: 3
      }
    ]);
    console.log("✓ Companies seeded");
  }

  const existingPlans = await db.select().from(subscriptionPlans);
  if (existingPlans.length === 0) {
    await db.insert(subscriptionPlans).values([
      {
        name: "Basic",
        price: 2000,
        description: "Essential features for startups",
        features: [
          "Company profile page",
          "Logo display",
          "Basic contact form",
          "Category listing",
          "Email support"
        ],
        isPopular: false
      },
      {
        name: "Professional",
        price: 5000,
        description: "Perfect for growing EdTech companies",
        features: [
          "Everything in Basic",
          "Featured banner display",
          "Priority placement",
          "Monthly analytics report",
          "Lead generation tools",
          "Priority email support"
        ],
        isPopular: true
      },
      {
        name: "Enterprise",
        price: 10000,
        description: "Advanced features for established brands",
        features: [
          "Everything in Professional",
          "Sponsored article placement",
          "Premium featured listing",
          "Custom integration options",
          "Dedicated account manager",
          "24/7 priority support"
        ],
        isPopular: false
      }
    ]);
    console.log("✓ Subscription plans seeded");
  }

  const existingPosts = await db.select().from(blogPosts);
  if (existingPosts.length === 0) {
    await db.insert(blogPosts).values([
      {
        title: "SAP S/4HANA Migration: A Complete Guide for 2025",
        slug: "sap-s4hana-migration-guide-2025",
        excerpt: "Comprehensive insights into planning and executing a successful SAP S/4HANA migration with minimal business disruption.",
        content: "Full article content here...",
        category: "SAP S/4HANA",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        readTime: "8 min read",
        isPublished: true,
        publishedAt: new Date("2025-01-15")
      },
      {
        title: "SAP Fiori 3.0: Enhancing User Experience in Enterprise Applications",
        slug: "sap-fiori-3-user-experience",
        excerpt: "Explore how SAP Fiori 3.0 revolutionizes enterprise UX with modern design principles and responsive interfaces.",
        content: "Full article content here...",
        category: "SAP Fiori",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        readTime: "6 min read",
        isPublished: true,
        publishedAt: new Date("2025-01-10")
      },
      {
        title: "AI Integration in SAP BTP: Building Intelligent Business Processes",
        slug: "ai-integration-sap-btp",
        excerpt: "Learn how to leverage AI services on SAP Business Technology Platform to create smarter, data-driven workflows.",
        content: "Full article content here...",
        category: "SAP BTP",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        readTime: "10 min read",
        isPublished: true,
        publishedAt: new Date("2025-01-05")
      },
      {
        title: "Best Practices for SAP Security and Compliance",
        slug: "sap-security-best-practices",
        excerpt: "Essential security strategies and compliance frameworks for protecting your SAP enterprise environment.",
        content: "Full article content here...",
        category: "Enterprise Innovation",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        readTime: "7 min read",
        isPublished: true,
        publishedAt: new Date("2024-12-28")
      },
      {
        title: "Cloud-Native Development on SAP BTP",
        slug: "cloud-native-development-sap-btp",
        excerpt: "Master cloud-native application development using SAP BTP's microservices architecture and containerization.",
        content: "Full article content here...",
        category: "SAP BTP",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        readTime: "9 min read",
        isPublished: true,
        publishedAt: new Date("2024-12-20")
      },
      {
        title: "SAP HANA Performance Optimization Techniques",
        slug: "sap-hana-performance-optimization",
        excerpt: "Advanced techniques for optimizing SAP HANA database performance and reducing query response times.",
        content: "Full article content here...",
        category: "SAP S/4HANA",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        readTime: "11 min read",
        isPublished: true,
        publishedAt: new Date("2024-12-15")
      }
    ]);
    console.log("✓ Blog posts seeded");
  }

  const existingListings = await db.select().from(businessListings);
  if (existingListings.length === 0) {
    await db.insert(businessListings).values([
      {
        name: "SAP Academy Pro",
        category: "EdTech",
        description: "Premier SAP training institute offering certified courses in S/4HANA, Fiori, and BTP with 95% placement rate.",
        banner: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
        contactEmail: "contact@sapacademypro.com",
        website: "https://sapacademypro.com",
        isFeatured: true,
        isActive: true
      },
      {
        name: "TechCorp Solutions",
        category: "SAP Partner",
        description: "Gold SAP partner specializing in end-to-end S/4HANA implementations for enterprise clients globally.",
        banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
        contactEmail: "info@techcorpsolutions.com",
        website: "https://techcorpsolutions.com",
        isFeatured: true,
        isActive: true
      },
      {
        name: "Digital Skills Hub",
        category: "Training",
        description: "Comprehensive online and offline SAP training programs with hands-on projects and industry mentorship.",
        banner: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
        logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&q=80",
        contactEmail: "hello@digitalskillshub.com",
        website: "https://digitalskillshub.com",
        isFeatured: false,
        isActive: true
      },
      {
        name: "SAP Talent Connect",
        category: "Recruitment",
        description: "Specialized recruitment agency connecting SAP professionals with top companies across India and abroad.",
        banner: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&q=80",
        contactEmail: "careers@saptalentconnect.com",
        website: "https://saptalentconnect.com",
        isFeatured: false,
        isActive: true
      },
      {
        name: "Enterprise Learning Portal",
        category: "EdTech",
        description: "AI-powered learning platform for SAP professionals with personalized course recommendations and certifications.",
        banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
        logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80",
        contactEmail: "support@enterpriselearning.com",
        website: "https://enterpriselearning.com",
        isFeatured: true,
        isActive: true
      },
      {
        name: "CloudBridge Consulting",
        category: "SAP Partner",
        description: "SAP BTP specialists helping organizations build cloud-native applications and migrate to SAP Cloud.",
        banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
        logo: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&q=80",
        contactEmail: "contact@cloudbridge.com",
        website: "https://cloudbridge.com",
        isFeatured: false,
        isActive: true
      }
    ]);
    console.log("✓ Business listings seeded");
  }

  console.log("Database seeding completed!");
}
