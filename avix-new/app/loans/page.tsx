
import HeroSection from "../components/Loans/HeroSection";
import ServiceGrid from "../components/Loans/ServiceGrid";
import CTASection from "../components/Loans/CTASection";

const Loans = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ServiceGrid />
      <CTASection />
    </div>
  );
};

export default Loans;