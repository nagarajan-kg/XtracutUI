
"use client"; 

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/JoinSection.module.css";

import { Marcellus, Inter } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["300"], 
  subsets: ["latin"],
  display: "swap",
});

const JoinSection = () => {
  return (
    <section className={styles.joinSection}>
      <div className={styles.joinContainer}>
      
        <div className={styles.imageWrapper}>
          <div className={styles.blueDecoration}></div>
          <Image
            src="/candid_pic.png" 
            alt="Students joining college"
            width={447}
            height={465}
            className={styles.mainImage}
            priority={false}
          />
        </div>

 
        <div className={styles.contentWrapper}>
          
          <h2 className={`${styles.title} ${marcellus.className}`}>
            Why Join Our College
          </h2>

          <p className={`${styles.description} ${inter.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore.
            <br />
            <br />
            ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut laboreLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore
          </p>

          <Link href="/apply-now" className={styles.readMoreBtn}>
            Start Your Career
            
            <span className={styles.btnIconWrapper}>
                &#8599; 
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;