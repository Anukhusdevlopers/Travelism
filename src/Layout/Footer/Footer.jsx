import React from 'react';
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
                <span>Tour&Travel</span>
              </div>
              <p className={styles.footerDescription}>
                Making travel planning simple, affordable, and hassle-free since 2020. Your trusted partner for all your travel needs.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <Facebook size={18} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Twitter size={18} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Instagram size={18} />
                </a>
                <a href="#" className={styles.socialLink}>
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Company</h3>
              <div className={styles.columnLinks}>
                <a href="#" className={styles.columnLink}>About Us</a>
                <a href="#" className={styles.columnLink}>Careers</a>
                <a href="#" className={styles.columnLink}>Blog</a>
                <a href="#" className={styles.columnLink}>Press</a>
                <a href="#" className={styles.columnLink}>Gift Cards</a>
                <a href="#" className={styles.columnLink}>Magazine</a>
              </div>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Support</h3>
              <div className={styles.columnLinks}>
                <a href="#" className={styles.columnLink}>Contact Us</a>
                <a href="#" className={styles.columnLink}>Help Center</a>
                <a href="#" className={styles.columnLink}>Privacy Policy</a>
                <a href="#" className={styles.columnLink}>Terms of Service</a>
                <a href="#" className={styles.columnLink}>Trust & Safety</a>
                <a href="#" className={styles.columnLink}>Accessibility</a>
              </div>
            </div>
            
            <div className={styles.footerColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <div className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>123 Travel Street, Suite 100<br />India, NY 10001</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>support@travelease.com</span>
              </div>
            </div>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.footerBottom}>
            <p>© 2025 TravelEase. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Privacy</a>
              <a href="#" className={styles.footerLink}>Terms</a>
              <a href="#" className={styles.footerLink}>Sitemap</a>
            </div>
          </div>
        </footer>
      );
}

export default Footer