import React, { useState } from 'react';
import { Plane, Hotel, Car, Train, Compass, Map, Ticket, Gift, Mail, ChevronRight, Search } from 'lucide-react';
import styles from './OfferPage.module.css';

const OfferPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Offers' },
    { id: 'flights', name: 'Flight Offers' },
    { id: 'hotels', name: 'Hotel Deals' },
    { id: 'packages', name: 'Holiday Packages' },
    { id: 'international', name: 'International' },
    { id: 'weekend', name: 'Weekend Getaways' },
    { id: 'cruise', name: 'Cruise Deals' }
  ];

  const offers = [
    {
      id: 1,
      title: 'Goa Beach Getaway',
      description: 'Enjoy 3 nights at a beachfront resort with complimentary breakfast and airport transfers.',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹12,999',
      originalPrice: '₹18,500',
      tag: 'TRENDING',
      category: 'packages'
    },
    {
      id: 2,
      title: 'Bangkok & Pattaya Combo',
      description: '5 nights/6 days package with city tours, meals and luxury accommodation included.',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      price: '₹32,999',
      originalPrice: '₹45,000',
      tag: 'BESTSELLER',
      category: 'international'
    },
    {
      id: 3,
      title: 'Domestic Flight Sale',
      description: 'Special fares on domestic routes. Book now to save up to 25% on your next flight.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹1,999',
      originalPrice: '₹3,200',
      tag: 'SALE',
      category: 'flights'
    },
    {
      id: 4,
      title: 'Luxury Rajasthan Tour',
      description: 'Experience royal Rajasthan with 7 nights at heritage hotels and guided tours of palaces.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹24,999',
      originalPrice: '₹32,000',
      tag: 'LUXURY',
      category: 'packages'
    },
    {
      id: 5,
      title: 'Maldives Special',
      description: '4 nights in an overwater villa with all-inclusive meals and water activities.',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹65,999',
      originalPrice: '₹89,000',
      tag: 'HONEYMOON',
      category: 'international'
    },
    {
      id: 6,
      title: 'Weekend in Munnar',
      description: '2 nights amidst the tea plantations with mountain views and nature walks.',
      image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹8,499',
      originalPrice: '₹12,000',
      tag: 'WEEKEND',
      category: 'weekend'
    },
    {
      id: 7,
      title: 'Premium Hotel Collection',
      description: 'Special rates at 5-star hotels across India. Free upgrades and late checkout.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹4,999',
      originalPrice: '₹8,500',
      tag: 'PREMIUM',
      category: 'hotels'
    },
    {
      id: 8,
      title: 'Singapore Cruise',
      description: '3 nights cruise from Singapore with entertainment, meals and cabin accommodation.',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹28,999',
      originalPrice: '₹36,500',
      tag: 'NEW',
      category: 'cruise'
    }
  ];

  const filteredOffers = activeCategory === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === activeCategory);

  return (
    <div className={styles.offerPage}>

      <div className={styles.banner}>
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Travel Deals" 
          className={styles.bannerImage} 
        />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Exclusive Travel Offers</h1>
          <p className={styles.bannerSubtitle}>
            Discover incredible deals on flights, hotels, and vacation packages. Limited time offers available now!
          </p>
          <button className={styles.bannerButton}>Explore Deals</button>
        </div>
      </div>

      <div className={styles.categories}>
        {categories.map(category => (
          <button 
            key={category.id}
            className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Featured Offers</h2>
      
      <div className={styles.offerGrid}>
        {filteredOffers.map(offer => (
          <div key={offer.id} className={styles.offerCard}>
            <img src={offer.image} alt={offer.title} className={styles.offerImage} />
            <div className={styles.offerContent}>
              <div className={styles.offerTag}>{offer.tag}</div>
              <h3 className={styles.offerTitle}>{offer.title}</h3>
              <p className={styles.offerDescription}>{offer.description}</p>
              <div className={styles.offerPrice}>
                <div>
                  <span className={styles.priceTag}>{offer.price}</span>
                  <span className={styles.originalPrice}>{offer.originalPrice}</span>
                </div>
                <button className={styles.offerButton}>View Deal</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>Get Exclusive Offers</h2>
        <p className={styles.newsletterDescription}>
          Subscribe to our newsletter and be the first to know about special deals, new destinations, and travel tips.
        </p>
        <div className={styles.newsletterForm}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className={styles.newsletterInput} 
          />
          <button className={styles.newsletterButton}>Subscribe</button>
        </div>
      </div>

    </div>
  );
};

export default OfferPage;