
"use client"; 
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle Menu Function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Logo
        </Link>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <li><Link href="/" className={styles.linkItem}>Home</Link></li>
          <li><Link href="/about" className={styles.linkItem}>About Us</Link></li>
          <li><Link href="/academics" className={styles.linkItem}>Academics</Link></li>
          <li><Link href="/campus" className={styles.linkItem}>Campus Life</Link></li>
          <li><Link href="/activities" className={styles.linkItem}>Professional Activities</Link></li>
          <li><Link href="/careers" className={styles.linkItem}>Careers</Link></li>
        </ul>
        <div className={styles.btnGroup}>
          <Link href="/admission" className={styles.btnAdmission}>
            Admission
          </Link>
          <Link href="/contact" className={styles.btnContact}>
            Contact
          </Link>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
           <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;