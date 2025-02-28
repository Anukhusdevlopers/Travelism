import React from 'react'
import { Shield, Clock, CreditCard, HeadphonesIcon } from 'lucide-react';
import styles from './Features.module.css'; 

const Features = () => {

    const features = [
        {
          id: 1,
          title: 'Secure Booking',
          description: 'Your payment and personal information are always protected with our secure booking system.',
          icon: <Shield size={28} />
        },
        {
          id: 2,
          title: 'Fast Confirmation',
          description: 'Get instant confirmation for your bookings and e-tickets delivered straight to your inbox.',
          icon: <Clock size={28} />
        },
        {
          id: 3,
          title: 'Best Price Guarantee',
          description: 'We promise the best rates and will match any lower price you find elsewhere.',
          icon: <CreditCard size={28} />
        },
        {
          id: 4,
          title: '24/7 Support',
          description: 'Our customer support team is available round the clock to assist you with any queries.',
          icon: <HeadphonesIcon size={28} />
        }
      ];

    return (
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <p className={styles.sectionSubtitle}>We make travel planning easy and worry-free</p>
          
          <div className={styles.featuresGrid}>
            {features.map(feature => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Features