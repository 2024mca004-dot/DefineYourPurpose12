import PricingCard from '../PricingCard';

export default function PricingCardExample() {
  return (
    <div className="p-8 max-w-md">
      <PricingCard
        name="Professional"
        price="₹5,000"
        description="Perfect for growing EdTech companies"
        features={[
          "Company profile page",
          "Logo and banner display",
          "Contact form integration",
          "Category listing",
          "Monthly analytics report"
        ]}
        popular={true}
      />
    </div>
  );
}
