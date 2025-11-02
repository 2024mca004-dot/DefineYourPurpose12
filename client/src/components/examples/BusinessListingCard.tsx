import BusinessListingCard from '../BusinessListingCard';
import bannerImage from '@assets/generated_images/Business_collaboration_banner_075994b5.png';
import logoImage from '@assets/generated_images/TagSkills_EdTech_logo_21a5e2e4.png';

export default function BusinessListingCardExample() {
  return (
    <div className="p-8 max-w-md">
      <BusinessListingCard
        banner={bannerImage}
        logo={logoImage}
        name="TechVision Academy"
        category="EdTech"
        description="Advanced SAP training programs with hands-on experience and industry certification preparation."
        pricing="₹5,000/month"
        featured={true}
      />
    </div>
  );
}
