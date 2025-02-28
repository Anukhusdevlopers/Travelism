import React from 'react'
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonial = () => {

    const testimonials = [
        {
          id: 1,
          quote: "TravelEase made planning our honeymoon so simple. The booking process was smooth, and we got an amazing deal on our resort in Bali. Highly recommend!",
          author: "Sarah Johnson",
          location: "New York, USA",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          rating: 5
        },
        {
          id: 2,
          quote: "I've been using TravelEase for all my business trips for the past year. Their customer service is exceptional, and the mobile app makes managing bookings a breeze.",
          author: "Michael Chen",
          location: "Toronto, Canada",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          rating: 4
        },
        {
          id: 3,
          quote: "Our family vacation to Europe was perfectly organized thanks to TravelEase. From flights to hotels and local tours, everything was seamless. Will definitely use again!",
          author: "Emma Rodriguez",
          location: "London, UK",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          rating: 5
        }
      ];

    return (
        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>Real experiences from satisfied travelers</p>
          
          <div className={styles.testimonialsContainer}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                
                <div className={styles.testimonialAuthor}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className={styles.authorAvatar} 
                  />
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{testimonial.author}</span>
                    <span className={styles.authorLocation}>{testimonial.location}</span>
                    <div className={styles.testimonialRating}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={styles.starIcon}
                          fill={i < testimonial.rating ? "#ffd166" : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Testimonial