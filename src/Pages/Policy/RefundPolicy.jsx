import React from "react";
import "./PrivacyPolicy.css";

const RefundPolicy = () => {
  return (
    <div className="policy-container" style={{padding:'32px'}}>
      <h1 className="policy-title" style={{textAlign:'center',color:'blue'}}>Refund Policy</h1>
      <p className="policy-intro">
        At <strong>Karwan International Tours</strong>, we strive to provide the best travel experiences. Our refund policy outlines the conditions under which refunds may be issued.
      </p>

      <div className="policy-section">
        <h2>1. Cancellation by Traveler</h2>
        <ul>
          <li>All cancellation requests must be submitted in writing via email.</li>
          <li>Refunds are subject to our cancellation policy, which varies depending on the destination and service provider.</li>
          <li>Cancellations made within 7 days of departure may not be eligible for a refund.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>2. Cancellation by Company</h2>
        <ul>
          <li>If we cancel a trip due to unforeseen circumstances (e.g., weather, government restrictions, insufficient participation), a full refund will be issued.</li>
          <li>We are not responsible for additional costs incurred due to cancellations, such as non-refundable flight tickets.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>3. Refund Credited</h2>
        <ul>
          <li>Approved refunds will be credited within 7-14 business days to original payment mode.</li>
          <li>Refunds will be issued to the original payment method used at the time of booking.</li>
         </ul>
      </div>

      <div className="policy-section">
        <h2>4. Non-Refundable Services</h2>
        <ul>
          <li>Some services, such as special promotions, last-minute deals, and non-refundable tickets, are not eligible for refunds.</li>
          <li>Customized tours and tailor-made itineraries may have different refund policies, which will be communicated at the time of booking.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>5. Contact Us</h2>
        <p>
          If you have any questions about our refund policy, please contact us at <strong>karwantours74@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
