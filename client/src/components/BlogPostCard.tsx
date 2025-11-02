import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPostCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BlogPostCard({ image, category, title, excerpt, date, readTime }: BlogPostCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all"
      onClick={() => console.log(`Open blog post: ${title}`)}
      data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          data-testid={`img-blog-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground line-clamp-2" data-testid={`text-blog-title-${title.toLowerCase().replace(/\s+/g, '-').substring(0, 30)}`}>
          {title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            Read More
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Card>
  );
}
