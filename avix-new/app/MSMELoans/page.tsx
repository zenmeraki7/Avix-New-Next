
import HeroSection from "../components/Msme/HeroSection";
import ServiceGrid from "../components/Msme/ServiceGrid";
import CTASection from "../components/Msme/CTASection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'MSME Loans – AVIX Financial Solutions',
  description:
    'Empowering small businesses with fast MSME loans. Get funding for expansion, working capital, or equipment with hassle-free approvals.',
  alternates: { canonical: '/MSMELoans' },
};

const MSMELoans = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ServiceGrid />
      <CTASection />
    </div>
  );
};

export default MSMELoans;