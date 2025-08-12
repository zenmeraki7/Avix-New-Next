// app/about/page.tsx
import type { Metadata } from 'next';
import HeroSection from "../components/Home/HeroSection";
import FoundationSection from "../components/About/FoundationSection";
import ValuesSection from "../components/About/ValuesSection";
import JourneySection from "../components/About/JourneySection";
import WhyChooseUsSection from "../components/Home/WhyChooseUsSection";
import CTASection from "../components/Home/CTASection";

// Page-specific SEO
export const metadata: Metadata = {
  title: 'About AVIX Financial Services',
  description:
    'Discover AVIX Financial Services — our mission, values, and dedication to delivering trusted financial solutions including loans, insurance, and investment advisory across India.',
  alternates: {
    canonical: '/about',
  },
  
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FoundationSection />
      <ValuesSection />
      <JourneySection />
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}
