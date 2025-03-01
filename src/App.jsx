import React from "react";
import Layout from "./Layout/User/Layout";
import OfferPage from "./Pages/User/Offers";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/User/Home";
import Holiday from "./Pages/User/Holiday";
import FlightBooking from "./Pages/User/Flight";
import DestinationPage from "./Pages/User/Destination";
import HotelBooking from "./Pages/User/HotelBooking";
import CarBooking from "./Pages/User/CarBooking";
import TrainsBooking from "./Pages/User/TrainsBooking";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/flight-booking" element={<FlightBooking />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/hotel" element={<HotelBooking/>}/>
          <Route path="/carbooking" element={<CarBooking/>}/>
          <Route path="/train" element={<TrainsBooking/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
