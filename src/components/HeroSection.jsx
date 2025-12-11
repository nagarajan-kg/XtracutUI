"use client";

import Image from "next/image";
import styles from "../styles/HeroSection.module.css";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      
      <Image
        src="/banner.png" 
        alt="Campus Careers"
        fill
        className={styles.bgImage}
        priority
      />

      <div className={styles.overlay}>
        <h1 className={`${styles.title} ${marcellus.className}`}>Careers</h1>

        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbText}>HOME</span>
          <span className={styles.dot}></span>
          <span className={styles.breadcrumbText}>CAREERS</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;