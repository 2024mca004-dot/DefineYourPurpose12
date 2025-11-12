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
        <section id="about">
          <Hero />
        </section>
        <section id="companies">
          <CompaniesSection />
        </section>
        <section id="listings">
          <BusinessListingsSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
