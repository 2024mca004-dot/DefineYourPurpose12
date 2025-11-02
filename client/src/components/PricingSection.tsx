import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Basic",
    price: "₹2,000",
    description: "Essential features for startups",
    features: [
      "Company profile page",
      "Logo display",
      "Basic contact form",
      "Category listing",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "₹5,000",
    description: "Perfect for growing EdTech companies",
    features: [
      "Everything in Basic",
      "Featured banner display",
      "Priority placement",
      "Monthly analytics report",
      "Lead generation tools",
      "Priority email support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "₹10,000",
    description: "Advanced features for established brands",
    features: [
      "Everything in Professional",
      "Sponsored article placement",
      "Premium featured listing",
      "Custom integration options",
      "Dedicated account manager",
      "24/7 priority support"
    ]
  }
];

export default function PricingSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
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
