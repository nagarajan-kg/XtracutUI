"use client";

import React from "react";
import styles from "../styles/ApplyNowSection.module.css";

const ApplyNowSection = () => {
  const handleFullSectionClick = () => {
    console.log(
      "Full Yellow Section Clicked - Navigating to Application Page."
    );
  };
  const handleApplyNowClick = (e) => {
    e.stopPropagation();
    console.log("Apply Now Button Clicked!");
  };

  return (
    <section
      className={styles.applySectionFullWidth}
      onClick={handleFullSectionClick}
    >
      <div className={styles.applyContentWrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.mainHeading}>
            Shape The Future Of Healthcare
            <br />
            Start Your Journey Today!
          </h2>
          <p className={styles.descriptionText}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hac arcu primis
            hac in senectus sit penatibus. Efficitur rutrum pellentesque
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.applyNowButton}
            onClick={handleApplyNowClick}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowSection;
