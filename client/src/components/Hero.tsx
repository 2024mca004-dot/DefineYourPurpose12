import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/image_1762091195476.png";

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs font-semibold tracking-wide uppercase" data-testid="badge-role">
                SAP S/4 HANA Mentor · Founder · Motivational Speaker
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight" data-testid="text-name">
                Prashun Shetty
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                Transforming Skills, Technology & Education
              </p>
              <p className="text-base text-muted-foreground max-w-2xl">
                Leading innovation in EdTech, SAP consulting, and enterprise solutions since 2012. 
                Empowering businesses and individuals through technology transformation and skill development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#companies">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6" data-testid="button-explore-companies">
                  Explore Companies
                </Button>
              </a>
              <a href="#blog">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6" data-testid="button-read-insights">
                  Read SAP Insights
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="w-5 h-5" />
                  <span className="text-2xl font-bold" data-testid="text-years">12+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years in SAP</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold" data-testid="text-companies">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Companies Founded</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-2xl font-bold" data-testid="text-impact">1000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Professionals Trained</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="relative flex justify-center">
              <div className="aspect-square rounded-full overflow-hidden max-w-lg w-full shadow-2xl">
                <img
                  src={heroImage}
                  alt="Prashun Shetty"
                  className="w-full h-full object-cover"
                  data-testid="img-hero"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide">Founder</p>
              <div className="flex items-center justify-center gap-6">
                <img 
                  src="/attached_assets/image_1763310394785.png" 
                  alt="TagSkills EdTech" 
                  className="h-12 object-contain"
                  data-testid="img-founder-tagskills"
                />
                <img 
                  src="/attached_assets/image_1763310692087.png" 
                  alt="Invayas Technologies" 
                  className="h-12 object-contain"
                  data-testid="img-founder-invayas"
                />
                <img 
                  src="/attached_assets/image_1763310816169.png" 
                  alt="Frillory Design House" 
                  className="h-12 object-contain"
                  data-testid="img-founder-frillory"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
