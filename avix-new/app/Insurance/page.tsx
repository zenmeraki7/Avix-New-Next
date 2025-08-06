
import HeroSection from "../components/insurance/HeroSection";
import StatsSection from "../components/insurance/StatsSection";
import FeatureSection from "../components/insurance/FeatureSection";
import ServiceSection from "../components/insurance/ServiceSection";
import WhyChooseSection from "../components/insurance/WhyChooseSection";
import CTASection from "../components/insurance/CTASection";

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <ServiceSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  );
};

export default Insurance;