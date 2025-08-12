
import HeroSection from "../components/Investment/HeroSection";
import ServiceSection from "../components/Investment/ServiceSection";
import WhyInvestSection from "../components/Investment/WhyInvestSection";
import CTASection from "../components/Investment/CTASection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Investment Solutions – AVIX Financial Services',
  description:
    'Grow your wealth with expert investment strategies. Mutual funds, SIPs, and advisory services tailored to your financial goals.',
  alternates: { canonical: '/investment' },
};


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