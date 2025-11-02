import { useQuery } from "@tanstack/react-query";
import PricingCard from "./PricingCard";
import type { SubscriptionPlan } from "@shared/schema";

export default function PricingSection() {
  const { data: plans, isLoading } = useQuery<SubscriptionPlan[]>({
    queryKey: ["/api/plans"],
  });

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-pricing-title">
            List Your Company
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan to showcase your business and generate quality leads
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-card rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans?.map((plan) => (
              <PricingCard
                key={plan.id}
                name={plan.name}
                price={`₹${plan.price.toLocaleString()}`}
                description={plan.description}
                features={plan.features}
                popular={plan.isPopular}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
