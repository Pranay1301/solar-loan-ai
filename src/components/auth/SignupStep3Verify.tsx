import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import OtpInput from "./OtpInput";
import { Mail } from "lucide-react";

interface Props {
  data: { email?: string };
  onNext: (data?: any) => void;
  onBack: () => void;
}

const SignupStep3Verify = ({ data, onNext, onBack }: Props) => {
  const { toast } = useToast();
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useState(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  });

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    // Mock verification
    setTimeout(() => {
      toast({
        title: "Account Verified!",
        description: "Welcome to ChainFly",
      });
      onNext();
      setIsVerifying(false);
    }, 1000);
  };

  const handleResend = () => {
    setCanResend(false);
    setCountdown(30);
    toast({
      title: "OTP Resent",
      description: "Check your email for the new code",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">Verify Your Email</h3>
        <p className="text-sm text-muted-foreground">
          We sent a 6-digit code to <span className="font-medium">{data.email}</span>
        </p>
      </div>

      <div className="space-y-4">
        <OtpInput value={otp} onChange={setOtp} length={6} />

        <Button
          onClick={handleVerify}
          className="w-full"
          disabled={isVerifying || otp.length !== 6}
        >
          {isVerifying ? "Verifying..." : "Verify Email"}
        </Button>

        <div className="text-center">
          <Button
            type="button"
            variant="ghost"
            onClick={handleResend}
            disabled={!canResend}
            className="text-sm"
          >
            {canResend ? "Resend OTP" : `Resend in ${countdown}s`}
          </Button>
        </div>
      </div>

      <Button type="button" variant="outline" onClick={onBack} className="w-full">
        Back
      </Button>
    </div>
  );
};

export default SignupStep3Verify;
