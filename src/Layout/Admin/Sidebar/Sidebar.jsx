import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaCog } from "react-icons/fa";
import './Sidebar.css';
  
const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
      <div className="sidebar-header">
        <h2>{isSidebarOpen ? "Admin" : "AP"}</h2>
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
        
        {/* <li>
          <Link to="/admin/user" className="menu-item">
            <FaUser /> Pending Payment
          </Link>
        </li>
        <li>
          <Link to="/admin/user" className="menu-item">
            <FaUser /> Completed Payment
          </Link>
        </li>
        <li>
          <Link to="/admin/user" className="menu-item">
            <FaUser /> Transaction
          </Link>
        </li> */}
        <li>
          <Link to="/admin/contact-requests" className="menu-item">
          <FaTachometerAlt />Queries
          </Link>
        </li>

        <li>
          <Link to="/admin/order" className="menu-item">
            <FaTachometerAlt /> Transactions
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
