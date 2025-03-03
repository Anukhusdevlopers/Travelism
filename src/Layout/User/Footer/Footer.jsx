import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <div className={styles.footerLogo}>
                <Plane className={styles.logoIcon} size={24} />
                <span>Karwan Tours</span>
              </div>
              <p className={styles.footerDescription}>
                Making travel planning simple, affordable, and hassle-free since 2025. Your trusted partner for all your travel needs.
              </p>
              
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <div className={styles.columnLinks}>
                <a href="#" className={styles.columnLink}> <Link to='/' > Home</Link></a>
                <a href="#" className={styles.columnLink}> <Link to='/about' > About Us</Link></a>
                <a href="#" className={styles.columnLink}> <Link to='/services' > Services</Link></a>
                <a href="#" className={styles.columnLink}> <Link to='/holiday' > Packages</Link></a>
              </div>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Support</h3>
              <div className={styles.columnLinks}>
                <Link to="/contact" className={styles.columnLink}>Contact Us</Link>
              </div>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>2nd floor Sahara tower kursi road<br />Lucknow, India</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <span>7007583120</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>karwantours74@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.footerBottom}>
            <p>© 2025 Karwan International Tours. All rights reserved.</p>
            {/* <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Privacy</a>
              <a href="#" className={styles.footerLink}>Terms</a>
              <a href="#" className={styles.footerLink}>Sitemap</a>
            </div> */}
          </div>
        </footer>
      );
}

export default Footer