import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import './RegistrationPopup.css';
import { SignUp } from '../../services/user.service';
import axios from 'axios';


const RegistrationPopup = ({ isOpen, onClose }) => {
  
  const [amount, setAmount] = useState(500);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
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
    phone: '',
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
  
    // Helper functions for validation
    const isValidName = (name) => /^[A-Za-z\s]+$/.test(name);
    const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);
    const isValidAadhar = (aadhar) => /^\d{12}$/.test(aadhar);
    const isValidPassport = (passport) => /^[A-Z][0-9]{7,8}$/.test(passport);
    const isValidPincode = (pincode) => /^\d{6}$/.test(pincode);
    const isFutureDate = (date) => new Date(date) > new Date();
   
  
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Full Name is required';
      else if (!isValidName(formData.name)) newErrors.name = 'Invalid Name (Only letters allowed)';
  
      if (!formData.dob) newErrors.dob = 'Date of Birth is required';
     
  
      if (!formData.gender) newErrors.gender = 'Gender is required';
  
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      else if (!isValidPhone(formData.phone)) newErrors.phone = 'Invalid phone number (must be 10 digits)';
  
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email format';
  
      if (!formData.fatherName) newErrors.fatherName = "Father's Name is required";
      else if (!isValidName(formData.fatherName)) newErrors.fatherName = "Invalid Name (Only letters allowed)";
  
      if (!formData.motherName) newErrors.motherName = "Mother's Name is required";
      else if (!isValidName(formData.motherName)) newErrors.motherName = "Invalid Name (Only letters allowed)";
  
      if (!formData.nationality) newErrors.nationality = 'Nationality is required';
  
      if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar Number is required';
      else if (!isValidAadhar(formData.aadharNo)) newErrors.aadharNo = 'Invalid Aadhar Number (must be 12 digits)';
  
      if (!formData.passportNumber) newErrors.passportNumber = 'Passport Number is required';
      else if (!isValidPassport(formData.passportNumber)) newErrors.passportNumber = 'Invalid Passport Number';
  
      if (!formData.passportExpiry) newErrors.passportExpiry = 'Passport Expiry is required';
      else if (!isFutureDate(formData.passportExpiry)) newErrors.passportExpiry = 'Passport expiry date must be in the future';
    }
  
    if (currentStep === 2) {
      if (!formData.address) newErrors.address = 'Complete Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.pincode) newErrors.pincode = 'Pincode is required';
      else if (!isValidPincode(formData.pincode)) newErrors.pincode = 'Invalid Pincode (must be 6 digits)';
    }
  
    if (currentStep === 3) {
      if (!formData.emergencyContactName) newErrors.emergencyContactName = 'Emergency Contact Name is required';
      else if (!isValidName(formData.emergencyContactName)) newErrors.emergencyContactName = 'Invalid Name (Only letters allowed)';
  
      if (!formData.emergencyContactNo) newErrors.emergencyContactNo = 'Emergency Contact Number is required';
      else if (!isValidPhone(formData.emergencyContactNo)) newErrors.emergencyContactNo = 'Invalid phone number (must be 10 digits)';
  
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

  const loadRazorpay = async () => {
    return new Promise((resolve) => {
      if (document.querySelector("script[src='https://checkout.razorpay.com/v1/checkout.js']")) {
        setRazorpayLoaded(true);
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        setRazorpayLoaded(true);
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent form submission

    if (!razorpayLoaded) {
      alert("Razorpay SDK not loaded. Please try again.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:7000/api/products/createOrder",{
        id : userDets._id 
      });

      const options = {
        key: "rzp_live_oEY", // Replace with your test key
        amount: data.amount,
        currency: data.currency,
        name: "Karwan International Tours",
        description: "Payment Transaction",
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyRes = await axios.post("http://localhost:7000/api/products/verifyPayment", response);
            alert(verifyRes.data.message);
          } catch (error) {
            console.error("Verification error", error);
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment error", error);
      alert("Something went wrong!");
    }
  };

  useEffect(() => {
    loadRazorpay();
  }, []);






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
                      id="phone"
                      name="phone"
                      value={formData.phone}
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