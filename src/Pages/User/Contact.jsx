import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageSquare,
  Users,
  HelpCircle
} from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  return (
    <div className={styles.contactContainer}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Contact Us</h1>
        <p className={styles.headerSubtitle}>
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </header>

      <div className={styles.contentWrapper}>
        <div className={styles.contactForm}>
          <h2 className={styles.formTitle}>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formCol}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    First Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              <div className={styles.formCol}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Last Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formCol}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              <div className={styles.formCol}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Type of Inquiry <span className={styles.required}>*</span>
              </label>
              <select 
                name="inquiryType" 
                value={formData.inquiryType}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="general">General Inquiry</option>
                <option value="booking">Booking Issue</option>
                <option value="refund">Refund Request</option>
                <option value="complaint">Complaint</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Business Partnership</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Subject <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              ></textarea>
              <p className={styles.helpText}>Please be as detailed as possible so we can best assist you.</p>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              <MapPin size={20} className={styles.infoIcon} /> Our Location
            </h3>
            <p className={styles.infoContent}>
              123 Travel Plaza, Silicon Valley<br />
              San Francisco, CA 94103<br />
              United States
            </p>
            <div className={styles.mapContainer}>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Office location map" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              <Phone size={20} className={styles.infoIcon} /> Phone & Email
            </h3>
            <p className={styles.infoContent}>
              <strong>Customer Support:</strong><br />
              +1 (800) 123-4567<br />
              support@travelsite.com<br /><br />
              <strong>Booking Inquiries:</strong><br />
              +1 (800) 765-4321<br />
              bookings@travelsite.com
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              <Clock size={20} className={styles.infoIcon} /> Business Hours
            </h3>
            <p className={styles.infoContent}>
              <strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM<br />
              <strong>Saturday:</strong> 10:00 AM - 6:00 PM<br />
              <strong>Sunday:</strong> 10:00 AM - 4:00 PM<br />
              <em>All times are in EST</em>
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>
              <Users size={20} className={styles.infoIcon} /> Connect With Us
            </h3>
            <p className={styles.infoContent}>
              Follow us on social media for travel tips, deals, and inspiration.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How do I cancel or modify my booking?</h3>
            <p className={styles.faqAnswer}>
              You can cancel or modify your booking by logging into your account and navigating to "My Trips." 
              Alternatively, you can contact our customer support team with your booking reference.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>What is your refund policy?</h3>
            <p className={styles.faqAnswer}>
              Refund policies vary depending on the type of booking and the terms set by our partners. 
              Generally, cancellations made 48 hours before the scheduled service are eligible for a full refund.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How can I get my e-ticket?</h3>
            <p className={styles.faqAnswer}>
              E-tickets are automatically sent to the email address provided during booking. 
              You can also download them from the "My Trips" section of your account.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Do you offer group discounts?</h3>
            <p className={styles.faqAnswer}>
              Yes, we offer special rates for group bookings of 10 or more people. Please contact our 
              group booking department at groups@travelsite.com for more information.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;