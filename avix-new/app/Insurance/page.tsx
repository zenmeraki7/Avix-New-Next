
import HeroSection from "../components/Insurance/HeroSection";
import StatsSection from "../components/Insurance/StatsSection";
import FeatureSection from "../components/Insurance/FeatureSection";
import ServiceSection from "../components/Insurance/ServiceSection";
import WhyChooseSection from "../components/Insurance/WhyChooseSection";
import CTASection from "../components/Insurance/CTASection";

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