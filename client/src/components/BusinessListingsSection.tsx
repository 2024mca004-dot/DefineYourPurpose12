import { useState } from "react";
import BusinessListingCard from "./BusinessListingCard";
import { Button } from "@/components/ui/button";
import bannerImage from "@assets/generated_images/Business_collaboration_banner_075994b5.png";
import sapBanner from "@assets/generated_images/SAP_ERP_technology_visualization_5ead2768.png";
import aiBanner from "@assets/generated_images/AI_and_machine_learning_1e520b42.png";
import tagSkillsLogo from "@assets/generated_images/TagSkills_EdTech_logo_21a5e2e4.png";
import invayasLogo from "@assets/generated_images/Invayas_Technologies_logo_7b61a3fd.png";

//todo: remove mock functionality
const listings = [
  {
    banner: bannerImage,
    logo: tagSkillsLogo,
    name: "TechVision Academy",
    category: "EdTech",
    description: "Advanced SAP training programs with hands-on experience and industry certification preparation.",
    pricing: "₹5,000/month",
    featured: true
  },
  {
    banner: sapBanner,
    logo: invayasLogo,
    name: "SAP Elite Partners",
    category: "SAP Partner",
    description: "Certified SAP consulting firm specializing in S/4HANA migrations and enterprise implementations.",
    pricing: "₹8,000/month",
    featured: true
  },
  {
    banner: aiBanner,
    logo: tagSkillsLogo,
    name: "SkillBoost Learning",
    category: "Training",
    description: "Professional development courses in ERP, cloud computing, and emerging technologies.",
    pricing: "₹4,000/month"
  },
  {
    banner: bannerImage,
    logo: invayasLogo,
    name: "TalentHub Recruitment",
    category: "Recruitment",
    description: "Connecting SAP professionals with top technology companies across India and globally.",
    pricing: "₹6,000/month"
  },
  {
    banner: sapBanner,
    logo: tagSkillsLogo,
    name: "Fiori Masters",
    category: "SAP Partner",
    description: "Specialized Fiori development and UI/UX consulting for SAP enterprise applications.",
    pricing: "₹7,000/month"
  },
  {
    banner: aiBanner,
    logo: invayasLogo,
    name: "ERP Innovations Lab",
    category: "Training",
    description: "Cutting-edge training in SAP BTP, AI integration, and next-generation ERP solutions.",
    pricing: "₹5,500/month"
  }
];

const categories = ["All", "EdTech", "SAP Partner", "Training", "Recruitment"];

export default function BusinessListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredListings = selectedCategory === "All"
    ? listings
    : listings.filter(listing => listing.category === selectedCategory);

  return (
    <section id="listings" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-listings-title">
            EdTech & Business Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with leading EdTech companies, SAP partners, and training providers in our ecosystem
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredListings.map((listing, index) => (
            <BusinessListingCard key={index} {...listing} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" data-testid="button-view-all-listings">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
