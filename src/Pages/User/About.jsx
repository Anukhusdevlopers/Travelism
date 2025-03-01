import React from 'react';
import { Award, Users, Heart, Globe, Compass, Shield, Star, Clock, Briefcase } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover Our Journey</h1>
          <p className={styles.heroSubtitle}>
            Transforming the way people travel since 2006, making every journey memorable and hassle-free.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.sectionSubtitle}>
            From a small startup to India's leading travel platform, our journey has been incredible.
          </p>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>The Beginning</h3>
                <p className={styles.timelineText}>
                  Founded with a vision to simplify travel bookings for Indian travelers, we started our journey with a small team of passionate individuals.
                </p>
              </div>
              <div className={styles.timelineYear}>2006</div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Expanding Horizons</h3>
                <p className={styles.timelineText}>
                  Launched our first mobile app and expanded our services to include international flights and hotels.
                </p>
              </div>
              <div className={styles.timelineYear}>2010</div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Going Public</h3>
                <p className={styles.timelineText}>
                  Successfully completed our IPO, marking a significant milestone in our growth journey.
                </p>
              </div>
              <div className={styles.timelineYear}>2015</div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Global Expansion</h3>
                <p className={styles.timelineText}>
                  Expanded our operations to multiple countries, becoming a truly global travel platform.
                </p>
              </div>
              <div className={styles.timelineYear}>2019</div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>Innovation & Growth</h3>
                <p className={styles.timelineText}>
                  Introduced AI-powered recommendations and sustainable travel options, setting new industry standards.
                </p>
              </div>
              <div className={styles.timelineYear}>2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${styles.section} ${styles.sectionGreen}`}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Our Impact</h2>
          <p className={styles.sectionSubtitle}>
            Numbers that reflect our commitment to transforming the travel industry.
          </p>
          
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50M+</div>
              <div className={styles.statTitle}>Happy Travelers</div>
            </div>
            
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statTitle}>Countries</div>
            </div>
            
            <div className={styles.statItem}>
              <div className={styles.statNumber}>200K+</div>
              <div className={styles.statTitle}>Hotel Partners</div>
            </div>
            
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statTitle}>Airline Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <p className={styles.sectionSubtitle}>
            The principles that guide us in our mission to make travel accessible, affordable, and enjoyable for everyone.
          </p>
          
          <div className={styles.values}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <Users size={48} />
              </div>
              <h3 className={styles.valueTitle}>Customer First</h3>
              <p className={styles.valueText}>
                We put our customers at the center of everything we do, ensuring their needs and preferences drive our innovations.
              </p>
            </div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <Heart size={48} />
              </div>
              <h3 className={styles.valueTitle}>Passion</h3>
              <p className={styles.valueText}>
                We are passionate about travel and committed to making every journey memorable for our customers.
              </p>
            </div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <Globe size={48} />
              </div>
              <h3 className={styles.valueTitle}>Inclusivity</h3>
              <p className={styles.valueText}>
                We believe travel should be accessible to everyone, regardless of background or budget.
              </p>
            </div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <Compass size={48} />
              </div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueText}>
                We continuously innovate to improve our services and stay ahead in the ever-evolving travel industry.
              </p>
            </div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <Shield size={48} />
              </div>
              <h3 className={styles.valueTitle}>Trust</h3>
              <p className={styles.valueText}>
                We build trust through transparency, reliability, and consistent delivery of our promises.
              </p>
            </div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <Star size={48} />
              </div>
              <h3 className={styles.valueTitle}>Excellence</h3>
              <p className={styles.valueText}>
                We strive for excellence in everything we do, from customer service to technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Leadership</h2>
          <p className={styles.sectionSubtitle}>
            Meet the visionaries who are leading our journey to transform the travel industry.
          </p>
          
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="CEO" 
                className={styles.teamImage} 
              />
              <h3 className={styles.teamName}>Rajesh Sharma</h3>
              <p className={styles.teamRole}>Founder & CEO</p>
              <p className={styles.teamBio}>
                With over 20 years of experience in the travel industry, Rajesh has been the driving force behind our vision and growth.
              </p>
            </div>
            
            <div className={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="COO" 
                className={styles.teamImage} 
              />
              <h3 className={styles.teamName}>Priya Patel</h3>
              <p className={styles.teamRole}>Chief Operating Officer</p>
              <p className={styles.teamBio}>
                Priya oversees our day-to-day operations, ensuring we deliver exceptional service to our customers.
              </p>
            </div>
            
            <div className={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="CTO" 
                className={styles.teamImage} 
              />
              <h3 className={styles.teamName}>Vikram Singh</h3>
              <p className={styles.teamRole}>Chief Technology Officer</p>
              <p className={styles.teamBio}>
                Vikram leads our technology initiatives, driving innovation and ensuring our platform remains cutting-edge.
              </p>
            </div>
            
            <div className={styles.teamMember}>
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="CMO" 
                className={styles.teamImage} 
              />
              <h3 className={styles.teamName}>Ananya Gupta</h3>
              <p className={styles.teamRole}>Chief Marketing Officer</p>
              <p className={styles.teamBio}>
                Ananya crafts our brand strategy and marketing initiatives, helping us connect with travelers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Awards & Recognition</h2>
          <p className={styles.sectionSubtitle}>
            Our commitment to excellence has been recognized by industry leaders and organizations.
          </p>
          
          <div className={styles.awards}>
            <div className={styles.award}>
              <div className={styles.awardIcon}>
                <Award size={48} />
              </div>
              <h3 className={styles.awardTitle}>Best Travel Website</h3>
              <p className={styles.awardYear}>World Travel Awards, 2023</p>
            </div>
            
            <div className={styles.award}>
              <div className={styles.awardIcon}>
                <Award size={48} />
              </div>
              <h3 className={styles.awardTitle}>Most Innovative Travel App</h3>
              <p className={styles.awardYear}>Mobile App Awards, 2022</p>
            </div>
            
            <div className={styles.award}>
              <div className={styles.awardIcon}>
                <Award size={48} />
              </div>
              <h3 className={styles.awardTitle}>Customer Service Excellence</h3>
              <p className={styles.awardYear}>Customer Experience Awards, 2021</p>
            </div>
            
            <div className={styles.award}>
              <div className={styles.awardIcon}>
                <Award size={48} />
              </div>
              <h3 className={styles.awardTitle}>Best Use of Technology</h3>
              <p className={styles.awardYear}>Travel Tech Awards, 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionSubtitle}>
            Don't just take our word for it - hear from some of our satisfied customers.
          </p>
          
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>
                "The best travel booking experience I've ever had. The interface is intuitive, and the customer service is exceptional. I saved both time and money!"
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
            
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>
                "I've been using this platform for all my family vacations for the past 5 years. The deals are unbeatable, and the booking process is seamless."
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
            
            <div className={styles.testimonial}>
              <p className={styles.testimonialText}>
                "As a solo traveler, safety and convenience are my priorities. This platform has never disappointed me. Their 24/7 support has saved me multiple times!"
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

      {/* Partners Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Partners</h2>
          <p className={styles.sectionSubtitle}>
            We collaborate with the best in the industry to provide you with exceptional travel experiences.
          </p>
          
          <div className={styles.partners}>
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

      {/* CSR Section */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Commitment to Sustainability</h2>
          <p className={styles.sectionSubtitle}>
            We believe in responsible travel and are committed to minimizing our environmental impact.
          </p>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <img 
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Carbon Offset" 
                className={styles.cardImage} 
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Carbon Offset Program</h3>
                <p className={styles.cardText}>
                  We partner with environmental organizations to offset the carbon footprint of your travels, making your journeys more sustainable.
                </p>
              </div>
            </div>
            
            <div className={styles.card}>
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Eco-friendly Hotels" 
                className={styles.cardImage} 
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Eco-friendly Accommodations</h3>
                <p className={styles.cardText}>
                  We highlight and promote eco-friendly hotels and resorts that are committed to sustainable practices.
                </p>
              </div>
            </div>
            
            <div className={styles.card}>
              <img 
                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Community Support" 
                className={styles.cardImage} 
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Community Tourism</h3>
                <p className={styles.cardText}>
                  We support local communities by promoting authentic experiences that benefit local economies and preserve cultural heritage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Join Our Team</h2>
          <p className={styles.sectionSubtitle}>
            We're always looking for passionate individuals to join our mission of transforming the travel industry.
          </p>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.valueIcon}>
                  <Briefcase size={48} />
                </div>
                <h3 className={styles.cardTitle}>Technology</h3>
                <p className={styles.cardText}>
                  Join our tech team to build innovative solutions that power the future of travel.
                </p>
              </div>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.valueIcon}>
                  <Users size={48} />
                </div>
                <h3 className={styles.cardTitle}>Customer Experience</h3>
                <p className={styles.cardText}>
                  Help us deliver exceptional service and support to travelers around the world.
                </p>
              </div>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.valueIcon}>
                  <Globe size={48} />
                </div>
                <h3 className={styles.cardTitle}>Marketing</h3>
                <p className={styles.cardText}>
                  Create compelling campaigns that inspire people to explore the world with us.
                </p>
              </div>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.valueIcon}>
                  <Clock size={48} />
                </div>
                <h3 className={styles.cardTitle}>Operations</h3>
                <p className={styles.cardText}>
                  Ensure smooth functioning of our platform and services for millions of travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to Explore the World?</h2>
          <p className={styles.ctaText}>
            Join millions of travelers who trust us for their travel needs. Start planning your next adventure today!
          </p>
          <div>
            <a href="#" className={styles.button}>Book Now</a>
            <a href="#" className={`${styles.button} ${styles.buttonOutline}`} style={{ marginLeft: '15px' }}>Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;