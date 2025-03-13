import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = ()=>{
    navigate("/admin-login")
  }

  return (
    <header className="header">
      
      {/* <button className="menu-toggle" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button> */}
      {/* Page Title */}
      <h2 className="title">Welcome to Admin Panel</h2>

      {/* User Profile Icon */}
      <div style={{ display: "flex", alignItems: "center" }}>
        
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
