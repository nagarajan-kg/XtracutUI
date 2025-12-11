
"use client";

import Image from "next/image";
import styles from "../styles/FeatureSection.module.css";

import { Marcellus, Inter } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500"], 
  subsets: ["latin"],
  display: "swap",
});

const ICON_PATHS = {
  lab: "/icons/Group2.svg",
  hand: "/icons/Group1.svg",
  mentor: "/icons/Group3.svg",
  industry: "/icons/Group4.svg",
};


const SvgIcon = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={24} 
      height={24}
      className={styles.svgIconStyle}
    />
  );
};


const FeatureCard = ({ IconComponent, title, description }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{IconComponent}</span>
        <h3 className={`${styles.cardTitle} ${inter.className}`}>{title}</h3>
      </div>
      <p className={`${styles.cardDescription} ${inter.className}`}>
        {description}
      </p>
    </div>
  );
};

const FeatureSection = () => {
  const commonDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore";

  return (
    <section className={styles.featureSection}>
      <div className={styles.featureContainer}>
        <div className={styles.whyChooseLabel}>
          <span className={styles.yellowDot}></span>
          <span className={`${styles.whyChooseText} ${inter.className}`}>
            Why Choose
          </span>
        </div>
        <h2 className={`${styles.sectionTitle} ${marcellus.className}`}>
          Shape The Future Of Healthcare Education
        </h2>

        <div className={styles.contentLayout}>
          <div className={styles.cardColumn}>
            <FeatureCard
              IconComponent={
                <SvgIcon src={ICON_PATHS.lab} alt="Advanced Lab Icon" />
              }
              title="Advanced Laboratories & Facilities"
              description={commonDescription}
            />
            <FeatureCard
              IconComponent={
                <SvgIcon src={ICON_PATHS.hand} alt="Clinical Training Icon" />
              }
              title="Hands-On Clinical Training"
              description={commonDescription}
            />
          </div>

          <div className={styles.centerSection}>
            <div className={styles.yellowBackgroundBox}></div>

            <div className={styles.imageWrapper}>
              <Image
                src="/asian_women.png" 
                alt="Female Medical Student"
                width={306}
                height={378}
                className={styles.mainImage}
              />
            </div>
          </div>
          <div className={styles.cardColumn}>
            <FeatureCard
              IconComponent={
                <SvgIcon src={ICON_PATHS.mentor} alt="Mentorship Icon" />
              }
              title="Personalized Academic Mentorship"
              description={commonDescription}
            />
            <FeatureCard
              IconComponent={
                <SvgIcon src={ICON_PATHS.industry} alt="Industry Icon" />
              }
              title="Industry Internships"
              description={commonDescription}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
