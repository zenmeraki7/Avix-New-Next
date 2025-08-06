import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Users, Target } from "lucide-react";
import styles from "../../../src/styles/msme/CTASection.module.css";
import "../../../src/styles/avix.css";

const CTASection = () => {
  return (
    <div className={`${styles.ctaSection} avix-gradient-primary`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Ready to Grow Your Business?</h2>
        <p className={styles.ctaSubtitle}>
          Get expert guidance and competitive rates for all your MSME financing
          needs.
        </p>
        <div className={styles.ctaButtons}>
          <Button
            asChild
            className="bg-[#1A004D] text-white hover:bg-[#1A004D]"
          >
            <Link href="/contact">
              <Users className="w-5 h-5 mr-2 text-white" />
              Talk to Expert
            </Link>
          </Button>

          <Button
            asChild
            className="bg-white text-black border border-gray-300 hover:bg-[#1A004D] hover:text-white focus:outline-none focus:ring-0"
          >
            <Link href="/calculator">
              <Target className="w-5 h-5 mr-2 text-yellow-300" />
              Calculate EMI
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
