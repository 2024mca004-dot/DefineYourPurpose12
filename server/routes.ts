import { Router } from "express";
import { storage } from "./storage";
import { insertLeadSchema, insertNewsletterSubscriberSchema } from "@shared/schema";

const router = Router();

// Companies routes
router.get("/companies", async (req, res) => {
  try {
    const companies = await storage.getCompanies();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch companies" });
  }
});

// Subscription plans routes
router.get("/plans", async (req, res) => {
  try {
    const plans = await storage.getSubscriptionPlans();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch plans" });
  }
});

// Business listings routes
router.get("/listings", async (req, res) => {
  try {
    const category = req.query.category as string | undefined;
    const listings = await storage.getBusinessListings(category);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

// Blog routes
router.get("/blog", async (req, res) => {
  try {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
});

// Lead generation route
router.post("/leads", async (req, res) => {
  try {
    const validatedData = insertLeadSchema.parse(req.body);
    const lead = await storage.createLead(validatedData);
    res.json(lead);
  } catch (error) {
    res.status(400).json({ error: "Invalid lead data" });
  }
});

// Newsletter subscription route
router.post("/newsletter", async (req, res) => {
  try {
    const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
    const subscriber = await storage.createNewsletterSubscriber(validatedData);
    res.json(subscriber);
  } catch (error: any) {
    if (error?.message?.includes("unique")) {
      res.status(409).json({ error: "Email already subscribed" });
    } else {
      res.status(400).json({ error: "Invalid email data" });
    }
  }
});

export default router;
