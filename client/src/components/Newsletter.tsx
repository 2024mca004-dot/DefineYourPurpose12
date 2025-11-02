import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You'll receive our weekly SAP insights and updates.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      const message = error.message?.includes("already subscribed")
        ? "This email is already subscribed to our newsletter."
        : "Failed to subscribe. Please try again.";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(email);
  };

  return (
    <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Mail className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-newsletter-title">
              Stay Updated with SAP Innovations
            </h2>
            <p className="text-lg opacity-90">
              Get weekly insights on SAP S/4HANA, career growth tips, and industry trends delivered to your inbox
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={mutation.isPending}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                variant="secondary"
                className="flex-shrink-0"
                disabled={mutation.isPending}
                data-testid="button-subscribe"
              >
                {mutation.isPending ? "..." : "Subscribe"}
              </Button>
            </div>
            <p className="text-xs opacity-75 mt-3">
              Join 5,000+ professionals. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
