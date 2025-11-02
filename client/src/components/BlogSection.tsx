import { useQuery } from "@tanstack/react-query";
import BlogPostCard from "./BlogPostCard";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@shared/schema";

export default function BlogSection() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

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

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-card rounded-xl animate-pulse" />
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" data-testid="button-view-all-articles">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
