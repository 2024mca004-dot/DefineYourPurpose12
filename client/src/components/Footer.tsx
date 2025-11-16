import { Link } from "wouter";
import { Linkedin, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="font-bold text-xl text-foreground">
              <span className="text-primary">Prashun</span> Shetty
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming Skills, Technology & Education through innovation and leadership.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/prashun-shetty-41903a39/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@prashunshetty5369"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prashunsshetty@gmail.com&su=Contact%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-muted hover-elevate active-elevate-2 flex items-center justify-center"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Prashun
                </Link>
              </li>
              <li>
                <Link href="#companies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Companies
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  SAP Thought Hub
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#listings" className="text-muted-foreground hover:text-foreground transition-colors">
                  Business Listings
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Partnership Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Career Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Companies</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  TagSkills EdTech
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Invayas Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Frillory Design House
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Prashun Shetty. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
