import HeroSection from "../components/Services/HeroSection";
import ServiceCategories from "../components/Services/ServiceCategories";
import WhyChooseAVIXSection from "../components/Services/WhyChooseAVIXSection";
import EMICalculatorSection from "../components/Services/EMICalculatorSection";
import FinalCTASection from "../components/Services/FinalCTASection";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServiceCategories />
        <WhyChooseAVIXSection />
        <EMICalculatorSection />
        <FinalCTASection />
    </div>
  );
};

export default Services;
