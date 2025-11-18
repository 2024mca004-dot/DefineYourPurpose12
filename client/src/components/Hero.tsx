import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/image_1762091195476.png";

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="about" className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5" data-testid="badge-role">
                SAP S/4 HANA Mentor · Founder · Motivational Speaker
              </Badge>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight" data-testid="text-name">
                Prashun Shetty
              </h1>
              <p className="text-2xl lg:text-3xl text-foreground/80 font-light leading-relaxed">
                Building Tomorrow's Leaders Through Technology & Education
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Trusted by businesses worldwide. Empowering professionals with innovative SAP solutions and transformative EdTech experiences since 2012.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#companies">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6 py-5 text-base rounded-xl transition-all" 
                  data-testid="button-explore-companies"
                >
                  Explore Companies
                </Button>
              </a>
              <a href="#blog">
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-muted font-bold px-6 py-5 text-base rounded-xl border transition-all" 
                  data-testid="button-read-insights"
                >
                  Read SAP Insights
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-primary" data-testid="text-years">13+</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-primary" data-testid="text-companies">3</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Companies Founded</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-primary" data-testid="text-impact">1000+</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Professionals Trained</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative flex justify-center">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="aspect-square rounded-full overflow-hidden max-w-lg w-full shadow-2xl ring-4 ring-background cursor-pointer hover:ring-primary/20 transition-all hover-elevate active-elevate-2"
                data-testid="button-hero-photo"
              >
                <img
                  src={heroImage}
                  alt="Prashun Shetty"
                  className="w-full h-full object-cover"
                  data-testid="img-hero"
                />
              </button>
            </div>
            
            <div className="space-y-3">
              <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest">Founder of</p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <img 
                  src="/attached_assets/image_1763310394785.png" 
                  alt="TagSkills EdTech" 
                  className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  data-testid="img-founder-tagskills"
                />
                <img 
                  src="/attached_assets/image_1763310692087.png" 
                  alt="Invayas Technologies" 
                  className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  data-testid="img-founder-invayas"
                />
                <img 
                  src="/attached_assets/image_1763310816169.png" 
                  alt="Frillory Design House" 
                  className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  data-testid="img-founder-frillory"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center space-y-6 py-4">
            <div className="aspect-square rounded-full overflow-hidden w-48 h-48 shadow-2xl ring-4 ring-background">
              <img
                src={heroImage}
                alt="Prashun Shetty"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4 w-full">
              <h2 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Founder of
              </h2>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <img 
                  src="/attached_assets/image_1763310394785.png" 
                  alt="TagSkills EdTech" 
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/attached_assets/image_1763310692087.png" 
                  alt="Invayas Technologies" 
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src="/attached_assets/image_1763310816169.png" 
                  alt="Frillory Design House" 
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
