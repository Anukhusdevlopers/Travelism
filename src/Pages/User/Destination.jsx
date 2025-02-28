import React, { useState } from 'react';
import { Calendar, MapPin, Star, Clock, Users, Plane, Hotel, Car, CreditCard, Heart, Search } from 'lucide-react';
import styles from './Destination.module.css';

const DestinationPage = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ destination, checkIn, checkOut, guests });
    // Handle search logic here
  };

  return (
    <div>
      <header className={styles.hero}>
        <img 
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80" 
          alt="Beautiful beach destination" 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover Your Perfect Getaway</h1>
          <p className={styles.heroSubtitle}>Explore breathtaking destinations and create unforgettable memories with our exclusive travel packages</p>
        </div>
      </header>

      <main className={styles.container}>
        <section className={styles.searchContainer}>
          <h2 className={styles.searchTitle}>Find Your Dream Destination</h2>
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Destination</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Where are you going?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Check-in</label>
              <input
                type="date"
                className={styles.formInput}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Check-out</label>
              <input
                type="date"
                className={styles.formInput}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Guests</label>
              <select
                className={styles.formInput}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="">Select guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>
            <button type="submit" className={styles.searchButton}>
              <Search size={18} style={{ marginRight: '8px' }} />
              Search
            </button>
          </form>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Popular Destinations</h2>
          <div className={styles.destinationsGrid}>
            {popularDestinations.map((destination) => (
              <div key={destination.id} className={styles.destinationCard}>
                <img src={destination.image} alt={destination.name} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{destination.name}</h3>
                  <p className={styles.cardDescription}>{destination.description}</p>
                  <div className={styles.cardPrice}>From ${destination.price}</div>
                  <div className={styles.cardMeta}>
                    <div className={styles.cardMetaItem}>
                      <Star size={16} className={styles.cardIcon} />
                      {destination.rating}
                    </div>
                    <div className={styles.cardMetaItem}>
                      <Clock size={16} className={styles.cardIcon} />
                      {destination.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.offersSection}>
          <h2 className={styles.sectionTitle}>Special Offers</h2>
          {specialOffers.map((offer) => (
            <div key={offer.id} className={styles.offerCard}>
              <img src={offer.image} alt={offer.title} className={styles.offerImage} />
              <div className={styles.offerContent}>
                <h3 className={styles.offerTitle}>{offer.title}</h3>
                <p className={styles.offerDescription}>{offer.description}</p>
                <div>
                  <span className={styles.offerCode}>{offer.code}</span>
                  <button className={styles.offerButton}>Apply Offer</button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>What Our Travelers Say</h2>
          <div className={styles.destinationsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <p className={styles.testimonialContent}>"{testimonial.content}"</p>
                <div className={styles.testimonialAuthor}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles.authorAvatar} />
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorLocation}>{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    
    </div>
  );
};

// Sample data
const popularDestinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    description: 'Experience the perfect blend of beaches, culture, and relaxation in this tropical paradise.',
    price: 899,
    rating: '4.8',
    duration: '7 days',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    description: 'Discover the iconic white buildings and breathtaking sunsets of this Mediterranean gem.',
    price: 1299,
    rating: '4.9',
    duration: '5 days',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
  {
    id: 3,
    name: 'Kyoto, Japan',
    description: 'Immerse yourself in Japanese culture with ancient temples, gardens, and traditional experiences.',
    price: 1499,
    rating: '4.7',
    duration: '8 days',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
  {
    id: 4,
    name: 'Maldives',
    description: 'Relax in luxury overwater bungalows surrounded by crystal clear turquoise waters.',
    price: 2199,
    rating: '4.9',
    duration: '6 days',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
  {
    id: 5,
    name: 'Swiss Alps',
    description: 'Experience the majestic mountains with skiing, hiking, and picturesque alpine villages.',
    price: 1699,
    rating: '4.8',
    duration: '7 days',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
  {
    id: 6,
    name: 'Machu Picchu, Peru',
    description: 'Explore the ancient Incan citadel set high in the Andes Mountains.',
    price: 1899,
    rating: '4.7',
    duration: '9 days',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
];

const specialOffers = [
  {
    id: 1,
    title: 'Early Bird Summer Special',
    description: 'Book your summer vacation now and get 20% off on selected destinations. Limited time offer!',
    code: 'SUMMER20',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
  {
    id: 2,
    title: 'Honeymoon Package',
    description: 'Special romantic package including luxury accommodations, private dinners, and couples spa treatments.',
    code: 'HONEYMOON',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80'
  },
];

const testimonials = [
  {
    id: 1,
    content: 'Our trip to Bali was absolutely perfect! The accommodations were stunning, and the itinerary was perfectly balanced between activities and relaxation time.',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    content: 'The Swiss Alps tour exceeded all our expectations. The guides were knowledgeable, and the views were breathtaking. Will definitely book with TravelEase again!',
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 3,
    content: 'Our family vacation to Japan was the trip of a lifetime. The cultural experiences and food were amazing, and everything was so well organized.',
    name: 'Emily Rodriguez',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
  },
];

export default DestinationPage;