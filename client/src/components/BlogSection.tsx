import BlogPostCard from "./BlogPostCard";
import { Button } from "@/components/ui/button";
import sapImage from "@assets/generated_images/SAP_ERP_technology_visualization_5ead2768.png";
import fioriImage from "@assets/generated_images/SAP_Fiori_UI_concept_655e15a9.png";
import aiImage from "@assets/generated_images/AI_and_machine_learning_1e520b42.png";

//todo: remove mock functionality
const blogPosts = [
  {
    image: sapImage,
    category: "SAP S/4HANA",
    title: "Mastering SAP S/4HANA Migration: A Complete Guide",
    excerpt: "Learn the essential strategies and best practices for a successful SAP S/4HANA migration in your enterprise environment.",
    date: "Jan 15, 2025",
    readTime: "8 min read"
  },
  {
    image: fioriImage,
    category: "Fiori",
    title: "Building Modern UX with SAP Fiori Elements",
    excerpt: "Discover how SAP Fiori Elements accelerates app development while maintaining consistency and user experience excellence.",
    date: "Jan 10, 2025",
    readTime: "6 min read"
  },
  {
    image: aiImage,
    category: "AI & Innovation",
    title: "SAP Joule: The Future of AI-Powered ERP",
    excerpt: "Explore how SAP's AI copilot Joule is transforming business processes and decision-making in enterprise systems.",
    date: "Jan 5, 2025",
    readTime: "10 min read"
  },
  {
    image: sapImage,
    category: "RAP",
    title: "RESTful Application Programming in SAP BTP",
    excerpt: "Deep dive into the ABAP RESTful Application Programming model and how it modernizes SAP development.",
    date: "Dec 28, 2024",
    readTime: "12 min read"
  },
  {
    image: fioriImage,
    category: "CDS Views",
    title: "Advanced CDS Views for Data Modeling",
    excerpt: "Master Core Data Services views to create powerful, reusable data models in your SAP landscape.",
    date: "Dec 20, 2024",
    readTime: "9 min read"
  },
  {
    image: aiImage,
    category: "Deep Learning",
    title: "AI Integration in SAP: Practical Applications",
    excerpt: "Real-world examples of integrating machine learning and AI capabilities into SAP business processes.",
    date: "Dec 15, 2024",
    readTime: "11 min read"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-blog-title">
            SAP Thought Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights on SAP S/4HANA, Fiori, BTP, AI, and enterprise innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" data-testid="button-view-all-articles">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
