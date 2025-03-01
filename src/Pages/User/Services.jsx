import React, { useState } from 'react';
import { 
  Plane, Hotel, Car, Umbrella, Map, CreditCard, 
  Check, X, ChevronDown, Star, Search, Shield, Clock, 
  Percent, Heart, Headphones, Zap, Briefcase, Globe, 
  Award, Users, Smile, DollarSign
} from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.servicesContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Travel Services</h1>
          <p className={styles.heroSubtitle}>
            Discover a world of possibilities with our comprehensive travel services designed to make your journey seamless and memorable.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <div className={styles.tabsContainer}>
            <div className={styles.tabsList}>
              <button 
                className={`${styles.tabButton} ${activeTab === 'flights' ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab('flights')}
              >
                <Plane size={16} style={{ marginRight: '8px' }} />
                Flights
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'hotels' ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab('hotels')}
              >
                <Hotel size={16} style={{ marginRight: '8px' }} />
                Hotels
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'packages' ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab('packages')}
              >
                <Briefcase size={16} style={{ marginRight: '8px' }} />
                Packages
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'cars' ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab('cars')}
              >
                <Car size={16} style={{ marginRight: '8px' }} />
                Car Rentals
              </button>
              <button 
                className={`${styles.tabButton} ${activeTab === 'activities' ? styles.tabButtonActive : ''}`}
                onClick={() => setActiveTab('activities')}
              >
                <Umbrella size={16} style={{ marginRight: '8px' }} />
                Activities
              </button>
            </div>
          </div>

          <div className={styles.searchForm}>
            <input 
              type="text" 
              placeholder="Where would you like to go?" 
              className={styles.searchInput} 
            />
            <input 
              type="date" 
              placeholder="Departure Date" 
              className={styles.searchInput} 
            />
            <input 
              type="date" 
              placeholder="Return Date" 
              className={styles.searchInput} 
            />
            <button className={styles.searchButton}>
              <Search size={16} style={{ marginRight: '8px' }} />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Premium Services</h2>
          <p className={styles.sectionSubtitle}>
            We offer a wide range of travel services to cater to all your needs, ensuring a hassle-free and enjoyable experience.
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.featuredTag}>Popular</div>
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Flight Booking" 
                className={styles.serviceCardImage} 
              />
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Flight Booking</h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingStars}>
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                  </div>
                  <span className={styles.ratingCount}>(2,345 reviews)</span>
                </div>
                <p className={styles.serviceCardText}>
                  Book domestic and international flights at the best prices with our easy-to-use platform. Enjoy exclusive deals and discounts.
                </p>
                <div className={styles.serviceCardFeatures}>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>24/7 customer support</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Free cancellation on select flights</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Price match guarantee</span>
                  </div>
                </div>
                <div className={styles.serviceCardFooter}>
                  <div className={styles.servicePrice}>
                    From ₹1,999
                    <span className={styles.offerBadge}>15% OFF</span>
                  </div>
                  <a href="#" className={styles.serviceButton}>Book Now</a>
                </div>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Hotel Booking" 
                className={styles.serviceCardImage} 
              />
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Hotel Booking</h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingStars}>
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                  </div>
                  <span className={styles.ratingCount}>(1,876 reviews)</span>
                </div>
                <p className={styles.serviceCardText}>
                  Find the perfect accommodation for your stay, from luxury hotels to budget-friendly options, all at competitive prices.
                </p>
                <div className={styles.serviceCardFeatures}>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>No booking fees</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Free cancellation on most rooms</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Pay at the property option</span>
                  </div>
                </div>
                <div className={styles.serviceCardFooter}>
                  <div className={styles.servicePrice}>
                    From ₹999/night
                  </div>
                  <a href="#" className={styles.serviceButton}>Book Now</a>
                </div>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <div className={styles.featuredTag}>Best Value</div>
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Holiday Packages" 
                className={styles.serviceCardImage} 
              />
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Holiday Packages</h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingStars}>
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                  </div>
                  <span className={styles.ratingCount}>(3,210 reviews)</span>
                </div>
                <p className={styles.serviceCardText}>
                  Enjoy hassle-free travel with our curated holiday packages that include flights, hotels, transfers, and activities.
                </p>
                <div className={styles.serviceCardFeatures}>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>All-inclusive packages</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Customizable itineraries</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Expert travel assistance</span>
                  </div>
                </div>
                <div className={styles.serviceCardFooter}>
                  <div className={styles.servicePrice}>
                    From ₹12,999
                    <span className={styles.offerBadge}>20% OFF</span>
                  </div>
                  <a href="#" className={styles.serviceButton}>Book Now</a>
                </div>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Car Rentals" 
                className={styles.serviceCardImage} 
              />
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Car Rentals</h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingStars}>
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} />
                  </div>
                  <span className={styles.ratingCount}>(987 reviews)</span>
                </div>
                <p className={styles.serviceCardText}>
                  Rent a car for your journey and explore destinations at your own pace. Choose from a wide range of vehicles.
                </p>
                <div className={styles.serviceCardFeatures}>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>No hidden charges</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Free cancellation</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>24/7 roadside assistance</span>
                  </div>
                </div>
                <div className={styles.serviceCardFooter}>
                  <div className={styles.servicePrice}>
                    From ₹799/day
                  </div>
                  <a href="#" className={styles.serviceButton}>Book Now</a>
                </div>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Activities & Tours" 
                className={styles.serviceCardImage} 
              />
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Activities & Tours</h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingStars}>
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                  </div>
                  <span className={styles.ratingCount}>(1,543 reviews)</span>
                </div>
                <p className={styles.serviceCardText}>
                  Enhance your travel experience with exciting activities and guided tours at your destination.
                </p>
                <div className={styles.serviceCardFeatures}>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Skip-the-line tickets</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Expert local guides</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Mobile vouchers accepted</span>
                  </div>
                </div>
                <div className={styles.serviceCardFooter}>
                  <div className={styles.servicePrice}>
                    From ₹499
                  </div>
                  <a href="#" className={styles.serviceButton}>Book Now</a>
                </div>
              </div>
            </div>
            
            <div className={styles.serviceCard}>
              <img 
                src="https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Travel Insurance" 
                className={styles.serviceCardImage} 
              />
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>Travel Insurance</h3>
                <div className={styles.ratingContainer}>
                  <div className={styles.ratingStars}>
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} fill="#ffb100" />
                    <Star size={16} />
                  </div>
                  <span className={styles.ratingCount}>(756 reviews)</span>
                </div>
                <p className={styles.serviceCardText}>
                  Travel with peace of mind by securing comprehensive travel insurance for your journey.
                </p>
                <div className={styles.serviceCardFeatures}>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Medical coverage</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>Trip cancellation protection</span>
                  </div>
                  <div className={styles.featureItem}>
                    <Check size={16} className={styles.featureIcon} />
                    <span className={styles.featureText}>24/7 emergency assistance</span>
                  </div>
                </div>
                <div className={styles.serviceCardFooter}>
                  <div className={styles.servicePrice}>
                    From ₹299
                  </div>
                  <a href="#" className={styles.serviceButton}>Get Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Booking your travel with us is quick, easy, and hassle-free. Follow these simple steps to get started.
          </p>
          
          <div className={styles.howItWorks}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>
                <Search size={48} />
              </div>
              <h3 className={styles.stepTitle}>Search</h3>
              <p className={styles.stepText}>
                Enter your destination, dates, and preferences to find the perfect options for your trip.
              </p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>
                <Map size={48} />
              </div>
              <h3 className={styles.stepTitle}>Compare</h3>
              <p className={styles.stepText}>
                Compare prices, reviews, and features to choose the best option that suits your needs.
              </p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>
                <CreditCard size={48} />
              </div>
              <h3 className={styles.stepTitle}>Book & Pay</h3>
              <p className={styles.stepText}>
                Securely book and pay for your selection using our easy payment options.
              </p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}>
                <Smile size={48} />
              </div>
              <h3 className={styles.stepTitle}>Enjoy</h3>
              <p className={styles.stepText}>
                Receive your confirmation and enjoy your trip with our 24/7 support throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.section} ${styles.sectionGreen}`}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Why Choose Us</h2>
          <p className={styles.sectionSubtitle}>
            We strive to provide the best travel experience for our customers. Here's why millions of travelers choose us.
          </p>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <DollarSign size={48} />
              </div>
              <h3 className={styles.benefitTitle}>Best Price Guarantee</h3>
              <p className={styles.benefitText}>
                We offer the best prices in the market, and if you find a better deal, we'll match it.
              </p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <Shield size={48} />
              </div>
              <h3 className={styles.benefitTitle}>Secure Booking</h3>
              <p className={styles.benefitText}>
                Your personal and payment information is protected with industry-standard security measures.
              </p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <Clock size={48} />
              </div>
              <h3 className={styles.benefitTitle}>24/7 Support</h3>
              <p className={styles.benefitText}>
                Our customer support team is available round the clock to assist you with any queries.
              </p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <Percent size={48} />
              </div>
              <h3 className={styles.benefitTitle}>Exclusive Deals</h3>
              <p className={styles.benefitText}>
                Access exclusive deals and discounts that you won't find anywhere else.
              </p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <Heart size={48} />
              </div>
              <h3 className={styles.benefitTitle}>Personalized Experience</h3>
              <p className={styles.benefitText}>
                We tailor our recommendations based on your preferences and past bookings.
              </p>
            </div>
            
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <Headphones size={48} />
              </div>
              <h3 className={styles.benefitTitle}>Expert Assistance</h3>
              <p className={styles.benefitText}>
                Our travel experts provide personalized assistance to help you plan your perfect trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Compare Our Services</h2>
          <p className={styles.sectionSubtitle}>
            Find the perfect service that suits your travel needs and budget.
          </p>
          
          <table className={styles.compareTable}>
            <thead>
              <tr>
                <th>Features</th>
                <th>Basic</th>
                <th>Premium</th>
                <th>Luxury</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flight Booking</td>
                <td><Check size={16} className={styles.checkIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
              </tr>
              <tr>
                <td>Hotel Booking</td>
                <td><Check size={16} className={styles.checkIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
              </tr>
              <tr>
                <td>Free Cancellation</td>
                <td><X size={16} className={styles.crossIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
              </tr>
              <tr>
                <td>Priority Support</td>
                <td><X size={16} className={styles.crossIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
              </tr>
              <tr>
                <td>Exclusive Deals</td>
                <td><X size={16} className={styles.crossIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
              </tr>
              <tr>
                <td>Airport Transfers</td>
                <td><X size={16} className={styles.crossIcon} /></td>
                <td><X size={16} className={styles.crossIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
              </tr>
              <tr>
                <td>Concierge Service</td>
                <td><X size={16} className={styles.crossIcon} /></td>
                <td><X size={16} className={styles.crossIcon} /></td>
                <td><Check size={16} className={styles.checkIcon} /></td>
              </tr>
              <tr>
                <td>Price</td>
                <td>₹999</td>
                <td>₹2,999</td>
                <td>₹5,999</td>
              </tr>
              <tr>
                <td></td>
                <td><a href="#" className={styles.serviceButton}>Select</a></td>
                <td><a href="#" className={styles.serviceButton}>Select</a></td>
                <td><a href="#" className={styles.serviceButton}>Select</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Don't just take our word for it - hear from some of our satisfied customers.
          </p>
          
          <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "I've been using this platform for all my travel needs for the past 3 years. The service is exceptional, and the prices are unbeatable. Highly recommended!"
              </p>
              <div className={styles.testimonialAuthor}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Customer" 
                  className={styles.testimonialImage} 
                />
                <div className={styles.testimonialInfo}>
                  <div className={styles.testimonialName}>Rahul Mehta</div>
                  <div className={styles.testimonialRole}>Business Traveler</div>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "The holiday package we booked was perfect! Everything was well-organized, and we didn't have to worry about anything. Will definitely book again for our next vacation."
              </p>
              <div className={styles.testimonialAuthor}>
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Customer" 
                  className={styles.testimonialImage} 
                />
                <div className={styles.testimonialInfo}>
                  <div className={styles.testimonialName}>Sneha Reddy</div>
                  <div className={styles.testimonialRole}>Family Traveler</div>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Their customer service is outstanding! I had to make last-minute changes to my booking, and they were incredibly helpful and accommodating. Saved my trip!"
              </p>
              <div className={styles.testimonialAuthor}>
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Customer" 
                  className={styles.testimonialImage} 
                />
                <div className={styles.testimonialInfo}>
                  <div className={styles.testimonialName}>Arjun Kapoor</div>
                  <div className={styles.testimonialRole}>Adventure Enthusiast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Find answers to common questions about our services and booking process.
          </p>
          
          <div className={styles.faqContainer}>
            <div className={styles.faqItem}>
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(0)}
              >
                <span>How do I book a flight on your platform?</span>
                <ChevronDown 
                  size={20} 
                  className={`${styles.faqIcon} ${openFaq === 0 ? styles.faqIconRotated : ''}`} 
                />
              </div>
              {openFaq === 0 && (
                <div className={styles.faqAnswer}>
                  To book a flight, simply use our search form to enter your departure and destination cities, travel dates, and the number of passengers. Browse through the available options, select the one that suits you best, and proceed to payment. You'll receive a confirmation email with your e-ticket once the booking is complete.
                </div>
              )}
            </div>
            
            <div className={styles.faqItem}>
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(1)}
              >
                <span>Can I cancel or modify my booking?</span>
                <ChevronDown 
                  size={20} 
                  className={`${styles.faqIcon} ${openFaq === 1 ? styles.faqIconRotated : ''}`} 
                />
              </div>
              {openFaq === 1 && (
                <div className={styles.faqAnswer}>
                  Yes, you can cancel or modify your booking through your account dashboard. However, cancellation and modification policies vary depending on the service provider and the type of booking. Some bookings offer free cancellation up to a certain time before the scheduled service, while others may have cancellation fees. Please check the specific terms and conditions of your booking for details.
                </div>
              )}
            </div>
            
            <div className={styles.faqItem}>
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(2)}
              >
                <span>How do I get my e-tickets and vouchers?</span>
                <ChevronDown 
                  size={20} 
                  className={`${styles.faqIcon} ${openFaq === 2 ? styles.faqIconRotated : ''}`} 
                />
              </div>
              {openFaq === 2 && (
                <div className={styles.faqAnswer}>
                  After completing your booking, your e-tickets and vouchers will be sent to the email address you provided during the booking process. You can also access and download them from your account dashboard. We recommend keeping a digital or printed copy of your tickets and vouchers for easy access during your journey.
                </div>
              )}
            </div>
            
            <div className={styles.faqItem}>
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(3)}
              >
                <span>What payment methods do you accept?</span>
                <ChevronDown 
                  size={20} 
                  className={`${styles.faqIcon} ${openFaq === 3 ? styles.faqIconRotated : ''}`} 
                />
              </div>
              {openFaq === 3 && (
                <div className={styles.faqAnswer}>
                  We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), net banking, UPI, and popular digital wallets. All payments are processed securely through our encrypted payment gateway to ensure the safety of your financial information.
                </div>
              )}
            </div>
            
            <div className={styles.faqItem}>
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleFaq(4)}
              >
                <span>Is it safe to book through your platform?</span>
                <ChevronDown 
                  size={20} 
                  className={`${styles.faqIcon} ${openFaq === 4 ? styles.faqIconRotated : ''}`} 
                />
              </div>
              {openFaq === 4 && (
                <div className={styles.faqAnswer}>
                  Absolutely! We prioritize the security of your personal and payment information. Our website uses industry-standard encryption protocols to protect your data. We are also compliant with relevant data protection regulations and never share your information with unauthorized third parties.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Trusted Partners</h2>
          <p className={styles.sectionSubtitle}>
            We collaborate with the best in the industry to provide you with exceptional travel experiences.
          </p>
          
          <div className={styles.partnersContainer}>
            <img 
              src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Airline Partner" 
              className={styles.partnerLogo} 
            />
            <img 
              src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Hotel Partner" 
              className={styles.partnerLogo} 
            />
            <img 
              src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Car Rental Partner" 
              className={styles.partnerLogo} 
            />
            <img 
              src="https://images.unsplash.com/photo-1614680376739-8360d55bc8a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Activity Partner" 
              className={styles.partnerLogo} 
            />
            <img 
              src="https://images.unsplash.com/photo-1614680376484-4b3ed6e1e5d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
              alt="Insurance Partner" 
              className={styles.partnerLogo} 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
          <p className={styles.ctaText}>
            Join millions of travelers who trust us for their travel needs. Start planning your next adventure today!
          </p>
          <a href="#" className={styles.ctaButton}>Book Your Trip Now</a>
        </div>
      </section>
    </div>
  );
};

export default Services;