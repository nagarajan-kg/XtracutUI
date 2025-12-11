
"use client";

import Link from 'next/link';
import styles from '../styles/JobSection.module.css';

import { Marcellus, Inter } from 'next/font/google';

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  weight: ['300'], 
  subsets: ['latin'],
  display: 'swap',
});


const JobCard = ({ title, description, link }) => {
    return (
        <div className={styles.jobCard}>
         
            <h3 className={`${styles.cardTitle} ${marcellus.className}`}>
                {title}
            </h3>
            
           
            <p className={`${styles.cardDescription} ${inter.className}`}>
                {description}
            </p>
            
            <Link href={link} className={styles.applyBtn}>
                Apply Now
                <span className={styles.btnIconWrapper}>
                    &#8599; 
                </span>
            </Link>
        </div>
    );
};

const JobSection = () => {
  const commonDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem";

  return (
    <section className={styles.jobSection}>
        <h2 className={`${styles.sectionTitle} ${marcellus.className}`}>
            Shape The Future Of Healthcare Education
        </h2>

        <div className={styles.cardsContainer}>
            
    
            <JobCard 
                title="Teaching"
                description={commonDescription}
                link="/careers/teaching"
            />

        
            <JobCard 
                title="Non-Teaching"
                description={commonDescription}
                link="/careers/non-teaching"
            />
        </div>
    </section>
  );
};

export default JobSection;