
import HeroSection from "../components/Insurance/HeroSection";
import StatsSection from "../components/Insurance/StatsSection";
import FeatureSection from "../components/Insurance/FeatureSection";
import ServiceSection from "../components/Insurance/ServiceSection";
import WhyChooseSection from "../components/Insurance/WhyChooseSection";
import CTASection from "../components/Insurance/CTASection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Insurance Plans – AVIX Financial Solutions',
  description:
    'Protect your future with our comprehensive insurance plans. From health to life coverage, AVIX ensures your peace of mind at competitive rates.',
  alternates: { canonical: '/Insurance' },
};


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