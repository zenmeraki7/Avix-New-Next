import Marquee from "react-fast-marquee";
import styles from "../../../src/styles/home/PartnersSection.module.css";
import Image from "next/image";

const InsurancePartnersSection = () => {
  const insurancePartners = [
    { src: "/assets/aditya.webp", alt: "Aditya Birla Insurance" },
    { src: "/assets/aig.webp", alt: "AIG" },
    { src: "/assets/icici.webp", alt: "ICICI Lombard" },
    { src: "/assets/lombard.webp", alt: "Lombard" },
    { src: "/assets/niva.webp", alt: "Niva Bupa" },
    { src: "/assets/care.webp", alt: "Care Health Insurance" },
    { src: "/assets/cigna.webp", alt: "Cigna TTK" },
    { src: "/assets/ergo.webp", alt: "Ergo Insurance" },
    { src: "/assets/star.webp", alt: "Star Health" },
  ];

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...insurancePartners, ...insurancePartners];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        <div className={styles.partnersHeader}>
          <h2 className={styles.partnersTitle}>Our Insurance Partners</h2>
          <p className={styles.partnersSubtitle}>
            We collaborate with leading insurance companies to provide you the
            best coverage options
          </p>
        </div>

        <Marquee
          gradient={false}
          speed={45}
          pauseOnHover={true}
          className={styles.partnersMarquee}
        >
          <div className={styles.partnersGrid}>
            {duplicatedPartners.map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className={styles.partnerLogo}
                  width={96} 
                  height={48}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default InsurancePartnersSection;
