import React from "react";
import Layout from "./Layout/User/Layout";
import OfferPage from "./Pages/User/Offers";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/User/Home";
import Holiday from "./Pages/User/Holiday";
import Contact from "./Pages/User/Contact";
import About from "./Pages/User/About";
import Services from "./Pages/User/Services";
  const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={< Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
