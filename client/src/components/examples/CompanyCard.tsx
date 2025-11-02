import CompanyCard from '../CompanyCard';
import tagSkillsLogo from '@assets/generated_images/TagSkills_EdTech_logo_21a5e2e4.png';

export default function CompanyCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CompanyCard
        logo={tagSkillsLogo}
        name="TagSkills EdTech"
        tagline="Transforming Education Through Technology"
        description="Leading EdTech platform providing comprehensive SAP training, professional development courses, and skill enhancement programs for aspiring technology professionals."
      />
    </div>
  );
}
