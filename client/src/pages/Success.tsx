import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Success() {
  const [, navigate] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4" data-testid="text-success-title">
          Payment Successful!
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for subscribing! Your business listing will be activated within 24 hours.
          You'll receive a confirmation email shortly with all the details.
        </p>

        <div className="space-y-4">
          <Button
            onClick={() => navigate("/")}
            size="lg"
            className="w-full sm:w-auto"
            data-testid="button-back-home"
          >
            Back to Home
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Redirecting to home page in 10 seconds...
          </p>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h2 className="font-semibold mb-3">What's Next?</h2>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Check your email for subscription confirmation</li>
            <li>• Our team will review and activate your listing</li>
            <li>• You'll receive login credentials to manage your listing</li>
            <li>• Contact us at support@prashunshetty.com for any questions</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
