import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, Car as CarIcon, Filter, ChevronDown, ChevronUp, Check, Info } from 'lucide-react';
import './CarBooking.css';

const CarBooking = () => {
    const [isVisible, setIsVisible] = useState({
        hero: false,
        search: false,
        cars: false,
        benefits: false,
        howItWorks: false
      });
    
      const [activeTab, setActiveTab] = useState('pickup');
      const [showFilters, setShowFilters] = useState(false);
      const [priceRange, setPriceRange] = useState([30, 200]);
      const [carTypes, setCarTypes] = useState([]);
      const [features, setFeatures] = useState([]);
    
      useEffect(() => {
        setIsVisible({
          hero: true,
          search: true,
          cars: true,
          benefits: true,
          howItWorks: true
        });
      }, []);
    
      const handleCarTypeFilter = (type) => {
        if (carTypes.includes(type)) {
          setCarTypes(carTypes.filter(t => t !== type));
        } else {
          setCarTypes([...carTypes, type]);
        }
      };
    
      const handleFeatureFilter = (feature) => {
        if (features.includes(feature)) {
          setFeatures(features.filter(f => f !== feature));
        } else {
          setFeatures([...features, feature]);
        }
      };
    
      const cars = [
        {
          id: 1,
          name: "Toyota Corolla",
          type: "economy",
          price: 45,
          seats: 5,
          transmission: "Automatic",
          fuelPolicy: "Full to Full",
          mileage: "Unlimited",
          features: ["air_conditioning", "bluetooth"],
          image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          name: "Honda Civic",
          type: "economy",
          price: 48,
          seats: 5,
          transmission: "Automatic",
          fuelPolicy: "Full to Full",
          mileage: "Unlimited",
          features: ["air_conditioning", "bluetooth", "gps"],
          image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          name: "Ford Escape",
          type: "suv",
          price: 65,
          seats: 5,
          transmission: "Automatic",
          fuelPolicy: "Full to Full",
          mileage: "Unlimited",
          features: ["air_conditioning", "bluetooth", "gps", "cruise_control"],
          image: "https://images.unsplash.com/photo-1551830820-330a71b99659?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 4,
          name: "BMW 3 Series",
          type: "luxury",
          price: 120,
          seats: 5,
          transmission: "Automatic",
          fuelPolicy: "Full to Full",
          mileage: "Unlimited",
          features: ["air_conditioning", "bluetooth", "gps", "cruise_control", "leather_seats"],
          image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 5,
          name: "Chevrolet Suburban",
          type: "van",
          price: 95,
          seats: 7,
          transmission: "Automatic",
          fuelPolicy: "Full to Full",
          mileage: "Unlimited",
          features: ["air_conditioning", "bluetooth", "gps", "cruise_control", "third_row"],
          image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 6,
          name: "Mercedes-Benz E-Class",
          type: "luxury",
          price: 135,
          seats: 5,
          transmission: "Automatic",
          fuelPolicy: "Full to Full",
          mileage: "Unlimited",
          features: ["air_conditioning", "bluetooth", "gps", "cruise_control", "leather_seats", "sunroof"],
          image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ];
    
      const filteredCars = cars.filter(car => {
        const priceMatch = car.price >= priceRange[0] && car.price <= priceRange[1];
        const typeMatch = carTypes.length === 0 || carTypes.includes(car.type);
        const featureMatch = features.length === 0 || features.every(feature => car.features.includes(feature));
        return priceMatch && typeMatch && featureMatch;
      });
    
      const steps = [
        {
          title: "Choose Your Car",
          description: "Browse our extensive fleet and select the perfect vehicle for your needs and budget.",
          icon: "choose"
        },
        {
          title: "Book Online",
          description: "Complete your reservation in minutes with our simple booking process.",
          icon: "book"
        },
        {
          title: "Pick Up Your Car",
          description: "Show your confirmation, driver's license, and credit card at the rental counter.",
          icon: "pickup"
        },
        {
          title: "Enjoy Your Journey",
          description: "Hit the road with confidence, knowing you have 24/7 roadside assistance.",
          icon: "drive"
        }
      ];
    
      return (
        <div className="car-page">
          {/* Hero Section */}
          <section className={`car-hero ${isVisible.hero ? 'visible' : ''}`}>
            <div className="car-hero-content">
              <h1>Rent the Perfect Car</h1>
              <p>Freedom to explore at your own pace with our premium car rental service</p>
            </div>
          </section>
    
          {/* Search Section */}
          <section className={`car-search-section ${isVisible.search ? 'visible' : ''}`}>
            <div className="search-container">
              <div className="search-tabs">
                <button 
                  className={activeTab === 'pickup' ? 'active' : ''} 
                  onClick={() => setActiveTab('pickup')}
                >
                  Same Pick-up & Drop-off
                </button>
                <button 
                  className={activeTab === 'different' ? 'active' : ''} 
                  onClick={() => setActiveTab('different')}
                >
                  Different Drop-off
                </button>
              </div>
    
              <div className="search-form">
                <div className="search-row">
                  <div className="search-input">
                    <MapPin size={20} />
                    <input type="text" placeholder="Pick-up Location" />
                  </div>
                  {activeTab === 'different' && (
                    <div className="search-input">
                      <MapPin size={20} />
                      <input type="text" placeholder="Drop-off Location" />
                    </div>
                  )}
                </div>
                <div className="search-row">
                  <div className="search-input">
                    <Calendar size={20} />
                    <input type="text" placeholder="Pick-up Date & Time" />
                  </div>
                  <div className="search-input">
                    <Calendar size={20} />
                    <input type="text" placeholder="Drop-off Date & Time" />
                  </div>
                  <button className="search-btn">
                    <Search size={20} />
                    Search Cars
                  </button>
                </div>
              </div>
            </div>
          </section>
    
          {/* Available Cars Section */}
          <section className={`car-available-section ${isVisible.cars ? 'visible' : ''}`}>
            <div className="section-header">
              <h2>Available Cars</h2>
              <div className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
                <Filter size={20} />
                <span>Filters</span>
                {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </div>
    
            {showFilters && (
              <div className="filter-container">
                <div className="price-filter">
                  <h4>Daily Price Range</h4>
                  <span>${priceRange[0]} - ${priceRange[1]}</span>
                  <div className="range-inputs">
                    <input 
                      type="range" 
                      min="30" 
                      max="200" 
                      value={priceRange[0]} 
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    />
                    <input 
                      type="range" 
                      min="30" 
                      max="200" 
                      value={priceRange[1]} 
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
                <div className="car-type-filter">
                  <h4>Car Type</h4>
                  <div className="filter-options">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={carTypes.includes('economy')} 
                        onChange={() => handleCarTypeFilter('economy')} 
                      />
                      Economy
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={carTypes.includes('suv')} 
                        onChange={() => handleCarTypeFilter('suv')} 
                      />
                      SUV
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={carTypes.includes('luxury')} 
                        onChange={() => handleCarTypeFilter('luxury')} 
                      />
                      Luxury
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={carTypes.includes('van')} 
                        onChange={() => handleCarTypeFilter('van')} 
                      />
                      Van/Minivan
                    </label>
                  </div>
                </div>
                <div className="features-filter">
                  <h4>Features</h4>
                  <div className="filter-options">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={features.includes('air_conditioning')} 
                        onChange={() => handleFeatureFilter('air_conditioning')} 
                      />
                      Air Conditioning
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={features.includes('bluetooth')} 
                        onChange={() => handleFeatureFilter('bluetooth')} 
                      />
                      Bluetooth
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={features.includes('gps')} 
                        onChange={() => handleFeatureFilter('gps')} 
                      />
                      GPS Navigation
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={features.includes('cruise_control')} 
                        onChange={() => handleFeatureFilter('cruise_control')} 
                      />
                      Cruise Control
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={features.includes('leather_seats')} 
                        onChange={() => handleFeatureFilter('leather_seats')} 
                      />
                      Leather Seats
                    </label>
                  </div>
                </div>
              </div>
            )}
    
            <div className="cars-container">
              {filteredCars.map(car => (
                <div className="car-card" key={car.id}>
                  <div className="car-image">
                    <img src={car.image} alt={car.name} />
                    <div className="car-type">{car.type.charAt(0).toUpperCase() + car.type.slice(1)}</div>
                  </div>
                  <div className="car-details">
                    <h3>{car.name}</h3>
                    <div className="car-specs">
                      <div className="spec">
                        <span className="spec-label">Seats</span>
                        <span className="spec-value">{car.seats}</span>
                      </div>
                      <div className="spec">
                        <span className="spec-label">Transmission</span>
                        <span className="spec-value">{car.transmission}</span>
                      </div>
                      <div className="spec">
                        <span className="spec-label">Mileage</span>
                        <span className="spec-value">{car.mileage}</span>
                      </div>
                    </div>
                    <div className="car-features">
                      {car.features.includes('air_conditioning') && <span>A/C</span>}
                      {car.features.includes('bluetooth') && <span>Bluetooth</span>}
                      {car.features.includes('gps') && <span>GPS</span>}
                      {car.features.includes('cruise_control') && <span>Cruise</span>}
                      {car.features.includes('leather_seats') && <span>Leather</span>}
                    </div>
                  </div>
                  <div className="car-booking">
                    <div className="car-price">
                      <span className="price">${car.price}</span>
                      <span className="period">/day</span>
                    </div>
                    <button className="book-car-btn">Select</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
    
          {/* Benefits Section */}
          <section className={`car-benefits-section ${isVisible.benefits ? 'visible' : ''}`}>
            <h2>Why Choose Our Car Rental Service</h2>
            <div className="benefits-container">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Check size={24} />
                </div>
                <h3>No Hidden Fees</h3>
                <p>Transparent pricing with no surprise charges. What you see is what you pay.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Check size={24} />
                </div>
                <h3>Free Cancellation</h3>
                <p>Plans change? Cancel for free up to 48 hours before your pickup.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Check size={24} />
                </div>
                <h3>Clean & Safe Vehicles</h3>
                <p>All our cars are thoroughly sanitized and inspected before each rental.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <Check size={24} />
                </div>
                <h3>24/7 Customer Support</h3>
                <p>Our team is always available to assist you with any questions or issues.</p>
              </div>
            </div>
          </section>
    
          {/* How It Works Section */}
          <section className={`car-how-section ${isVisible.howItWorks ? 'visible' : ''}`}>
            <h2>How It Works</h2>
            <div className="steps-container">
              {steps.map((step, index) => (
                <div className="step-card" key={index}>
                  <div className={`step-icon ${step.icon}`}>
                    <span>{index + 1}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* Additional Info Section */}
          <section className="car-info-section">
            <div className="info-container">
              <div className="info-card">
                <div className="info-header">
                  <Info size={24} />
                  <h3>Rental Requirements</h3>
                </div>
                <ul className="info-list">
                  <li>Valid driver's license (held for at least 1 year)</li>
                  <li>Credit card in the main driver's name</li>
                  <li>Minimum age: 21 years (25 for luxury vehicles)</li>
                  <li>Passport or ID for international rentals</li>
                </ul>
              </div>
              <div className="info-card">
                <div className="info-header">
                  <Info size={24} />
                  <h3>Insurance Options</h3>
                </div>
                <ul className="info-list">
                  <li>Basic insurance included in all rentals</li>
                  <li>Full coverage available for additional peace of mind</li>
                  <li>Roadside assistance available 24/7</li>
                  <li>Personal effects coverage optional</li>
                </ul>
              </div>
            </div>
          </section>
    
          {/* Newsletter Section */}
         
        </div>
      );
}

export default CarBooking