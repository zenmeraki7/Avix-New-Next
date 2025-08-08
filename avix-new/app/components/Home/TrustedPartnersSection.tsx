//apps/components/Home/TrustedPartnersSection

"use client";


import Marquee from "react-fast-marquee";
import styles from "../../../src/styles/home/PartnersSection.module.css";
import Image from "next/image";
const TrustedPartnersSection = () => {
  const partners = [
    { src: "/assets/poonwalla.webp", alt: "Poonawalla" },
    { src: "/assets/smfg.webp", alt: "SMFG" },
    { src: "/assets/southIndian.webp", alt: "South Indian Bank" },
    { src: "/assets/shriram.webp", alt: "Shriram" },
    { src: "/assets/TATA.webp", alt: "TATA" },
    { src: "/assets/Birla.webp", alt: "Birla" },
    { src: "/assets/Axis.webp", alt: "Axis" },
    { src: "/assets/AxisFinance.webp", alt: "Axis Finance" },
    { src: "/assets/bajaj.webp", alt: "Bajaj" },
    { src: "/assets/chola.webp", alt: "Chola" },
    { src: "/assets/finnable.webp", alt: "Finnable" },
    { src: "/assets/HDFC.webp", alt: "HDFC" },
    { src: "/assets/IDBI.webp", alt: "IDBI" },
    { src: "/assets/IDFC.webp", alt: "IDFC" },
    { src: "/assets/inCred.webp", alt: "InCred" },
    { src: "/assets/IndusInd.webp", alt: "IndusInd" },
    { src: "/assets/kotak.webp", alt: "Kotak" },
    { src: "/assets/LTFinance.webp", alt: "L&T Finance" },
    { src: "/assets/muthoot.webp", alt: "Muthoot" },
    { src: "/assets/piramal.webp", alt: "Piramal" },
    { src: "/assets/yesBank.webp", alt: "Yes Bank" },
  ];

  // Duplicate partners for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        <div className={styles.partnersHeader}>
          <h2 className={styles.partnersTitle}>Our Trusted Partners</h2>
          <p className={styles.partnersSubtitle}>
            We collaborate with leading financial institutions to provide you
            the best services
          </p>
        </div>

        <Marquee
          gradient={false}
          speed={50}
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

export default TrustedPartnersSection;
