import React from "react";
import Layout from "./Layout/User/Layout";
import OfferPage from "./Pages/User/Offers";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/User/Home";
import Holiday from "./Pages/User/Holiday";
import Contact from "./Pages/User/Contact";
import About from "./Pages/User/About";
import Services from "./Pages/User/Services";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminLayout from "./Layout/Admin/Layout";
import AdminLogin from "./Pages/Admin/Login";
import Users from "./Pages/Admin/Users";
import AdminContact from "./Pages/Admin/Contact";
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

        {/* auth  */}
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminLayout />} >
          <Route index element={<Dashboard/>} />
          <Route path="user" element={<Users/>} />
          <Route path="contact-requests" element={<AdminContact />} />
        </Route>

      </Routes>
    </div>
  );
};

export default App;
