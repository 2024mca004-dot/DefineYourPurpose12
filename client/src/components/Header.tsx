import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md">
            <div className="font-bold text-xl text-foreground">
              <span className="text-primary">Prashun</span> Shetty
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-about">
              About
            </a>
            <a href="#companies" className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-companies">
              Companies
            </a>
            <a href="#listings" className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-listings">
              Business Listings
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-blog">
              SAP Insights
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact">
              <Button variant="outline" className="font-medium" data-testid="button-partner">
                Partner With Us
              </Button>
            </a>
            <a href="#pricing">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" data-testid="button-list-company">
                List Your Company
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-6 py-4 space-y-4">
            <a href="#about" className="block text-sm font-medium py-2" data-testid="link-mobile-about">
              About
            </a>
            <a href="#companies" className="block text-sm font-medium py-2" data-testid="link-mobile-companies">
              Companies
            </a>
            <a href="#listings" className="block text-sm font-medium py-2" data-testid="link-mobile-listings">
              Business Listings
            </a>
            <a href="#blog" className="block text-sm font-medium py-2" data-testid="link-mobile-blog">
              SAP Insights
            </a>
            <div className="pt-4 space-y-3">
              <a href="#contact" className="block">
                <Button variant="outline" className="w-full font-medium" data-testid="button-mobile-partner">
                  Partner With Us
                </Button>
              </a>
              <a href="#pricing" className="block">
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" data-testid="button-mobile-list">
                  List Your Company
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
