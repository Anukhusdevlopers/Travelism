import React, { useState } from 'react';
import { 
  Plane, 
  ArrowRight, 
  Calendar, 
  Users, 
  Search, 
  Filter, 
  Clock, 
  Briefcase, 
  CreditCard, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowUpDown,
  Zap,
  Wallet,
  Award
} from 'lucide-react';
import styles from './Flight.module.css';

const FlightBooking = () => {
  const [activeNav, setActiveNav] = useState('flights');
  const [tripType, setTripType] = useState('roundtrip');
  const [activeFilter, setActiveFilter] = useState('cheapest');
  const [activePage, setActivePage] = useState(1);

  const flights = [
    {
      id: 1,
      airline: 'IndiGo',
      logo: 'https://images.unsplash.com/photo-1630512996334-b5c2c4e7b2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
      flightNumber: '6E 2431',
      departureTime: '06:20',
      departureAirport: 'DEL',
      arrivalTime: '08:40',
      arrivalAirport: 'BOM',
      duration: '2h 20m',
      type: 'Non-stop',
      price: '₹3,249',
      offer: 'INSTANT ₹500 OFF'
    },
    {
      id: 2,
      airline: 'Air India',
      logo: 'https://images.unsplash.com/photo-1630512996334-b5c2c4e7b2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
      flightNumber: 'AI 887',
      departureTime: '08:00',
      departureAirport: 'DEL',
      arrivalTime: '10:15',
      arrivalAirport: 'BOM',
      duration: '2h 15m',
      type: 'Non-stop',
      price: '₹4,120',
      offer: null
    },
    {
      id: 3,
      airline: 'Vistara',
      logo: 'https://images.unsplash.com/photo-1630512996334-b5c2c4e7b2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
      flightNumber: 'UK 995',
      departureTime: '10:30',
      departureAirport: 'DEL',
      arrivalTime: '12:45',
      arrivalAirport: 'BOM',
      duration: '2h 15m',
      type: 'Non-stop',
      price: '₹4,599',
      offer: 'BUSINESS UPGRADE'
    },
    {
      id: 4,
      airline: 'SpiceJet',
      logo: 'https://images.unsplash.com/photo-1630512996334-b5c2c4e7b2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
      flightNumber: 'SG 8169',
      departureTime: '13:20',
      departureAirport: 'DEL',
      arrivalTime: '15:35',
      arrivalAirport: 'BOM',
      duration: '2h 15m',
      type: 'Non-stop',
      price: '₹3,599',
      offer: null
    },
    {
      id: 5,
      airline: 'IndiGo',
      logo: 'https://images.unsplash.com/photo-1630512996334-b5c2c4e7b2b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80',
      flightNumber: '6E 6206',
      departureTime: '16:45',
      departureAirport: 'DEL',
      arrivalTime: '19:00',
      arrivalAirport: 'BOM',
      duration: '2h 15m',
      type: 'Non-stop',
      price: '₹3,849',
      offer: 'INSTANT ₹500 OFF'
    }
  ];

  const destinations = [
    {
      id: 1,
      name: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹3,249'
    },
    {
      id: 2,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹4,599'
    },
    {
      id: 3,
      name: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹3,899'
    },
    {
      id: 4,
      name: 'Kolkata',
      image: 'https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      price: '₹5,249'
    }
  ];

  return (
    <div className={styles.flightPage}>

      <div className={styles.banner}>
        <img 
          src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Flight Booking" 
          className={styles.bannerImage} 
        />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Book Flights & Save Big</h1>
          <p className={styles.bannerSubtitle}>
            Discover amazing deals on domestic and international flights. 
            Book now and enjoy special discounts, flexible booking options, and a seamless travel experience.
          </p>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.tripTypeContainer}>
          <div className={styles.tripTypeOption}>
            <input 
              type="radio" 
              id="roundtrip" 
              name="tripType" 
              className={styles.radioInput} 
              checked={tripType === 'roundtrip'} 
              onChange={() => setTripType('roundtrip')} 
            />
            <label htmlFor="roundtrip" className={styles.radioLabel}>Round Trip</label>
          </div>
          <div className={styles.tripTypeOption}>
            <input 
              type="radio" 
              id="oneway" 
              name="tripType" 
              className={styles.radioInput} 
              checked={tripType === 'oneway'} 
              onChange={() => setTripType('oneway')} 
            />
            <label htmlFor="oneway" className={styles.radioLabel}>One Way</label>
          </div>
          <div className={styles.tripTypeOption}>
            <input 
              type="radio" 
              id="multicity" 
              name="tripType" 
              className={styles.radioInput} 
              checked={tripType === 'multicity'} 
              onChange={() => setTripType('multicity')} 
            />
            <label htmlFor="multicity" className={styles.radioLabel}>Multi City</label>
          </div>
        </div>
        <div className={styles.searchForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>From</label>
            <input 
              type="text" 
              placeholder="Delhi (DEL)" 
              className={styles.formInput} 
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>To</label>
            <input 
              type="text" 
              placeholder="Mumbai (BOM)" 
              className={styles.formInput} 
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Departure</label>
            <input 
              type="date" 
              className={styles.formInput} 
            />
          </div>
          {tripType === 'roundtrip' && (
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Return</label>
              <input 
                type="date" 
                className={styles.formInput} 
              />
            </div>
          )}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Travelers & Class</label>
            <select className={styles.formSelect}>
              <option value="1-economy">1 Adult, Economy</option>
              <option value="2-economy">2 Adults, Economy</option>
              <option value="1-business">1 Adult, Business</option>
              <option value="2-business">2 Adults, Business</option>
            </select>
          </div>
          <button className={styles.searchButton}>
            <Search size={18} />
            Search Flights
          </button>
        </div>
      </div>

      <div className={styles.flightFilters}>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'cheapest' ? styles.active : ''}`}
          onClick={() => setActiveFilter('cheapest')}
        >
          <Wallet size={16} />
          Cheapest
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'fastest' ? styles.active : ''}`}
          onClick={() => setActiveFilter('fastest')}
        >
          <Zap size={16} />
          Fastest
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'early' ? styles.active : ''}`}
          onClick={() => setActiveFilter('early')}
        >
          <Clock size={16} />
          Early Departure
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'late' ? styles.active : ''}`}
          onClick={() => setActiveFilter('late')}
        >
          <Clock size={16} />
          Late Departure
        </button>
        <button 
          className={`${styles.filterButton} ${activeFilter === 'best' ? styles.active : ''}`}
          onClick={() => setActiveFilter('best')}
        >
          <Award size={16} />
          Best Value
        </button>
        <button className={styles.filterButton}>
          <Filter size={16} />
          More Filters
        </button>
      </div>

      <h2 className={styles.sectionTitle}>Delhi to Mumbai Flights</h2>
      <p className={styles.sectionSubtitle}>
        Showing {flights.length} flights on {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
      
      <div className={styles.flightResults}>
        {flights.map(flight => (
          <div key={flight.id} className={styles.flightCard}>
            <div className={styles.airlineInfo}>
              <img 
                src={flight.logo} 
                alt={flight.airline} 
                className={styles.airlineLogo} 
              />
              <div className={styles.airlineName}>{flight.airline}</div>
              <div className={styles.flightNumber}>{flight.flightNumber}</div>
            </div>
            <div className={styles.flightDetails}>
              <div className={styles.flightTime}>
                <div className={styles.time}>{flight.departureTime}</div>
                <div className={styles.airport}>{flight.departureAirport}</div>
              </div>
              <div className={styles.flightDuration}>
                <div className={styles.durationLine}></div>
                <div className={styles.duration}>{flight.duration}</div>
                <div className={styles.flightType}>{flight.type}</div>
              </div>
              <div className={styles.flightTime}>
                <div className={styles.time}>{flight.arrivalTime}</div>
                <div className={styles.airport}>{flight.arrivalAirport}</div>
              </div>
            </div>
            <div className={styles.priceSection}>
              {flight.offer && <div className={styles.offerTag}>{flight.offer}</div>}
              <div className={styles.price}>{flight.price}</div>
              <button className={styles.bookButton}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button 
          className={`${styles.pageButton} ${activePage === 1 ? styles.active : ''}`}
          onClick={() => setActivePage(1)}
        >
          1
        </button>
        <button 
          className={`${styles.pageButton} ${activePage === 2 ? styles.active : ''}`}
          onClick={() => setActivePage(2)}
        >
          2
        </button>
        <button 
          className={`${styles.pageButton} ${activePage === 3 ? styles.active : ''}`}
          onClick={() => setActivePage(3)}
        >
          3
        </button>
        <button className={styles.pageButton}>...</button>
        <button 
          className={`${styles.pageButton} ${activePage === 10 ? styles.active : ''}`}
          onClick={() => setActivePage(10)}
        >
          10
        </button>
      </div>

      <section className={styles.popularDestinations}>
        <h2 className={styles.sectionTitle}>Popular Destinations from Delhi</h2>
        <p className={styles.sectionSubtitle}>
          Explore these trending destinations with the best flight deals available now.
        </p>
        
        <div className={styles.destinationGrid}>
          {destinations.map(destination => (
            <div key={destination.id} className={styles.destinationCard}>
              <img 
                src={destination.image} 
                alt={destination.name} 
                className={styles.destinationImage} 
              />
              <div className={styles.destinationOverlay}>
                <div className={styles.destinationName}>{destination.name}</div>
                <div className={styles.destinationPrice}>
                  Starting from <span className={styles.priceHighlight}>{destination.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FlightBooking;