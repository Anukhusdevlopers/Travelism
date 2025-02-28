import React, { useState } from 'react';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Sun, 
  Umbrella, 
  Mountain, 
  Utensils, 
  Clock, 
  Star, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';
import styles from './Holiday.module.css';

const Holiday = () => {
  const [activeNav, setActiveNav] = useState('holidays');

  const destinations = [
    {
      id: 1,
      title: 'Enchanting Rajasthan',
      location: 'Jaipur, Udaipur, Jodhpur',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      days: 7,
      meals: 'Breakfast & Dinner',
      activities: '12+ Activities',
      price: 32999,
      tag: 'BESTSELLER'
    },
    {
      id: 2,
      title: 'Kerala Backwaters',
      location: 'Kochi, Munnar, Alleppey',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      days: 6,
      meals: 'All Meals',
      activities: '8+ Activities',
      price: 28499,
      tag: 'TRENDING'
    },
    {
      id: 3,
      title: 'Himalayan Adventure',
      location: 'Shimla, Manali, Dharamshala',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      days: 8,
      meals: 'Breakfast',
      activities: '15+ Activities',
      price: 35999,
      tag: 'ADVENTURE'
    },
    {
      id: 4,
      title: 'Golden Triangle',
      location: 'Delhi, Agra, Jaipur',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      days: 5,
      meals: 'Breakfast & Dinner',
      activities: '10+ Activities',
      price: 24999,
      tag: 'POPULAR'
    },
    {
      id: 5,
      title: 'Goa Beach Vacation',
      location: 'North & South Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      days: 4,
      meals: 'Breakfast',
      activities: '6+ Activities',
      price: 18999,
      tag: 'BEACH'
    },
    {
      id: 6,
      title: 'Andaman Islands',
      location: 'Port Blair, Havelock, Neil Island',
      image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      days: 6,
      meals: 'All Meals',
      activities: '12+ Activities',
      price: 42999,
      tag: 'EXOTIC'
    }
  ];

  const themes = [
    {
      id: 1,
      name: 'Beach Holidays',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Mountain Escapes',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Wildlife Safari',
      image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      name: 'Heritage Tours',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      name: 'Honeymoon Packages',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const testimonials = [
    {
      id: 1,
      content: "Our trip to Rajasthan was absolutely magical! The palaces, the culture, the food - everything was perfect. The tour was well organized and our guide was knowledgeable and friendly.",
      author: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      trip: "Enchanting Rajasthan"
    },
    {
      id: 2,
      content: "Kerala backwaters cruise was the highlight of our trip. Staying in a houseboat and waking up to serene views was an experience we'll never forget. Highly recommend!",
      author: "Rahul Mehta",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      trip: "Kerala Backwaters"
    },
    {
      id: 3,
      content: "The Himalayan Adventure package exceeded our expectations. The views were breathtaking and the activities were thrilling. Perfect balance of adventure and relaxation.",
      author: "Ananya Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      trip: "Himalayan Adventure"
    }
  ];

  return (
    <div className={styles.holidayPage}>
      

      <div className={styles.banner}>
        <img 
          src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Incredible India" 
          className={styles.bannerImage} 
        />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Discover Incredible India</h1>
          <p className={styles.bannerSubtitle}>
            Explore the diverse landscapes, rich culture, and unforgettable experiences that India has to offer. 
            From majestic mountains to serene beaches, ancient temples to modern cities.
          </p>
          <button className={styles.bannerButton}>Explore Packages</button>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <h2 className={styles.searchTitle}>Find Your Perfect Holiday</h2>
        <div className={styles.searchForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Destination</label>
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className={styles.formInput} 
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Travel Date</label>
            <input 
              type="date" 
              className={styles.formInput} 
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Duration</label>
            <select className={styles.formSelect}>
              <option value="">Select Duration</option>
              <option value="3-5">3-5 Days</option>
              <option value="6-9">6-9 Days</option>
              <option value="10+">10+ Days</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Budget Per Person</label>
            <select className={styles.formSelect}>
              <option value="">Select Budget</option>
              <option value="economy">Economy (Under ₹20,000)</option>
              <option value="standard">Standard (₹20,000 - ₹40,000)</option>
              <option value="premium">Premium (₹40,000+)</option>
            </select>
          </div>
          <button className={styles.searchButton}>
            <Search size={18} />
            Search
          </button>
        </div>
      </div>

      <section>
        <h2 className={styles.sectionTitle}>Popular Holiday Destinations</h2>
        <p className={styles.sectionSubtitle}>
          Discover our most loved holiday packages across India. From royal Rajasthan to serene Kerala backwaters, 
          adventurous Himalayas to exotic beaches - we have something for every traveler.
        </p>
        
        <div className={styles.destinationGrid}>
          {destinations.map(destination => (
            <div key={destination.id} className={styles.destinationCard}>
              <img 
                src={destination.image} 
                alt={destination.title} 
                className={styles.destinationImage} 
              />
              <div className={styles.destinationTag}>{destination.tag}</div>
              <div className={styles.destinationContent}>
                <h3 className={styles.destinationTitle}>{destination.title}</h3>
                <div className={styles.destinationLocation}>
                  <MapPin size={16} />
                  {destination.location}
                </div>
                <div className={styles.destinationFeatures}>
                  <div className={styles.destinationFeature}>
                    <Calendar size={14} />
                    {destination.days} Days
                  </div>
                  <div className={styles.destinationFeature}>
                    <Utensils size={14} />
                    {destination.meals}
                  </div>
                  <div className={styles.destinationFeature}>
                    <Mountain size={14} />
                    {destination.activities}
                  </div>
                </div>
                <div className={styles.destinationPrice}>
                  <span className={styles.priceLabel}>Starting from</span>
                  <span className={styles.priceValue}>₹{destination.price.toLocaleString()}</span>
                  <span className={styles.priceUnit}>per person</span>
                </div>
                <button className={styles.destinationButton}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.themeSection}>
        <h2 className={styles.sectionTitle}>Explore by Theme</h2>
        <p className={styles.sectionSubtitle}>
          Looking for a specific type of holiday? Browse our curated collections based on your interests and preferences.
        </p>
        
        <div className={styles.themeCards}>
          {themes.map(theme => (
            <div key={theme.id} className={styles.themeCard}>
              <img 
                src={theme.image} 
                alt={theme.name} 
                className={styles.themeImage} 
              />
              <div className={styles.themeOverlay}>
                <div className={styles.themeName}>{theme.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Travelers Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                {testimonial.content}
              </div>
              <div className={styles.testimonialAuthor}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className={styles.authorAvatar} 
                />
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorTrip}>{testimonial.trip}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready for Your Next Adventure?</h2>
        <p className={styles.ctaDescription}>
          Book your dream holiday today and get exclusive offers, personalized itineraries, 
          and 24/7 on-trip assistance. Create memories that last a lifetime!
        </p>
        <button className={styles.ctaButton}>Plan My Holiday Now</button>
      </section>

    </div>
  );
};

export default Holiday;