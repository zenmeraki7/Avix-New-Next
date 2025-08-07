import Link from "next/link";
import { Button } from "../../components/ui/button";
import styles from "../../../src/styles/loans/CTASection.module.css";
import "../../../src/styles/avix.css";

const CTASection = () => {
  return (
    <div className={`${styles.ctaSection} avix-gradient-primary`}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
        <p className={styles.ctaSubtitle}>
          Take the first step towards your financial goals. Our experts are here
          to help you choose the right loan.
        </p>
        <div className={styles.ctaButtons}>
          <Button
            asChild
            className={styles.ctaPrimaryButton}
            style={{ backgroundColor: "#1A004D", color: "white" }}
          >
            <Link href="/calculator">Calculate EMI</Link>
          </Button>
        <Button
  asChild
  className="bg-white text-black border border-gray-300 hover:bg-[#1A004D] hover:text-white outline-none ring-0 focus:outline-none focus:ring-0"
>
  <Link href="/contact">Talk to Expert</Link>
</Button>


        </div>
      </div>
    </div>
  );
};

export default CTASection;
