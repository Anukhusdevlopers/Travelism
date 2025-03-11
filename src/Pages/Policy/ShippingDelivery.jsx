import React from "react";
import "./ShippingDelivery.css"; // Importing the CSS file

const ShippingDelivery = () => {
  return (
    <div className="shipping-container">
      <h1 className="title">Shipping & Delivery Policy</h1>
      
      <section className="section">
        <h2 className="subtitle">Booking Confirmation & E-Ticket Delivery</h2>
        <p>Once your booking is completed, you will receive a confirmation email along with your e-ticket and travel details.</p>
        <ul>
          <li>Instant confirmation via email after successful payment.</li>
          <li>E-tickets, hotel vouchers, and itinerary sent to your registered email.</li>
          <li>Physical documents (if required) will be shipped via courier.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="subtitle">Delivery Timelines</h2>
        <ul>
          <li><strong>Domestic Tours:</strong> E-tickets sent within 24 hours.</li>
          <li><strong>International Tours:</strong> Ticket issuance may take 2-5 business days.</li>
          <li><strong>Hotel & Activities:</strong> Confirmation within 24-48 hours.</li>
          <li><strong>Physical Delivery:</strong> Standard: 5-7 days, Express: 2-3 days.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2 className="subtitle">Shipping Charges</h2>
        <p>E-tickets & vouchers are delivered free via email. Physical document courier charges depend on location and speed.</p>
      </section>
      
      <section className="section">
        <h2 className="subtitle">Tracking Your Delivery</h2>
        <p>If physical documents are shipped, a tracking ID will be emailed to you.</p>
      </section>
      
      <section className="section">
        <h2 className="subtitle">Contact Us</h2>
        <p>For any queries, contact us via:</p>
        <ul>
          <li><strong>Email:</strong> karwantours74@gmail.com</li>
          <li><strong>Phone:</strong> 7617866811, 7617866822</li>
        </ul>
      </section>
    </div>
  );
};

export default ShippingDelivery;
