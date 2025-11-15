import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Upload, AlertCircle } from "lucide-react";

const JourneyTracker = () => {
  const steps = [
    {
      title: "Application Submitted",
      status: "completed",
      date: "Nov 10, 2025",
      description: "Your loan application has been received",
      tip: "Keep your documents ready for next steps",
    },
    {
      title: "KYC Review",
      status: "completed",
      date: "Nov 11, 2025",
      description: "Identity verification completed",
      tip: "Documents verified successfully",
    },
    {
      title: "CIBIL Check",
      status: "processing",
      date: "In Progress",
      description: "Credit score assessment underway",
      tip: "This usually takes 1-2 business days",
      action: "View Status",
    },
    {
      title: "AI Eligibility Analysis",
      status: "pending",
      date: "Upcoming",
      description: "Advanced risk assessment pending",
      tip: "Automated assessment after credit check",
    },
    {
      title: "Offer Generation",
      status: "pending",
      date: "Upcoming",
      description: "Loan offers will be generated",
      tip: "You'll receive personalized rate options",
    },
    {
      title: "Subsidy Verification",
      status: "pending",
      date: "Upcoming",
      description: "Government subsidy eligibility check",
      tip: "Upload property documents when ready",
      action: "Upload Documents",
    },
    {
      title: "Loan Sanctioned",
      status: "pending",
      date: "Upcoming",
      description: "Final approval and sanction letter",
      tip: "Typically takes 3-5 days after offer acceptance",
    },
    {
      title: "Installation Scheduled",
      status: "pending",
      date: "Upcoming",
      description: "Solar panel installation date confirmed",
      tip: "Coordinate with our installation team",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Check className="h-5 w-5 text-success" />;
      case "processing":
        return <Clock className="h-5 w-5 text-primary animate-pulse" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="bg-success">Completed</Badge>;
      case "processing":
        return <Badge variant="default">In Progress</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Loan Journey Tracker</h1>
          <p className="text-muted-foreground">
            Track your solar loan application progress in real-time
          </p>
        </div>

        <Card className="p-6 mb-6 bg-primary/5">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Application ID: #CFL2025001234</h3>
              <p className="text-sm text-muted-foreground">
                Your application is currently at the <strong>CIBIL Check</strong> stage.
                Estimated completion: 1-2 business days.
              </p>
            </div>
          </div>
        </Card>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Icon */}
                <div
                  className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                    step.status === "completed"
                      ? "bg-success border-success"
                      : step.status === "processing"
                      ? "bg-primary border-primary"
                      : "bg-background border-border"
                  }`}
                >
                  {getStatusIcon(step.status)}
                </div>

                {/* Content */}
                <Card className="flex-1 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.date}</p>
                    </div>
                    {getStatusBadge(step.status)}
                  </div>

                  <p className="text-sm mb-2">{step.description}</p>

                  <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg text-sm">
                    <span className="text-lg">💡</span>
                    <span className="text-muted-foreground">{step.tip}</span>
                  </div>

                  {step.action && step.status === "processing" && (
                    <Button className="mt-4" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      {step.action}
                    </Button>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>

        <Card className="p-6 mt-8 text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our team is here to assist you throughout your loan journey
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline">Contact Support</Button>
            <Button>Chat with Us</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JourneyTracker;
