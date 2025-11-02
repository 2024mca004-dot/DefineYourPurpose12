import { useQuery } from "@tanstack/react-query";
import CompanyCard from "./CompanyCard";
import type { Company } from "@shared/schema";

export default function CompaniesSection() {
  const { data: companies, isLoading } = useQuery<Company[]>({
    queryKey: ["/api/companies"],
  });

  return (
    <section id="companies" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="text-companies-title">
            Our Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building the future through education, technology, and design excellence
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-card rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies?.map((company) => (
              <CompanyCard 
                key={company.id} 
                {...company}
                website={company.website || undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
