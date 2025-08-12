import HeroSection from "../components/Services/HeroSection";
import ServiceCategories from "../components/Services/ServiceCategories";
import WhyChooseAVIXSection from "../components/Services/WhyChooseAVIXSection";
import EMICalculatorSection from "../components/Services/EMICalculatorSection";
import FinalCTASection from "../components/Services/FinalCTASection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Our Financial Services – AVIX Financial Solutions',
  description:
    'From loans to investments, explore our full range of financial solutions designed to help individuals and businesses achieve success.',
  alternates: { canonical: '/services' },
};

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
