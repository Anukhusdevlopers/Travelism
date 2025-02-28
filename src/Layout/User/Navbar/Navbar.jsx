import React, { useState } from 'react'
import { Plane, Hotel, Car, Train, MapPin, Menu, X, User, LogIn, Umbrella } from 'lucide-react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Plane className={styles.logoIcon} size={24} />
          <span><Link to={"/"}>Tour&Travel</Link></span>
        </div>
  
        <ul className={styles.navLinks}>

          <Link to={'/flight-booking'}>
          <li className={styles.navLink}>
            <Plane size={16} />
            <span>Flights</span>
          </li>
          </Link>
          <Link>
          <li className={styles.navLink}>
            <Hotel size={16} />
            <span>Hotels</span>
          </li>
          </Link>
          <Link>
          <li className={styles.navLink}>
            <Train size={16} />
            <span>Trains</span>
          </li>
          </Link>
          <Link>
          <li className={styles.navLink}>
            <Car size={16} />
            <span>Cars</span>
          </li>
          </Link>
          <Link to={'/holiday'}>
          <li className={styles.navLink}>
            <Umbrella size={16} />
            <span>Holiday Packages</span>
          </li>
          </Link>
          <Link to={'/destination'}>
          <li className={styles.navLink}>
            <MapPin size={16} />
            <span>Destinations</span>
          </li>
          </Link>
        </ul>
  
        <div className={styles.authButtons}>
          <button className={styles.loginButton}>
            <LogIn size={16} />
            <span>Login</span>
          </button>
          <button className={styles.signupButton}>
            <User size={16} />
            <span>Sign Up</span>
          </button>
        </div>
  
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    )
}

export default Navbar