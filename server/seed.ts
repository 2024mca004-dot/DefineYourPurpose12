import { db } from "./db";
import { companies, subscriptionPlans } from "@shared/schema";

async function seed() {
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

  console.log("Database seeding complete!");
}

seed()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
