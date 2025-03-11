import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from '../../Pages/User/Home'
import { Outlet } from 'react-router-dom'
import RegistrationPopup from '../../Component/Authentication/Register'
import StartingPopup from '../../Component/User/StartingPopup/StartingPopup'

const Layout = () => {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isImagePopupOpen,setIsImagePopupOpen] = useState(true);


  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setIsImagePopupOpen(false);
  };  

  return (
    <>
    <Navbar setIsPopupOpen={setIsPopupOpen}/>
        <Outlet />
    <Footer/>

    <RegistrationPopup isOpen={isPopupOpen} onClose={closePopup}/>
    {/* {
      isImagePopupOpen && (
        <StartingPopup  onclose={closePopup}/>
      )
    } */}
    </>
  )
}

export default Layout