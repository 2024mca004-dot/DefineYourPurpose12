import BlogPostCard from '../BlogPostCard';
import sapImage from '@assets/generated_images/SAP_ERP_technology_visualization_5ead2768.png';

export default function BlogPostCardExample() {
  return (
    <div className="p-8 max-w-md">
      <BlogPostCard
        image={sapImage}
        category="SAP S/4HANA"
        title="Mastering SAP S/4HANA Migration: A Complete Guide"
        excerpt="Learn the essential strategies and best practices for a successful SAP S/4HANA migration in your enterprise."
        date="Jan 15, 2025"
        readTime="8 min read"
      />
    </div>
  );
}
