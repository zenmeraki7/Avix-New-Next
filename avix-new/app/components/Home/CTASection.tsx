//apps/components/Home/CTASection
import Link from 'next/link';
import { Button } from "../ui/button";
import { Calculator } from "lucide-react";
import styles from "../../../src/styles/home/CTASection.module.css";
import "../../../src/styles/avix.css";




const CTASection = () => {
  return (
    <section className={`${styles.ctaSection} avix-gradient-primary`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to Achieve Your Financial Goals?
        </h2>
        <p className={styles.ctaSubtitle}>
          Get started today with a consultation and personalized financial
          planning
        </p>
        <div className={styles.ctaButtons}>
          <Button className="avix-button-secondary hover:avix-button-secondary" size="lg" asChild>
            <Link href="/contact">Get Consultation</Link>
          </Button>
          <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30" size="lg" asChild>
            <Link href="/calculator">
              <Calculator className="w-5 h-5 mr-2" />
              Calculate EMI
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;