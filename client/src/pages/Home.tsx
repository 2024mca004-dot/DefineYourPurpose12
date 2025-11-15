import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompaniesSection from "@/components/CompaniesSection";
import BusinessListingsSection from "@/components/BusinessListingsSection";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CompaniesSection />
        <BusinessListingsSection />
        <PricingSection />
        <BlogSection />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
