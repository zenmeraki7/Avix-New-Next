import { Suspense, lazy } from "react";
import Header from "../app/components/layout/Header";
import Footer from "../app/components/layout/Footer";
import HeroSection from "../app/components/Home/HeroSection"; 

const StatsSection = lazy(() => import("../app/components/Home/StatsSection"));
const ServicesSection = lazy(() => import("../app/components/Home/ServicesSection"));
const WhyChooseUsSection = lazy(() => import("../app/components/Home/WhyChooseUsSection"));
const TrustedPartnersSection = lazy(() => import("../app/components/Home/TrustedPartnersSection"));
const InsurancePartnersSection = lazy(() => import("../app/components/Home/InsurancePartnersSection"));
const TestimonialsSection = lazy(() => import("../app/components/Home/TestimonialsSection"));
const CTASection = lazy(() => import("../app/components/Home/CTASection"));

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Suspense fallback={<div>Loading…</div>}>
        <StatsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TrustedPartnersSection />
        <InsurancePartnersSection />
        <TestimonialsSection />
        <CTASection />
      </Suspense>
      <Footer />
    </>
  );
}
