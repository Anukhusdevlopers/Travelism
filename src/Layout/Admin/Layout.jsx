import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import './Layout.css'

export default function AdminLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen((prev) => !prev);
    }
  };


  return (
    <div className='admin-dashboard' style={{ display: 'flex',backgroundColor:"#f9f9f9",minHeight:"100vh" }}>
      <Sidebar isSidebarOpen={isSidebarOpen}/>
      <div className={`content ${isSidebarOpen ? "" : "collapsed"}`}>
        <Header toggleSidebar={toggleSidebar} />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
