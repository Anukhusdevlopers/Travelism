import React, { useState } from "react";
import {
  Plane,
  Hotel,
  Car,
  Train,
  MapPin,
  Menu,
  X,
  User,
  LogIn,
  Umbrella,
  House,
} from "lucide-react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import img from "../../../assets/logo.jpg";

const Navbar = ({ setIsPopupOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>
          <img src={img} style={{ height: "50px", width: "auto" }} alt="" />
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className={styles.navLinks}>
        {[
          { path: "/", icon: <House size={16} />, label: "Home" },
          { path: "/about", label: "About" },
          { path: "/services", label: "Services" },
          {
            path: "/holiday",
            icon: <Umbrella size={16} />,
            label: "Packages",
          },
          { path: "/contact", label: "Contact Us" },
        ].map((item) => (
          <Link key={`${item.path}-${item.label}`} to={item.path}>
            <li className={styles.navLink}>
              {/* {item.icon} */}
              <span>{item.label}</span>
            </li>
          </Link>
        ))}
      </ul>

      {/* Auth Buttons (Desktop) */}
      <div className={styles.authButtons}>
        <button className={styles.loginButton}>
          <LogIn size={16} />
          <span>Login</span>
        </button>
        <button
          className={styles.signupButton}
          onClick={() => setIsPopupOpen(true)}
        >
          <User size={16} />
          <span>Sign Up</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Drawer */}
      <div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.closeIcon}>
          <X onClick={() => setMobileMenuOpen(false)} size={28} />
        </div>
        <ul className={styles.mobileNavLinks}>
        {[
          { path: "/", icon: <House size={16} />, label: "Home" },
          { path: "/about", label: "About" },
          { path: "/services", label: "Services" },
          {
            path: "/holiday",
            icon: <Umbrella size={16} />,
            label: "Packages",
          },
          { path: "/contact", icon: <House size={16} />, label: "Contact Us" },
        ].map((item) => (
            <Link
              key={`${item.path}-${item.label}`}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
            >
              <li className={styles.mobileNavLink}>
                {/* {item.icon} */}
                <span>{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>

        {/* Auth Buttons (Mobile) */}
        <div className={styles.mobileAuthButtons}>
          <button
            className={styles.loginButton}
            onClick={() =>{setMobileMenuOpen(false)}} 
          >
            <LogIn size={16} />
            <span>Login</span>
          </button>
          <button
            className={styles.signupButton}
            onClick={() => {setIsPopupOpen(true); setMobileMenuOpen(false)}}
          >
            <User size={16} />
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
