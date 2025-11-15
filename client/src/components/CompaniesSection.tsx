import CompanyCard from "./CompanyCard";
import { companies } from "@/data/companies";

export default function CompaniesSection() {
  return (
    <section id="companies" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground" data-testid="text-companies-title">
            Our Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building the future through education, technology, and design excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <CompanyCard 
              key={company.id} 
              {...company}
              website={company.website || undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
