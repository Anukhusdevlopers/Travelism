import React, { useState } from 'react'
import { MapPin, Calendar, Users, Search, Star, Wifi, Coffee, Tv, Utensils, ParkingMeter as Parking, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import './HotelBooking.css';

const HotelBooking = () => {
    const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = (filter) => {
    if (activeFilter === filter) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filter);
    }
  };

    const hotels = [
        {
          id: 1,
          name: "Grand Luxury Resort & Spa",
          location: "Bali, Indonesia",
          price: 299,
          rating: 4.8,
          reviews: 1243,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Fitness Center"]
        },
        {
          id: 2,
          name: "Oceanview Boutique Hotel",
          location: "Santorini, Greece",
          price: 349,
          rating: 4.9,
          reviews: 876,
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
          amenities: ["Free WiFi", "Infinity Pool", "Breakfast", "Bar", "Terrace"]
        },
        {
          id: 3,
          name: "Urban Chic Hotel",
          location: "New York, USA",
          price: 259,
          rating: 4.6,
          reviews: 1542,
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
          amenities: ["Free WiFi", "Restaurant", "Bar", "Fitness Center", "Business Center"]
        },
        {
          id: 4,
          name: "Mountain View Lodge",
          location: "Swiss Alps, Switzerland",
          price: 329,
          rating: 4.7,
          reviews: 932,
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          amenities: ["Free WiFi", "Ski Access", "Spa", "Restaurant", "Fireplace"]
        },
        {
          id: 5,
          name: "Tropical Paradise Resort",
          location: "Maldives",
          price: 499,
          rating: 4.9,
          reviews: 754,
          image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
          amenities: ["Free WiFi", "Private Beach", "Water Sports", "Spa", "Multiple Restaurants"]
        },
        {
          id: 6,
          name: "Historic City Hotel",
          location: "Prague, Czech Republic",
          price: 219,
          rating: 4.5,
          reviews: 1087,
          image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
          amenities: ["Free WiFi", "Breakfast", "Bar", "Airport Shuttle", "City Tours"]
        }
      ];
    
      const popularDestinations = [
        { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" },
        { name: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80" },
        { name: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&q=80" },
        { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80" },
      ];
    
      return (
        <div className="hotel-booking-page">
          <section className="hotel-hero-section">
            <div className="hotel-hero-content">
              <h1   
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Find Your Perfect Stay
              </h1>
              <p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Discover amazing hotels, apartments, and unique homes
              </p>


              {/* <section className={`hotel-search-section ${isVisible.search ? 'visible' : ''}`}> */}
        <div className="search-container">
          <h2>Search for Hotels</h2>
          <div className="search-form">
            <div className="search-input">
              <MapPin size={20} />
              <input type="text" placeholder="Where are you going?" />
            </div>
            <div className="search-input">
              <Calendar size={20} />
              <input type="text" placeholder="Check-in - Check-out" />
            </div>
            <div className="search-input">
              <Users size={20} />
              <input type="text" placeholder="2 Adults, 0 Children" />
            </div>
            <button className="search-btn">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      {/* </section> */}
              {/* <div
                className="hotel-search-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="hotel-search-form">
                  <div className="form-group">
                    <label><MapPin size={16} /> Destination</label>
                    <input type="text" placeholder="Where are you going?" />
                  </div>
                  <div className="form-group">
                    <label><Calendar size={16} /> Check-in</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label><Calendar size={16} /> Check-out</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label><Users size={16} /> Guests</label>
                    <select>
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                    </select>
                  </div>
                  <button className="search-btn"><Search size={18} /> Search Hotels</button>
                </div>
              </div> */}
            </div>
          </section>
    
          <section className="popular-destinations-section">
            <div className="section-header">
              <h2>Popular Destinations</h2>
              <p>Trending cities with top-rated accommodations</p>
            </div>
            <div className="destinations-slider">
              {popularDestinations.map((destination, index) => (
                <div 
                  className="destination-slide"
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="destination-image">
                    <img src={destination.image} alt={destination.name} />
                  </div>
                  <h3>{destination.name}</h3>
                  <p>Explore hotels</p>
                </div>
              ))}
            </div>
          </section>
    
          <section className="hotel-listings-section">
            <div className="section-header">
              <h2>Featured Hotels & Resorts</h2>
              <p>Handpicked accommodations for your comfort</p>
            </div>
            
            <div className="hotel-filters">
              <div className="filter-button">
                <button onClick={() => toggleFilter('price')}>
                  <SlidersHorizontal size={16} /> Price Range <ChevronDown size={16} />
                </button>
                {activeFilter === 'price' && (
                  <div className="filter-dropdown">
                    <input type="range" min="0" max="1000" step="50" />
                    <div className="price-range-labels">
                      <span>$0</span>
                      <span>$1000+</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="filter-button">
                <button onClick={() => toggleFilter('rating')}>
                  <Star size={16} /> Star Rating <ChevronDown size={16} />
                </button>
                {activeFilter === 'rating' && (
                  <div className="filter-dropdown">
                    <label><input type="checkbox" /> 5 Stars</label>
                    <label><input type="checkbox" /> 4 Stars</label>
                    <label><input type="checkbox" /> 3 Stars</label>
                    <label><input type="checkbox" /> 2 Stars</label>
                  </div>
                )}
              </div>
              
              <div className="filter-button">
                <button onClick={() => toggleFilter('amenities')}>
                  <Filter size={16} /> Amenities <ChevronDown size={16} />
                </button>
                {activeFilter === 'amenities' && (
                  <div className="filter-dropdown">
                    <label><input type="checkbox" /> Free WiFi</label>
                    <label><input type="checkbox" /> Swimming Pool</label>
                    <label><input type="checkbox" /> Spa</label>
                    <label><input type="checkbox" /> Restaurant</label>
                    <label><input type="checkbox" /> Fitness Center</label>
                  </div>
                )}
              </div>
              
              <button className="apply-filters-btn">Apply Filters</button>
            </div>
            
            <div className="hotel-grid">
              {hotels.map((hotel, index) => (
                <div 
                  className="hotel-card"
                  key={hotel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="hotel-image">
                    <img src={hotel.image} alt={hotel.name} />
                    <div className="hotel-rating">
                      <Star size={16} fill="#FFD700" stroke="#FFD700" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="hotel-info">
                    <h3>{hotel.name}</h3>
                    <p className="hotel-location"><MapPin size={14} /> {hotel.location}</p>
                    <div className="hotel-amenities">
                      {hotel.amenities.slice(0, 3).map((amenity, i) => (
                        <span key={i}>
                          {amenity.includes('WiFi') && <Wifi size={14} />}
                          {amenity.includes('Breakfast') && <Coffee size={14} />}
                          {amenity.includes('Restaurant') && <Utensils size={14} />}
                          {amenity.includes('TV') && <Tv size={14} />}
                          {amenity.includes('Parking') && <Parking size={14} />}
                          {!['WiFi', 'Breakfast', 'Restaurant', 'TV', 'Parking'].some(a => amenity.includes(a)) && amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 3 && <span>+{hotel.amenities.length - 3} more</span>}
                    </div>
                    <div className="hotel-price-reviews">
                      <div className="hotel-price">
                        <span className="price">${hotel.price}</span>
                        <span className="per-night">per night</span>
                      </div>
                      <div className="hotel-reviews">
                        <span>{hotel.reviews} reviews</span>
                      </div>
                    </div>
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="load-more">
              <button>Load More Hotels</button>
            </div>
          </section>
    
          <section className="hotel-deals-section">
            <div className="section-header">
              <h2>Special Deals & Offers</h2>
              <p>Limited-time discounts on top properties</p>
            </div>
            <div className="deals-container">
              <div 
                className="deal-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="deal-content">
                  <div className="deal-tag">Limited Offer</div>
                  <h3>Weekend Escape</h3>
                  <p>Get 25% off on weekend stays at select luxury hotels</p>
                  <button>View Offer</button>
                </div>
                <div className="deal-image">
                  <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80" alt="Weekend Escape" />
                </div>
              </div>
              
              <div 
                className="deal-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="deal-content">
                  <div className="deal-tag">Members Only</div>
                  <h3>Stay Longer, Save More</h3>
                  <p>Book 5+ nights and receive up to 30% discount</p>
                  <button>View Offer</button>
                </div>
                <div className="deal-image">
                  <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80" alt="Stay Longer" />
                </div>
              </div>
            </div>
          </section>
    
          <section className="why-book-section">
            <div className="section-header">
              <h2>Why Book With Us</h2>
              <p>Benefits that make us the preferred choice for travelers</p>
            </div>
            <div className="benefits-grid">
              {[
                { title: "Best Price Guarantee", description: "Find a lower price? We'll match it and give you an additional 10% off." },
                { title: "Free Cancellation", description: "Plans change. Most bookings can be cancelled without any penalty." },
                { title: "24/7 Customer Support", description: "Our support team is available around the clock to assist you." },
                { title: "Verified Reviews", description: "Real reviews from real guests who have stayed at our properties." }
              ].map((benefit, index) => (
                <div 
                  className="benefit-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
}

export default HotelBooking