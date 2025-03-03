import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import './Layout.css'

export default function AdminLayout() {
  return (
    <div className='admin-dashboard' style={{ display: 'flex',backgroundColor:"#f9f9f9",minHeight:"100vh" }}>
      <Sidebar />
      <div className='content'>
        <Header />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>

    </div>
  )
}
