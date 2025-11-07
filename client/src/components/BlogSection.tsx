import BlogPostCard from "./BlogPostCard";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

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
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
              readTime={post.readTime}
            />
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
