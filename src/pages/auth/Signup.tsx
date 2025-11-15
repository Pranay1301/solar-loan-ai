import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sun } from "lucide-react";
import SignupStep1Account from "@/components/auth/SignupStep1Account";
import SignupStep2Profile from "@/components/auth/SignupStep2Profile";
import SignupStep3Verify from "@/components/auth/SignupStep3Verify";

export interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phone: string;
  dob?: string;
  role: "customer" | "installer";
}

const Signup = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<SignupFormData>>({
    role: "customer",
  });

  const steps = [
    { number: 1, title: "Account", component: SignupStep1Account },
    { number: 2, title: "Profile", component: SignupStep2Profile },
    { number: 3, title: "Verify", component: SignupStep3Verify },
  ];

  const CurrentStepComponent = steps[currentStep - 1].component;
  const progress = (currentStep / steps.length) * 100;

  const handleNext = (stepData?: Partial<SignupFormData>) => {
    if (stepData) {
      setFormData({ ...formData, ...stepData });
    }
    
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete signup
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-lg p-8 shadow-strong">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
            <Sun className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Join ChainFly</h1>
          <p className="text-muted-foreground mt-2">Create your solar loan account</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {steps.map((step) => (
              <div key={step.number} className="text-xs font-medium">
                Step {step.number}: {step.title}
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <CurrentStepComponent
          data={formData}
          onNext={handleNext}
          onBack={handleBack}
        />
      </Card>
    </div>
  );
};

export default Signup;
