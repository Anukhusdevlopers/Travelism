import React, { useState } from 'react';
import { Plane, Hotel, Car, Train, Search } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    const [activeTab, setActiveTab] = useState('flights');

    return (
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Discover the World with TravelEase</h1>
          <p className={styles.heroSubtitle}>
            Find the best deals on flights, hotels, trains, and car rentals
          </p>
        </div>
  
        <div className={styles.searchContainer}>
          <div className={styles.tabsContainer}>
            <div 
              className={`${styles.tab} ${activeTab === 'flights' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('flights')}
            >
              <Plane size={18} />
              <span>Flights</span>
            </div>
            <div 
              className={`${styles.tab} ${activeTab === 'hotels' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('hotels')}
            >
              <Hotel size={18} />
              <span>Hotels</span>
            </div>
            <div 
              className={`${styles.tab} ${activeTab === 'trains' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('trains')}
            >
              <Train size={18} />
              <span>Trains</span>
            </div>
            <div 
              className={`${styles.tab} ${activeTab === 'cars' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('cars')}
            >
              <Car size={18} />
              <span>Cars</span>
            </div>
          </div>
  
          <form className={styles.searchForm}>
            {activeTab === 'flights' && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>From</label>
                  <input 
                    type="text" 
                    placeholder="City or Airport" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>To</label>
                  <input 
                    type="text" 
                    placeholder="City or Airport" 
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
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Return</label>
                  <input 
                    type="date" 
                    className={styles.formInput} 
                  />
                </div>
              </>
            )}
  
            {activeTab === 'hotels' && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Destination</label>
                  <input 
                    type="text" 
                    placeholder="City or Hotel" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Check-in</label>
                  <input 
                    type="date" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Check-out</label>
                  <input 
                    type="date" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Guests</label>
                  <input 
                    type="number" 
                    min="1"
                    defaultValue="2"
                    className={styles.formInput} 
                  />
                </div>
              </>
            )}
  
            {activeTab === 'trains' && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>From</label>
                  <input 
                    type="text" 
                    placeholder="City or Station" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>To</label>
                  <input 
                    type="text" 
                    placeholder="City or Station" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Date</label>
                  <input 
                    type="date" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Class</label>
                  <select className={styles.formInput}>
                    <option>All Classes</option>
                    <option>Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </>
            )}
  
            {activeTab === 'cars' && (
              <>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Pickup Location</label>
                  <input 
                    type="text" 
                    placeholder="City or Airport" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Pickup Date</label>
                  <input 
                    type="date" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Return Date</label>
                  <input 
                    type="date" 
                    className={styles.formInput} 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Car Type</label>
                  <select className={styles.formInput}>
                    <option>All Types</option>
                    <option>Economy</option>
                    <option>SUV</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </>
            )}
  
            <button type="submit" className={styles.searchButton}>
              <Search size={18} />
              <span>Search</span>
            </button>
          </form>
        </div>
      </section>
    );
}

export default Hero;