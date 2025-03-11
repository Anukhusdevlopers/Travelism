import React from 'react'
import styles from './Offers.module.css'
import img1 from '../../../assets/IMG-20250306-WA0019.jpg'
import img2 from '../../../assets/IMG-20250306-WA0020.jpg'
import img3 from '../../../assets/IMG-20250306-WA0021.jpg'

const Offers = () => {

  const offers = [
    {
      id: 1,
      title: 'Umrah',
      description: 'Enjoy 5 nights at a luxury resort with complimentary breakfast and spa treatment.',
      price: '$899',
      image: img1
    },
    {
      id: 2,
      title: 'Makka Madina',
      description: 'Visit 4 countries in 10 days with guided tours and premium accommodations.',
      price: '$1,299',
      image: img2
    },
    {
      id: 3,
      title: 'Hajj',
      description: 'Escape to the mountains with this all-inclusive 3-night package.',
      price: '$599',
      image: img3
    }
  ];
  
  return (
    <section className={styles.offersSection}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <p className={styles.sectionSubtitle}>Handpicked deals for unforgettable experiences</p>
      
      <div className={styles.offersGrid}>
        {offers.map(offer => (
          <div key={offer.id} className={styles.offerCard}>
            <img 
              src={offer.image} 
              alt={offer.title} 
              className={styles.offerImage} 
            />
            {/* <div className={styles.offerContent}>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDescription}>{offer.description}</p>
              <div className={styles.offerMeta}>
                <span className={styles.offerPrice}>From {offer.price}</span>
                <button className={styles.offerButton}>Book Now</button>
              </div>
            </div> */}
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Offers