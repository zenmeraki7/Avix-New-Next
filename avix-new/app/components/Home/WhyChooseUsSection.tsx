import Link from "next/link";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import styles from "../../../src/styles/home/WhyChooseUsSection.module.css";
import "../../../src/styles/avix.css";
import Image from "next/image";

const WhyChooseUsSection = () => {
  const features = [
    "Expert financial advisors with 15+ years experience",
    "Quick loan approvals in 24-48 hours",
    "Competitive interest rates and flexible terms",
    "Paperless processes and digital convenience",
    "Comprehensive insurance and investment options",
  ];

  return (
    <section className={`${styles.whyChooseUsSection} avix-gradient-primary`}>
      <div className={styles.whyChooseUsContainer}>
        <div className={styles.whyChooseUsGrid}>
          <div className={styles.whyChooseUsContent}>
            <h3 className={styles.whyChooseUsTitle}>Why Choose AVIX ?</h3>
            <div className={styles.whyChooseUsFeatures}>
              {features.map((feature, index) => (
                <div key={index} className={styles.whyChooseUsFeature}>
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className={styles.whyChooseUsButton}>
              <Button
                className="avix-button-secondary hover:avix-button-secondary"
                size="lg"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
          <div className={styles.whyChooseUsImage}>
            <Image
              src={"/assets/family.png"}
              alt="Financial Services Overview"
              className="avix-shadow-hero"
              width={576}
              height={384}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;