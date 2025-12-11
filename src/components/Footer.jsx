"use client";

import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";


const contactIconsData = {
  location: { src: "/icons/contact.svg", alt: "Location Icon" },
  email: { src: "/icons/email.svg", alt: "Email Icon" },
  contact: { src: "/icons/location.svg", alt: "Phone Icon" },
};

const socialIconsData = [
  { name: "Facebook", src: "/icons/social_icon1.svg", href: "#" },
  { name: "Twitter", src: "/icons/social_icon2.svg", href: "#" },
  { name: "LinkedIn", src: "/icons/social_icon3.svg", href: "#" },
  { name: "Instagram", src: "/icons/social_icon4.svg", href: "#" },
];

const quickLinks = [
  { title: "Admissions", href: "#" },
  { title: "Campus Life", href: "#" },
  { title: "Placements", href: "#" },
  { title: "Academics", href: "#" },
  { title: "Careers", href: "#" },
];

const academicLinks = [
  { title: "Bachelor of Physiotherapy", href: "#" },
  { title: "Master of Physiotherapy", href: "#" },
  { title: "Bachelor of Occupational Therapy", href: "#" },
  { title: "Master of Occupational Therapy", href: "#" },
  { title: "Master of Science", href: "#" },
];

const Footer = () => {
  const handleLinkClick = (e, linkTitle) => {
    console.log(`${linkTitle} clicked.`);
  };

  return (
    <footer className={styles.footerSection}>
      <div className={styles.waveContour}></div>

      <div className={styles.footerMainContent}>
        <div className={styles.footerWrapper}>
          <div className={styles.logoSection}>
            <div className={styles.logoHexagonBg}>
              <div className={styles.logoText}>Logo</div>
            </div>

            <p className={styles.aboutText}>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut
            </p>

            <p className={styles.followUsText}>Follow Us</p>
            <div className={styles.socialIcons}>
              {socialIconsData.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  aria-label={icon.name}
                  className={styles.socialIcon}
                >
                  <Image
                    src={icon.src}
                    alt={`${icon.name} Icon`}
                    width={29}
                    height={21}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.quickLinkSection}>
            <h3 className={styles.sectionTitle}>Quick Link</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.title} className={styles.listItem}>
                  <a
                    href={link.href}
                    className={styles.linkText}
                    onClick={(e) => handleLinkClick(e, link.title)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.academicsSection}>
            <h3 className={styles.sectionTitle}>Academics</h3>
            <ul className={styles.linkList}>
              {academicLinks.map((link) => (
                <li key={link.title} className={styles.listItem}>
                  <a
                    href={link.href}
                    className={styles.linkText}
                    onClick={(e) => handleLinkClick(e, link.title)}
                  >
                    {link.title}
                  </a>
                   
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>

            <div className={styles.contactItem}>
              <div className={styles.locationIcon}>
                <Image
                  src={contactIconsData.location.src}
                  alt={contactIconsData.location.alt}
                  width={20} 
                  height={20}
                />
              </div>
              <p className={styles.contactText}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Hac arcu
                primis hac in senectus sit penatibus. Efficitur rutrum
                pellentesque
              </p>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <Image
                  src={contactIconsData.email.src}
                  alt={contactIconsData.email.alt}
                  width={20}
                  height={20}
                />
              </div>
              <a href="mailto:college@gmail.com" className={styles.contactLink}>
                college@gmail.com
              </a>
            </div>

            <div className={styles.contactItem}>
              {/* Phone Icon */}
              <div className={styles.contactIcon}>
                <Image
                  src={contactIconsData.contact.src}
                  alt={contactIconsData.contact.alt}
                  width={20} 
                  height={20}
                />
              </div>
              <a href="tel:0000000000" className={styles.contactLink}>
                000-000-000
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        <div className={styles.copyrightContent}>
          College © 2025 - All Right Reserved | Designed & Developed by Xtracut
        </div>
      </div>
    </footer>
  );
};

export default Footer;
