import PricingCard from "./PricingCard";
import { subscriptionPlans } from "@/data/subscriptionPlans";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-pricing-title">
            List Your Company
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
            Choose the perfect plan to showcase your business and generate quality leads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              id={String(plan.id)}
              name={plan.name}
              price={`₹${plan.price.toLocaleString()}`}
              description={plan.description}
              features={plan.features}
              popular={plan.isPopular}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
