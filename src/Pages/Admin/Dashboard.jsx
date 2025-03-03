import React from "react";
import './Dashboard.css';
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="card"  onClick={()=>navigate('/admin/user')}>
      {/* <FaUser style={{fontSize:'2rem'}} /> */}
        <h3>Total Users</h3>
        <p>250</p>
      </div>
      <div className="card" onClick={()=>navigate('/admin/user')}>
        {/* <FaUser style={{fontSize:'2rem'}} /> */}
        <h3>Total Registration</h3>
        <p>56</p>
      </div>
      {/* <div className="card">
        <h3>Revenue</h3>
        <p>$1200</p>
      </div> */}
    </div>
  );
};

export default Dashboard;
