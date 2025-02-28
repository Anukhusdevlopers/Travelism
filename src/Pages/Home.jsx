import React from 'react'
import Hero from '../Component/Hero/Hero'
import Offers from '../Component/Offers/Offers'
import Destination from '../Component/Destinations/Destination'
import Features from '../Component/Features/Features'
import Testimonial from '../Component/Testimonial/Testimonial'
import Download from '../Component/Download/Download'
import Newsletter from '../Component/Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Offers/>
        <Destination/>
        <Features/>
        <Testimonial/>
        <Download/>
        <Newsletter/>
    </div>
  )
}

export default Home