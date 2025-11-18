import CompanyCard from "./CompanyCard";
import { companies } from "@/data/companies";

export default function CompaniesSection() {
  return (
    <section id="companies" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight" data-testid="text-companies-title">
            Our Companies
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-normal">
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
