
import HeroSection from "../components/Loans/HeroSection";
import ServiceGrid from "../components/Loans/ServiceGrid";
import CTASection from "../components/Loans/CTASection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Loan Services – AVIX Financial Services',
  description:
    'Get quick approvals on personal, home, and business loans. AVIX offers flexible EMIs, low interest rates, and minimal documentation.',
  alternates: { canonical: '/loans' },
};


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