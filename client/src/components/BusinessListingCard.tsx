import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, ExternalLink } from "lucide-react";

interface BusinessListingCardProps {
  banner: string;
  logo: string;
  name: string;
  category: string;
  description: string;
  pricing: string;
  featured?: boolean;
  contactEmail?: string;
  website?: string;
}

export default function BusinessListingCard({
  banner,
  logo,
  name,
  category,
  description,
  pricing,
  featured = false,
  contactEmail,
  website
}: BusinessListingCardProps) {
  const handleContact = () => {
    if (contactEmail) {
      window.location.href = `mailto:${contactEmail}`;
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleViewProfile = () => {
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <Card className="overflow-hidden border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-200" data-testid={`card-listing-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative aspect-video">
        <img
          src={banner}
          alt={`${name} banner`}
          className="w-full h-full object-cover"
          data-testid={`img-banner-${name.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <div className="absolute bottom-4 left-4">
          <div className="w-16 h-16 bg-background rounded-lg p-2 shadow-lg">
            <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
          </div>
        </div>
        {featured && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold">
            Featured
          </Badge>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-semibold text-foreground" data-testid={`text-listing-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {name}
            </h3>
            <Badge className="text-xs bg-accent/10 text-accent-foreground border border-accent/20">
              {category}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="text-sm">
            <span className="text-muted-foreground">From </span>
            <span className="font-semibold text-foreground" data-testid={`text-pricing-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {pricing}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleContact}
              data-testid={`button-contact-${name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Mail className="w-4 h-4" />
            </Button>
            {website && (
              <Button
                size="sm"
                onClick={handleViewProfile}
                data-testid={`button-view-profile-${name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                View Profile
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
