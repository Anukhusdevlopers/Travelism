import React from 'react'
import Hero from '../../Component/User/Hero/Hero'
import Offers from '../../Component/User/Offers/Offers'
import Destination from '../../Component/User/Destinations/Destination'
import Features from '../../Component/User/Features/Features'
import Testimonial from '../../Component/User/Testimonial/Testimonial'
import Download from '../../Component/User/Download/Download'
import Newsletter from '../../Component/User/Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Offers/>
        <Destination/>
        <Features/>
        <Testimonial/>
        {/* <Download/> */}
        {/* <Newsletter/> */}
    </div>
  )
}

export default Home