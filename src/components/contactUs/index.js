import React, { useState } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
    // Handle form submission here (send data to the backend)
  };

  return (
    <div className="contact-container">
      <h1 className="page-title">Get in Touch</h1>
      <p className="page-description">
        We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
      </p>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> info@jewelavacations.com</p>
          <p><strong>Phone:</strong> +254 745 829 828</p>
          <p><strong>Address:</strong> Moi ave, Nairobi, Kenaya</p>
          <p>Feel free to drop by our office or contact us through email or phone!</p>

          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com"><i className="fab fa-twitter"></i></a>
            <a href="https://wa.me/+254745829828"><i className="fab fa-whatsapp"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
