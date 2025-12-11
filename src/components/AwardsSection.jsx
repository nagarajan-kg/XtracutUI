
"use client";
import styles from "../styles/AwardsSection.module.css";
import { Marcellus, Inter } from "next/font/google";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400"], 
  subsets: ["latin"],
  display: "swap",
});

const awardsList = [
  "University Research Fellowship Award (2002) From University Of Madras, Chennai.",
  "Senior Research Fellowship Award (2003 & 2004) From Council Of Scientific And Industrial Research (CSIR), Government Of India, New Delhi, India.",
  "Post-Doctoral Fellowship (2005) From The Department Of Physiology & Biophysics, University Of Calgary, Calgary, AB. Canada Departmental.",
  "Best Post-Doctoral Trainee Award (2006) From The Department Of Physiology & Biophysics, University Of Calgary, Calgary, AB. Canada.",
  "Travel Award (2007) From Canadian Institute Of Health Research (CIHR) - Training Program In Genetics, Child Development And Health (TPGCDH), University Of Calgary, Calgary, AB. Canada.",
  "Post-Doctoral Fellowship Award (2007 & 2008) From CIHR - TPGCDH, University Of Calgary, Calgary, AB. Canada.",
  "Child Health Research Travel Grant (2008) From Institute Of Child And Maternal Health (ICMH) And Alberta Children’s Hospital (ACH), Calgary Health Region (CHR), Calgary, AB. Canada.",
  "Travel Award (2008) From CIHR - TPGCDH, Univ. Of Calgary, Calgary, AB. Canada & CIHR - Institute Of Human Development, Child And Youth Health (IHDCYH), Ottawa, QC. Canada.",
  "Bechtel Estate Best Post-Doctoral Fellow Award (2009) From ICMH, University Of Calgary, Calgary, AB. Canada.",
  "Dr. APJ Abdul Kalam Best Teacher Award (2023) From Chettinad Academy Of Research & Education, Kelambakkam, Chennai, Tamilnadu, India.",
  "Appreciation For Academic Excellence And Contribution In Academia (2023) At New Normal Education Leadership Summit In Chennai By Linkedin And Ardorcomm Group Of India, New Delhi, India.",
];

const AwardsSection = () => {
  return (
    <section className={styles.outerSection}>
     
      <div className={styles.yellowBackground}>
  
        <div className={styles.contentBox}>
          
          <div className={styles.tabNavigation}>
            
           
            <span className={`${styles.navArrow} ${styles.leftArrow}`}>&lt;</span>

            <button className={`${styles.tabItem} ${marcellus.className}`}>
              <span className={styles.tabText}>Publication Details</span>
            </button>

           
            <button
              className={`${styles.tabItem} ${styles.activeTab} ${marcellus.className}`}
            >
              Awards And Achievements
            </button>

            <button className={`${styles.tabItem} ${marcellus.className}`}>
              <span className={styles.tabText}>Workshops / Seminars</span>
            </button>
            
            <button className={`${styles.tabItem} ${marcellus.className}`}>
              <span className={styles.tabText}>Work Experience</span>
            
              <span className={styles.navArrow}>&gt;</span> 
            </button>
            
          </div>
          <h2 className={`${styles.contentTitle} ${marcellus.className}`}>
            HONORS / AWARDS
          </h2>

        
          <div className={styles.awardsListContainer}>
            <ol className={`${styles.awardsList} ${inter.className}`}>
              {awardsList.map((award, index) => (
                <li key={index} className={styles.awardItem}>
                  {award}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;