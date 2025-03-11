import React from 'react'
import styles from './Destinations.module.css'
import { MapPin, Calendar, Star } from 'lucide-react';
import img1 from '../../../assets/IMG-20250306-WA0011.jpg'
import img2 from '../../../assets/IMG-20250306-WA0012.jpg'
import img3 from '../../../assets/IMG-20250306-WA0014.jpg'
import img4 from '../../../assets/IMG-20250306-WA0015.jpg'
import img5 from '../../../assets/IMG-20250306-WA0016.jpg'
import img6 from '../../../assets/IMG-20250306-WA0017.jpg'
import img7 from '../../../assets/destination1.jpg'

const Destination = () => {
    const destinations = [
        {
          id: 1,
          name: 'Madinah Munawaarah Ziyarah',
          rating: 4.8,
          duration: '7 days',
          image: img1
        },
        {
          id: 2,
          name: 'Makkah Mukarramah',
          rating: 4.7,
          duration: '10 days',
          image: img2
        },
        {
          id: 3,
          name: 'Clock Tower',
          rating: 4.9,
          duration: '5 days',
          image: img3
        },
        {
          id: 4,
          name: 'Mina Ziyarah',
          rating: 4.8,
          duration: '6 days',
          image: img4
        },
        {
          id: 5,
          name: 'Arafat Ziyarah',
          rating: 4.6,
          duration: '4 days',
          image:  img5
              },
        {
          id: 6,
          name: 'Best Umrah Packages',
          rating: 4.7,
          duration: '5 days',
          image: img6
        },
        {
          id: 7,
          name: 'Medinah Munawaarah',
          rating: 4.5,
          duration: '8 days',
          image: img7
           },
        // {
        //   id: 8,
        //   name: 'Sydney, Saudi',
        //   rating: 4.6,
        //   duration: '9 days',
        //   image: img2
        //     }
      ];

    return (
        <section className={styles.destinationsSection}>
          <h2 className={styles.sectionTitle}>Popular Destinations</h2>
          <p className={styles.sectionSubtitle}>Explore top-rated destinations around the world</p>
          
          <div className={styles.destinationsGrid}>
            {destinations.map(destination => (
              <div key={destination.id} className={styles.destinationCard}>
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className={styles.destinationImage} 
                />
                <div className={styles.destinationOverlay}>
                  <h3 className={styles.destinationName}>{destination.name}</h3>
                  <div className={styles.destinationDetails}>
                    <span className={styles.destinationDetail}>
                      <Star size={14} />
                      {destination.rating}
                    </span>
                    {/* <span className={styles.destinationDetail}>
                      <Calendar size={14} />
                      {destination.duration}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Destination