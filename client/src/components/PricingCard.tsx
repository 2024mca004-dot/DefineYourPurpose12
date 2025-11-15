import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ id, name, price, description, features, popular = false }: PricingCardProps) {
  const [, navigate] = useLocation();

  const handleGetStarted = () => {
    navigate(`/checkout?planId=${id}`);
  };

  return (
    <Card
      className={`p-8 space-y-6 relative border rounded-lg ${popular ? 'border-l-4 border-accent shadow-lg' : 'border-gray-200 shadow-sm'} hover:shadow-md transition-all duration-200`}
      data-testid={`card-pricing-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-semibold">
          Most Popular
        </Badge>
      )}

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-foreground" data-testid={`text-plan-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground" data-testid={`text-price-${name.toLowerCase().replace(/\s+/g, '-')}`}>
            {price}
          </span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </div>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-foreground flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={popular ? "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" : "w-full font-medium"}
        variant={popular ? "default" : "outline"}
        onClick={handleGetStarted}
        data-testid={`button-get-started-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        Get Started
      </Button>
    </Card>
  );
}
