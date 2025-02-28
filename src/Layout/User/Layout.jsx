import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from '../../Pages/User/Home'

const Layout = () => {
  return (
    <>
    <Navbar/>
        <Home/>
    <Footer/>
    </>
  )
}

export default Layout