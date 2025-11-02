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
    <Card className="p-8 space-y-6 hover-elevate transition-all" data-testid={`card-company-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="h-16 w-16 flex-shrink-0">
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" data-testid={`img-logo-${name.toLowerCase().replace(/\s+/g, '-')}`} />
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-semibold text-foreground" data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {name}
          </h3>
          <p className="text-base text-muted-foreground font-medium">{tagline}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 pt-4">
        <Button
          variant="default"
          onClick={() => console.log(`Visit ${name} website`)}
          data-testid={`button-visit-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Visit Website
        </Button>
        <Button
          variant="outline"
          onClick={() => console.log(`Collaborate with ${name}`)}
          data-testid={`button-collaborate-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <Handshake className="w-4 h-4 mr-2" />
          Collaborate
        </Button>
      </div>
    </Card>
  );
}
