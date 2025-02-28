import React from 'react'
import styles from './Destinations.module.css'
import { MapPin, Calendar, Star } from 'lucide-react';

const Destination = () => {
    const destinations = [
        {
          id: 1,
          name: 'Santorini, Greece',
          rating: 4.8,
          duration: '7 days',
          image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          name: 'Kyoto, Japan',
          rating: 4.7,
          duration: '10 days',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 3,
          name: 'Machu Picchu, Peru',
          rating: 4.9,
          duration: '5 days',
          image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 4,
          name: 'Maldives',
          rating: 4.8,
          duration: '6 days',
          image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 5,
          name: 'Barcelona, Spain',
          rating: 4.6,
          duration: '4 days',
          image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 6,
          name: 'New York, USA',
          rating: 4.7,
          duration: '5 days',
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 7,
          name: 'Cape Town, South Africa',
          rating: 4.5,
          duration: '8 days',
          image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 8,
          name: 'Sydney, Australia',
          rating: 4.6,
          duration: '9 days',
          image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
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
                    <span className={styles.destinationDetail}>
                      <Calendar size={14} />
                      {destination.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Destination