import React from 'react'
import { Smartphone, CheckCircle, Apple, Smartphone as AndroidIcon } from 'lucide-react';
import styles from './Download.module.css';

const Download = () => {
    const appFeatures = [
        "Book flights, hotels, and more on the go",
        "Get real-time updates on your bookings",
        "Access exclusive mobile-only deals",
        "Manage your trips with ease"
      ];
      

    return (
        <section className={styles.downloadSection}>
          <div className={styles.downloadContent}>
            <h2 className={styles.sectionTitle}>Download Our Mobile App</h2>
            <p className={styles.sectionDescription}>
              Take TravelEase with you wherever you go. Our mobile app makes it easy to book and manage your trips on the move.
            </p>
            
            <div className={styles.appFeatures}>
              {appFeatures.map((feature, index) => (
                <div key={index} className={styles.appFeature}>
                  <div className={styles.featureIcon}>
                    <CheckCircle size={16} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className={styles.downloadButtons}>
              <button className={styles.downloadButton}>
                <Apple size={20} />
                <span>App Store</span>
              </button>
              <button className={styles.downloadButton}>
                <AndroidIcon size={20} />
                <span>Google Play</span>
              </button>
            </div>
          </div>
          
          <div className={styles.appImageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="TravelEase Mobile App" 
              className={styles.appImage} 
            />
          </div>
        </section>
      );
}

export default Download