import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaCog } from "react-icons/fa";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin" className="menu-item">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/user" className="menu-item">
            <FaUser /> Users
          </Link>
        </li>
        <li>
          <Link to="/admin/contact-requests" className="menu-item">
            <FaUser /> Contact
          </Link>
        </li>
        {/* <li>
          <Link to="/settings" className="menu-item">
            <FaCog /> Settings
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
