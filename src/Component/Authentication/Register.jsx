import React, { useState } from 'react';
import { X } from 'lucide-react';
import './RegistrationPopup.css';
import { SignUp } from '../../services/user.service';
import axios from 'axios';


const RegistrationPopup = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading,setLoading] = useState(false);
  const [userDets,setUserDets] = useState();
  const [errors, setErrors] = useState({});
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showHandlePayment,setShowHandlePayment] = useState(false);
  const [formData, setFormData] = useState({
    // Personal details
    name: '',
    dob: '',
    gender: '',
    fatherName: '',
    motherName: '',
    nationality: '',
    email: '',
    number: '',
    aadharNo: '',
    passportNumber: '',
    passportExpiry: '',

    // Address details
    city: '',
    state: '',
    pincode: '',
    address: '',

    // Emergency contact details
    emergencyContactName: '',
    emergencyContactNo: '',
    emergencyContactAddress: '',

    // Declaration
    declaration: false,
    paymentStatus: false,
  });

  const validateStep = () => {
    let newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Full Name is required';
      if (!formData.dob) newErrors.dob = 'Date of Birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.number) newErrors.number = 'Phone is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.fatherName) newErrors.fatherName = "Father's Name is required";
      if (!formData.motherName) newErrors.motherName = "Mother's Name is required";
      if (!formData.nationality) newErrors.nationality = 'Nationality is required';
      if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';
      if (!formData.passportExpiry) newErrors.passportExpiry = 'Passport Expiry is required';
      if (!formData.passportNumber) newErrors.passportNumber = 'Passport Number is required';
    }
    if (currentStep === 2) {
      if (!formData.address) newErrors.address = 'Complete Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.pincode) newErrors.pincode = 'Pincode is required';
    }
    if (currentStep === 3) {
      if (!formData.emergencyContactName) newErrors.emergencyContactName = 'Emergency Contact Name is required';
      if (!formData.emergencyContactNo) newErrors.emergencyContactNo = 'Emergency Contact Number is required';
      if (!formData.emergencyContactAddress) newErrors.emergencyContactAddress = 'Emergency Contact Address is required';
    }
    if (currentStep === 4) {
      if (!formData.declaration) newErrors.declaration = 'You must agree to the declaration';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target).checked : value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    setLoading(true);
    if (validateStep()) {
      try {
        const response = await SignUp(formData); // Call API function
        console.log("Success:", response);
        setUserDets(response.user)
        // alert("User Registered successfully!"); // Show success message
        setShowHandlePayment(true);
      } catch (error) {
        console.error("Error creating user:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Failed to register user."); // Show error message

      }
    }
    
    setLoading(false);
    // onClose(); // Close modal/form after submission
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const orderData = {
        order_id: `order_${Date.now()}`,
        order_amount: 500,
        order_currency: 'INR',
        customer_details: {
          customer_id: userDets._id,
          customer_email: formData.email,
          customer_phone:  formData.number,
        },
      };
      const response = await axios.post('http://localhost:8000/api/wallet/createPaymentOrder', orderData);
      const { payment_session_id } = response.data;
      if (payment_session_id) {
        const cashfree = new window.Cashfree(payment_session_id);
        cashfree.redirect();
      } 
      
    onclose();
    } catch (error) {
      console.error('Payment initiation error:', error);
    }
    setLoading(false)
  };





  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Register for Hajj Kidmat</h2>
          <button onClick={onClose} className="close-button">
            <X size={24} />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="progress-container">
          <div className="progress-steps">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="step-item">
                <div className={`step-circle ${currentStep >= step ? 'active' : ''}`}>
                  {step}
                </div>
                <span className="step-label">
                  {step === 1 ? 'Personal' :
                    step === 2 ? 'Address' :
                      step === 3 ? 'Emergency' :
                       'Submit'}
                </span>
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div
              className="progress-completed"
              style={{ width: `${(currentStep - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>

        {
          !showHandlePayment && (
            <form onSubmit={handleSubmit} className="registration-form">
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="form-section">
                <h3 className="section-title">Personal Details</h3>
  
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p style={{ color: 'red' }} className="error-text">{errors.name}</p>}
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth*</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                    {errors.dob && <p style={{ color: 'red' }} className="error-text">{errors.dob}</p>}
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="gender">Gender*</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p style={{ color: 'red' }} className="error-text">{errors.gender}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="fatherName">Father's Name*</label>
                    <input
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      placeholder="Enter father's name"
                    />
                    {errors.fatherName && <p style={{ color: 'red' }} className="error-text">{errors.fatherName}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="motherName">Mother's Name*</label>
                    <input
                      type="text"
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      required
                      placeholder="Enter mother's name"
                    />
                    {errors.motherName && <p style={{ color: 'red' }} className="error-text">{errors.motherName}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="name">Number*</label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                    {errors.number && <p style={{ color: 'red' }} className="error-text">{errors.number}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="name">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                    {errors.email && <p style={{ color: 'red' }} className="error-text">{errors.email}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="nationality">Nationality*</label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                      placeholder="Enter your nationality"
                    />
                    {errors.nationality && <p style={{ color: 'red' }} className="error-text">{errors.nationality}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="aadharNo">Aadhar Number*</label>
                    <input
                      type="text"
                      id="aadharNo"
                      name="aadharNo"
                      value={formData.aadharNo}
                      onChange={handleChange}
                      required
                      placeholder="XXXX-XXXX-XXXX"
                      maxLength={14}
                    />
                    {errors.aadharNo && <p style={{ color: 'red' }} className="error-text">{errors.aadharNo}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="passportNumber">Passport Number</label>
                    <input
                      type="text"
                      id="passportNumber"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleChange}
                      placeholder="Enter passport number"
                    />
                    {errors.passportNumber && <p style={{ color: 'red' }} className="error-text">{errors.passportNumber}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="passportExpiry">Passport Expiry Date</label>
                    <input
                      type="date"
                      id="passportExpiry"
                      name="passportExpiry"
                      value={formData.passportExpiry}
                      onChange={handleChange}
                    />
                    {errors.passportExpiry && <p style={{ color: 'red' }} className="error-text">{errors.passportExpiry}</p>}
  
                  </div>
                </div>
              </div>
            )}
  
            {/* Step 2: Address Details */}
            {currentStep === 2 && (
              <div className="form-section">
                <h3 className="section-title">Address Details</h3>
  
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="address">Complete Address*</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                    {errors.address && <p style={{ color: 'red' }} className="error-text">{errors.address}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="city">City*</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Enter your city"
                    />
                    {errors.city && <p style={{ color: 'red' }} className="error-text">{errors.city}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="state">State*</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="Enter your state"
                    />
                    {errors.state && <p style={{ color: 'red' }} className="error-text">{errors.state}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode*</label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      placeholder="Enter pincode"
                      maxLength={6}
                    />
                    {errors.pincode && <p style={{ color: 'red' }} className="error-text">{errors.pincode}</p>}
  
                  </div>
                </div>
              </div>
            )}
  
            {/* Step 3: Emergency Contact Details */}
            {currentStep === 3 && (
              <div className="form-section">
                <h3 className="section-title">Emergency Contact Details</h3>
  
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="emergencyContactName">Contact Name*</label>
                    <input
                      type="text"
                      id="emergencyContactName"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      required
                      placeholder="Enter emergency contact name"
                    />
                    {errors.emergencyContactName && <p style={{ color: 'red' }} className="error-text">{errors.emergencyContactName}</p>}
  
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="emergencyContactNo">Contact Number*</label>
                    <input
                      type="tel"
                      id="emergencyContactNo"
                      name="emergencyContactNo"
                      value={formData.emergencyContactNo}
                      onChange={handleChange}
                      required
                      placeholder="Enter emergency contact number"
                    />
                    {errors.emergencyContactNo && <p style={{ color: 'red' }} className="error-text">{errors.emergencyContactNo}</p>}
  
                  </div>
  
                  <div className="form-group full-width">
                    <label htmlFor="emergencyContactAddress">Contact Address*</label>
                    <textarea
                      id="emergencyContactAddress"
                      name="emergencyContactAddress"
                      value={formData.emergencyContactAddress}
                      onChange={handleChange}
                      required
                      placeholder="Enter emergency contact address"
                      rows={3}
                    />
                    {errors.emergencyContactAddress && <p style={{ color: 'red' }} className="error-text">{errors.emergencyContactAddress}</p>}
  
                  </div>
                </div>
              </div>
            )}
  
            {/* Step 4: Declaration */}
            {currentStep === 4 && (
              <div className="form-section">
                <h3 className="section-title">Declaration</h3>
  
                <div className="declaration-container">
                  <p className="declaration-text">
                    I hereby declare that all the information provided by me in this form is true and correct to the best of my knowledge and belief. I understand that providing any false information or suppressing any material fact will render me liable to appropriate action as may be decided by Travelism.
                  </p>
                  {errors.declaration && <p style={{ color: 'red' }} className="error-text">{errors.declaration}</p>}
  
  
                  <div className="form-group checkbox-group">
                    <input
                      type="checkbox"
                      id="declaration"
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="declaration">
                      I agree to the above declaration and the terms and conditions of Travelism.
                    </label>
                  </div>
                </div>
              </div>
            )}
  
            
            {/* {errors && <p className="error-text" style={{color:'red'}}>Please fill all fields</p>} */}
  
  
            <div className="form-buttons">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary"
                >
                  Previous
                </button>
              )}
  
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-primary"
                >
                  Next
                </button>
              ) : currentStep === 4 ? (
                <button
                type="submit"
                className="btn-submit"
                disabled={!formData.declaration || loading}
              >
                {/* Submit Registration */}
                {
                  loading ? 'Processing' : 'Submit and Pay'
                }
              </button>
            ) :'null'}
            </div>
          </form>
          )
        }
       


        {showHandlePayment && (
            <div style={{padding:'2rem'}}>
              {/* <h2>Step 5: Payment</h2> */}
              <p className="section-title">Registration Fee: ₹500</p>
              <button type="button" className='btn-primary' style={{display:'flex',justifySelf:'end'}} onClick={handlePayment} disabled={formData.paymentStatus}>
                {formData.paymentStatus ? "Payment Completed" : loading ? 'Processing...' :'Pay Now'}
              </button>
              {/* <button onClick={() => setStep(3)}>Previous</button>
              <button type="submit">Save & Next</button> */}
            </div>
          )}
      </div>
    </div>
  );
};

export default RegistrationPopup;