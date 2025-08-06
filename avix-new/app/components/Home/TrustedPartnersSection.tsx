//apps/components/Home/TrustedPartnersSection

"use client";


import Marquee from "react-fast-marquee";
import styles from "../../../src/styles/home/PartnersSection.module.css";
import Image from "next/image";
const TrustedPartnersSection = () => {
  const partners = [
    { src: "/assets/poonwalla.jpeg", alt: "Poonawalla" },
    { src: "/assets/smfg.jpeg", alt: "SMFG" },
    { src: "/assets/southIndian.jpeg", alt: "South Indian Bank" },
    { src: "/assets/shriram.jpeg", alt: "Shriram" },
    { src: "/assets/TATA.jpeg", alt: "TATA" },
    { src: "/assets/Birla.jpeg", alt: "Birla" },
    { src: "/assets/Axis.jpeg", alt: "Axis" },
    { src: "/assets/AxisFinance.jpeg", alt: "Axis Finance" },
    { src: "/assets/bajaj.jpeg", alt: "Bajaj" },
    { src: "/assets/chola.jpeg", alt: "Chola" },
    { src: "/assets/finnable.jpeg", alt: "Finnable" },
    { src: "/assets/HDFC.jpeg", alt: "HDFC" },
    { src: "/assets/IDBI.jpeg", alt: "IDBI" },
    { src: "/assets/IDFC.jpeg", alt: "IDFC" },
    { src: "/assets/inCred.jpeg", alt: "InCred" },
    { src: "/assets/IndusInd.jpeg", alt: "IndusInd" },
    { src: "/assets/kotak.jpeg", alt: "Kotak" },
    { src: "/assets/LTFinance.jpeg", alt: "L&T Finance" },
    { src: "/assets/muthoot.jpeg", alt: "Muthoot" },
    { src: "/assets/piramal.jpeg", alt: "Piramal" },
    { src: "/assets/yesBank.jpeg", alt: "Yes Bank" },
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
