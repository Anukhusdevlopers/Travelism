import React from 'react'

const TermCondition = () => {
    return (
      <div className="policy-container" style={{padding:'32px'}}>
        <h1 className="policy-title" style={{textAlign:'center',color:'blue'}}>Terms and Conditions</h1>
        <p className="policy-intro">
          Welcome to <strong>Karwan International Tours</strong>. These Terms and Conditions govern your use of our website and services. By accessing our website and booking travel services, you agree to be bound by these Terms.
        </p>
  
        <div className="policy-section">
          <h2>1. Booking and Payments</h2>
          <ul>
            <li>All bookings are subject to availability.</li>
            <li>A deposit or full payment is required at the time of booking.</li>
            <li>Payment must be made through accepted payment methods listed on our website.</li>
            <li>Failure to complete payment may result in cancellation of your booking.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>2. Cancellation and Refund Policy</h2>
          <ul>
            <li>Cancellation requests must be submitted in writing.</li>
            <li>Refunds are subject to our cancellation policy, which varies by service and destination.</li>
            <li>Any refunds will be processed within [X] business days after approval.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>3. Travel Documents and Responsibilities</h2>
          <ul>
            <li>You are responsible for obtaining valid passports, visas, and other travel documents.</li>
            <li>We are not liable for denied boarding or entry due to incomplete or incorrect documentation.</li>
            <li>You must comply with all travel rules and regulations of the destination country.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>4. Changes and Modifications</h2>
          <ul>
            <li>We reserve the right to modify itineraries due to unforeseen circumstances (e.g., weather, government restrictions, safety concerns).</li>
            <li>Additional charges may apply for changes requested by the traveler after booking confirmation.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>5. Travel Insurance</h2>
          <ul>
            <li>We strongly recommend purchasing travel insurance to cover trip cancellations, medical emergencies, and other unforeseen circumstances.</li>
            <li>We are not responsible for any loss, damage, or expenses incurred due to travel disruptions.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>6. Liability Disclaimer</h2>
          <ul>
            <li>We act as an intermediary between travelers and service providers and are not liable for service failures beyond our control.</li>
            <li>We are not responsible for personal injury, property damage, delays, or cancellations caused by third-party providers.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>7. Conduct and Behavior</h2>
          <ul>
            <li>Travelers must adhere to local laws and customs.</li>
            <li>Any inappropriate behavior that disrupts the tour or causes harm to others may result in termination of services without a refund.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>8. Force Majeure</h2>
          <ul>
            <li>We are not responsible for cancellations or disruptions due to events beyond our control (e.g., natural disasters, pandemics, political unrest, strikes).</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>9. Governing Law</h2>
          <ul>
            <li>These Terms shall be governed by and interpreted under the laws of government.</li>
            <li>Any disputes arising from these Terms shall be resolved in the courts of government.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>10. Amendments</h2>
          <ul>
            <li>We reserve the right to update these Terms at any time. Changes will be effective upon posting on our website.</li>
          </ul>
        </div>
  
        <div className="policy-section">
          <h2>Contact Us</h2>
          <p>
            By booking a trip with us, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          </p>
          <p>
            For any inquiries, please contact us at <strong>karwantours74@gmail.com</strong>.
          </p>
        </div>
      </div>
    );
  };
  

export default TermCondition