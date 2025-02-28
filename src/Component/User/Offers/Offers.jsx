import React from 'react'
import styles from './Offers.module.css'
import { Link } from 'react-router-dom';

const Offers = () => {

  const offers = [
    {
      id: 1,
      title: 'Bali Beach Getaway',
      description: 'Enjoy 5 nights at a luxury resort with complimentary breakfast and spa treatment.',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'European Adventure',
      description: 'Visit 4 countries in 10 days with guided tours and premium accommodations.',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Mountain Retreat',
      description: 'Escape to the mountains with this all-inclusive 3-night package.',
      price: '$599',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  return (
    <section className={styles.offersSection}>
      <h2 className={styles.sectionTitle}>Exclusive Offers</h2>
      <p className={styles.sectionSubtitle}>Handpicked deals for unforgettable experiences</p>
      
      <div className={styles.offersGrid}>
        {offers.map(offer => (
          <div key={offer.id} className={styles.offerCard}>
            <img 
              src={offer.image} 
              alt={offer.title} 
              className={styles.offerImage} 
            />
            <div className={styles.offerContent}>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDescription}>{offer.description}</p>
              <div className={styles.offerMeta}>
                <span className={styles.offerPrice}>From {offer.price}</span>
                <button className={styles.offerButton}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className={styles.viewAllButton}><Link to={'/offer'} >View All Offers</Link></button>
    </section>
  );
}

export default Offers