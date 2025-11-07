import { useState, useMemo } from "react";
import BusinessListingCard from "./BusinessListingCard";
import { Button } from "@/components/ui/button";
import { businessListings } from "@/data/businessListings";

const categories = ["All", "EdTech", "SAP Partner", "Training", "Recruitment"];

export default function BusinessListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredListings = useMemo(() => {
    if (selectedCategory === "All") {
      return businessListings;
    }
    return businessListings.filter(listing => listing.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="listings" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-listings-title">
            EdTech & Business Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with leading EdTech companies, SAP partners, and training providers in our ecosystem
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredListings.map((listing) => (
              <BusinessListingCard
                key={listing.id}
                banner={listing.banner}
                logo={listing.logo}
                name={listing.name}
                category={listing.category}
                description={listing.description}
                pricing={`₹${listing.planId === 3 ? '10,000' : listing.planId === 2 ? '5,000' : '2,000'}/month`}
                featured={listing.isFeatured}
                contactEmail={listing.contactEmail}
                website={listing.website || undefined}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No listings found in this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" data-testid="button-view-all-listings">
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
