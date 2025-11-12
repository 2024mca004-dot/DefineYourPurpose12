import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/image_1762091195476.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs font-semibold tracking-wide uppercase" data-testid="badge-role">
                SAP S/4 HANA Mentor · Founder · Motivational Speaker
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground" data-testid="text-name">
                Prashun Shetty
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Transforming Skills, Technology & Education
              </p>
              <p className="text-base text-muted-foreground max-w-2xl">
                Leading innovation in EdTech, SAP consulting, and enterprise solutions since 2012. 
                Empowering businesses and individuals through technology transformation and skill development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline" data-testid="button-explore-companies">
                Explore Companies
              </Button>
              <Button size="lg" variant="outline" data-testid="button-read-insights">
                Read SAP Insights
              </Button>
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

          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Prashun Shetty"
                  className="w-full h-full object-cover"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
