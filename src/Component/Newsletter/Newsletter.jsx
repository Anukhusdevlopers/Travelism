import React, { useState } from 'react'
import { Send } from 'lucide-react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle newsletter subscription
      console.log('Subscribing email:', email);
      setEmail('');
      alert('Thank you for subscribing to our newsletter!');
    };

    return (
    <section className={styles.newsletterSection}>
      <h2 className={styles.sectionTitle}>Subscribe to Our Newsletter</h2>
      <p className={styles.sectionDescription}>
        Stay updated with the latest travel deals, destination guides, and exclusive offers.
      </p>
      
      <form className={styles.newsletterForm} onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className={styles.newsletterInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className={styles.newsletterButton}>
          <Send size={18} />
          <span>Subscribe</span>
        </button>
      </form>
      
      <p className={styles.privacyNote}>
        By subscribing, you agree to our Privacy Policy and consent to receive our promotional emails.
      </p>
    </section>
  );
}

export default Newsletter