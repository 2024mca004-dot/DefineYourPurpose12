import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Handshake } from "lucide-react";

interface CompanyCardProps {
  logo: string;
  name: string;
  tagline: string;
  description: string;
  website?: string;
}

export default function CompanyCard({ logo, name, tagline, description, website }: CompanyCardProps) {
  return (
    <Card className="p-6 space-y-6 border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-200" data-testid={`card-company-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start justify-center">
        <div className="h-16 w-full flex items-center justify-center">
          <img src={logo} alt={`${name} logo`} className="h-full object-contain" data-testid={`img-logo-${name.toLowerCase().replace(/\s+/g, '-')}`} />
        </div>
      </div>
      
      <div className="space-y-3 text-center">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">{tagline}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <Button
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
          onClick={() => window.open(website, '_blank')}
          data-testid={`button-visit-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Website
        </Button>
        <Button
          variant="outline"
          className="font-medium"
          onClick={() => window.location.href = `mailto:prashun@tagskills.com?subject=Collaboration Inquiry - ${name}`}
          data-testid={`button-collaborate-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <Handshake className="w-4 h-4 mr-2" />
          Collaborate
        </Button>
      </div>
    </Card>
  );
}
