
import HeroSection from "../components/Investment/HeroSection";
import ServiceSection from "../components/Investment/ServiceSection";
import WhyInvestSection from "../components/Investment/WhyInvestSection";
import CTASection from "../components/Investment/CTASection";

const Investment = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceSection />
      <WhyInvestSection />
      <CTASection />
    </div>
  );
};

export default Investment;