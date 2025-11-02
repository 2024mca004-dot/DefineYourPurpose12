import CompanyCard from "./CompanyCard";
import tagSkillsLogo from "@assets/generated_images/TagSkills_EdTech_logo_21a5e2e4.png";
import invayasLogo from "@assets/generated_images/Invayas_Technologies_logo_7b61a3fd.png";
import frilloryLogo from "@assets/generated_images/Frillory_Design_House_logo_bf8228b5.png";

const companies = [
  {
    logo: tagSkillsLogo,
    name: "TagSkills EdTech",
    tagline: "Transforming Education Through Technology",
    description: "Leading EdTech platform providing comprehensive SAP training, professional development courses, and skill enhancement programs for aspiring technology professionals.",
    website: "#"
  },
  {
    logo: invayasLogo,
    name: "Invayas Technologies",
    tagline: "Enterprise Solutions & Innovation",
    description: "Delivering cutting-edge SAP S/4HANA implementations, enterprise resource planning solutions, and digital transformation consulting services to businesses worldwide.",
    website: "#"
  },
  {
    logo: frilloryLogo,
    name: "Frillory Design House",
    tagline: "Creative Excellence in Digital Design",
    description: "Premium design studio specializing in brand identity, UI/UX design, and creative solutions for modern businesses seeking distinctive visual presence.",
    website: "#"
  }
];

export default function CompaniesSection() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company) => (
            <CompanyCard key={company.name} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
}
