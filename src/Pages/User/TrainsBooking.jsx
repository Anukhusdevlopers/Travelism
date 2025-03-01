import React, { useState, useEffect } from 'react';
import { Search, Calendar, Users, MapPin, ArrowRight, Clock, Train as TrainIcon, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import './TrainBooking.css';

const TrainsBooking = () => {
    const [isVisible, setIsVisible] = useState({
        hero: false,
        search: false,
        routes: false,
        features: false,
        faq: false
      });
    
      const [activeTab, setActiveTab] = useState('oneway');
      const [activeFaq, setActiveFaq] = useState(null);
      const [showFilters, setShowFilters] = useState(false);
      const [priceRange, setPriceRange] = useState([20, 200]);
      const [departureTime, setDepartureTime] = useState([]);
    
      useEffect(() => {
        setIsVisible({
          hero: true,
          search: true,
          routes: true,
          features: true,
          faq: true
        });
      }, []);
    
      const toggleFaq = (index) => {
        if (activeFaq === index) {
          setActiveFaq(null);
        } else {
          setActiveFaq(index);
        }
      };
    
      const handleTimeFilter = (time) => {
        if (departureTime.includes(time)) {
          setDepartureTime(departureTime.filter(t => t !== time));
        } else {
          setDepartureTime([...departureTime, time]);
        }
      };
    
      const trainRoutes = [
        {
          id: 1,
          from: "New York",
          to: "Washington DC",
          departure: "08:30 AM",
          arrival: "11:45 AM",
          duration: "3h 15m",
          price: 65,
          train: "Acela Express",
          timeCategory: "morning"
        },
        {
          id: 2,
          from: "Boston",
          to: "New York",
          departure: "10:15 AM",
          arrival: "01:45 PM",
          duration: "3h 30m",
          price: 55,
          train: "Northeast Regional",
          timeCategory: "morning"
        },
        {
          id: 3,
          from: "Chicago",
          to: "St. Louis",
          departure: "02:30 PM",
          arrival: "08:15 PM",
          duration: "5h 45m",
          price: 85,
          train: "Lincoln Service",
          timeCategory: "afternoon"
        },
        {
          id: 4,
          from: "Seattle",
          to: "Portland",
          departure: "07:45 PM",
          arrival: "11:30 PM",
          duration: "3h 45m",
          price: 45,
          train: "Cascades",
          timeCategory: "evening"
        },
        {
          id: 5,
          from: "Los Angeles",
          to: "San Francisco",
          departure: "09:00 AM",
          arrival: "06:30 PM",
          duration: "9h 30m",
          price: 120,
          train: "Coast Starlight",
          timeCategory: "morning"
        },
        {
          id: 6,
          from: "Miami",
          to: "Orlando",
          departure: "04:15 PM",
          arrival: "09:45 PM",
          duration: "5h 30m",
          price: 75,
          train: "Silver Star",
          timeCategory: "afternoon"
        }
      ];
    
      const filteredRoutes = trainRoutes.filter(route => {
        const priceMatch = route.price >= priceRange[0] && route.price <= priceRange[1];
        const timeMatch = departureTime.length === 0 || departureTime.includes(route.timeCategory);
        return priceMatch && timeMatch;
      });
    
      const faqs = [
        {
          question: "How early should I arrive at the train station?",
          answer: "We recommend arriving at least 30 minutes before your scheduled departure time. For international trains or during peak travel seasons, consider arriving 45-60 minutes early to allow time for any security checks and boarding procedures."
        },
        {
          question: "Can I cancel or change my train ticket?",
          answer: "Yes, most train tickets can be changed or canceled. Refund policies vary depending on the fare type and how far in advance you make the change. Flexible tickets typically allow changes with minimal or no fees, while discounted tickets may have more restrictions."
        },
        {
          question: "Is there Wi-Fi available on trains?",
          answer: "Many modern trains offer Wi-Fi service, though availability and quality may vary by route and train operator. High-speed and intercity trains are more likely to have Wi-Fi. Some services offer it complimentary, while others may charge a fee."
        },
        {
          question: "How much luggage can I bring on the train?",
          answer: "Most train services allow passengers to bring 2-3 pieces of luggage at no additional cost. Typically, this includes one or two large items (suitcases) and one small personal item. Size and weight restrictions vary by operator, so it's best to check specific guidelines before travel."
        },
        {
          question: "Are meals available on the train?",
          answer: "Long-distance trains often have dining cars or café services where you can purchase food and beverages. Some premium or overnight services include meals in the ticket price. Regional and commuter trains typically don't offer meal service, so you may want to bring your own snacks."
        }
      ];
    
      return (
        <div className="train-page">
          {/* Hero Section */}
          <section className={`train-hero ${isVisible.hero ? 'visible' : ''}`}>
            <div className="train-hero-content">
              <h1>Travel by Rail</h1>
              <p>Discover scenic routes and comfortable journeys across the country</p>
            </div>
          </section>
    
          {/* Search Section */}
          <section className={`train-search-section ${isVisible.search ? 'visible' : ''}`}>
            <div className="search-container">
              <div className="search-tabs">
                <button 
                  className={activeTab === 'oneway' ? 'active' : ''} 
                  onClick={() => setActiveTab('oneway')}
                >
                  One Way
                </button>
                <button 
                  className={activeTab === 'roundtrip' ? 'active' : ''} 
                  onClick={() => setActiveTab('roundtrip')}
                >
                  Round Trip
                </button>
                <button 
                  className={activeTab === 'multiCity' ? 'active' : ''} 
                  onClick={() => setActiveTab('multiCity')}
                >
                  Multi-City
                </button>
              </div>
    
              <div className="search-form">
                <div className="search-row">
                  <div className="search-input">
                    <MapPin size={20} />
                    <input type="text" placeholder="From" />
                  </div>
                  <div className="search-input-switch">
                    <ArrowRight size={20} />
                  </div>
                  <div className="search-input">
                    <MapPin size={20} />
                    <input type="text" placeholder="To" />
                  </div>
                </div>
                <div className="search-row">
                  <div className="search-input">
                    <Calendar size={20} />
                    <input type="text" placeholder="Departure Date" />
                  </div>
                  {activeTab === 'roundtrip' && (
                    <div className="search-input">
                      <Calendar size={20} />
                      <input type="text" placeholder="Return Date" />
                    </div>
                  )}
                  <div className="search-input">
                    <Users size={20} />
                    <input type="text" placeholder="2 Passengers" />
                  </div>
                  <button className="search-btn">
                    <Search size={20} />
                    Search Trains
                  </button>
                </div>
              </div>
            </div>
          </section>
    
          {/* Popular Routes Section */}
          <section className={`train-routes-section ${isVisible.routes ? 'visible' : ''}`}>
            <div className="section-header">
              <h2>Popular Train Routes</h2>
              <div className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                <Filter size={20} />
                <span>Filters</span>
                {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </div>
    
            {showFilters && (
              <div className="filter-container">
                <div className="price-filter">
                  <h4>Price Range</h4>
                  <span>${priceRange[0]} - ${priceRange[1]}</span>
                  <div className="range-inputs">
                    <input 
                      type="range" 
                      min="20" 
                      max="200" 
                      value={priceRange[0]} 
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    />
                    <input 
                      type="range" 
                      min="20" 
                      max="200" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
                <div className="time-filter">
                  <h4>Departure Time</h4>
                  <div className="time-options">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={departureTime.includes('morning')} 
                        onChange={() => handleTimeFilter('morning')} 
                      />
                      Morning (6AM - 12PM)
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={departureTime.includes('afternoon')} 
                        onChange={() => handleTimeFilter('afternoon')} 
                      />
                      Afternoon (12PM - 6PM)
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={departureTime.includes('evening')} 
                        onChange={() => handleTimeFilter('evening')} 
                      />
                      Evening (After 6PM)
                    </label>
                  </div>
                </div>
              </div>
            )}
    
            <div className="routes-container">
              {filteredRoutes.map(route => (
                <div className="route-card" key={route.id}>
                  <div className="route-header">
                    <div className="route-train">
                      <TrainIcon size={20} />
                      <span>{route.train}</span>
                    </div>
                    <div className="route-price">${route.price}</div>
                  </div>
                  <div className="route-details">
                    <div className="route-stations">
                      <div className="route-from">
                        <div className="time">{route.departure}</div>
                        <div className="station">{route.from}</div>
                      </div>
                      <div className="route-duration">
                        <div className="duration-line"></div>
                        <div className="duration-time">
                          <Clock size={16} />
                          {route.duration}
                        </div>
                      </div>
                      <div className="route-to">
                        <div className="time">{route.arrival}</div>
                        <div className="station">{route.to}</div>
                      </div>
                    </div>
                  </div>
                  <button className="book-route-btn">Select</button>
                </div>
              ))}
            </div>
          </section>
    
          {/* Features Section */}
          <section className={`train-features-section ${isVisible.features ? 'visible' : ''}`}>
            <h2>Why Travel by Train</h2>
            <div className="features-container">
              <div className="feature-card">
                <div className="feature-icon eco"></div>
                <h3>Eco-Friendly</h3>
                <p>Trains produce significantly less carbon emissions compared to cars and planes, making them a greener choice for travel.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon comfort"></div>
                <h3>Comfort & Space</h3>
                <p>Enjoy spacious seating, the freedom to move around, and scenic views that you can't get from other modes of transportation.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon city"></div>
                <h3>City Center Access</h3>
                <p>Most train stations are located in city centers, saving you time and money on additional transportation.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon productive"></div>
                <h3>Stay Productive</h3>
                <p>With tables, power outlets, and often Wi-Fi, trains provide an excellent environment for working or relaxing during your journey.</p>
              </div>
            </div>
          </section>
    
       
    
         
        </div>
      );
}

export default TrainsBooking