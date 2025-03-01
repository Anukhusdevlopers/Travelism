import React, { useState } from 'react';
import { X } from 'lucide-react';
import './RegistrationPopup.css';

// interface RegistrationPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

const RegistrationPopup = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal details
    name: '',
    dob: '',
    gender: '',
    fatherName: '',
    motherName: '',
    nationality: '',
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
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target).checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Registration submitted successfully!');
    onClose();
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
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
                   step === 3 ? 'Emergency' : 'Declaration'}
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
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
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
            ) : (
              <button 
                type="submit" 
                className="btn-submit"
                disabled={!formData.declaration}
              >
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPopup;