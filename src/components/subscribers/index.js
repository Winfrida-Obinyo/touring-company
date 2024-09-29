import React, { useState } from 'react';
import './style.css';
import countriesData from './countries.json'; 

const Subscribers = () => {
  const countries = countriesData; 


  const backgroundImage = '/images/dubai5.jpg';

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1,
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);

        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'country':
        setCountry(value);
        break;
      default:
        break;

    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input data (optional but recommended)

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
    };

    try {
      const response = await fetch('http://localhost:3000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),

      });

      if (!response.ok) {
        throw new Error('Error subscribing');
      }

      const data = await response.json();
      console.log(data);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setCountry('');
      
      // Optionally, you can show a confirmation message or perform other actions here
      // alert('Subscription successful!');
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="subscribers-container" style={backgroundStyle}>
      <div className="overlay"></div>
      <div className="left-right">
        <div className="left-content">
          <h2>GET THE LATEST SPECIAL OFFERS TRAVEL NEWS</h2>
          <hr className="separator-line" />
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>
        </div>
        <div className="right-content">
          <div className="subscription-title">
            <h4>SUBSCRIBE HERE</h4>
          </div>
          <form className="subscription-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">
              First Name:
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="lastName">
              Last Name:
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="email">
              Email Address:
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="phoneNumber">
              Phone Number:
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="country">
              Country:
              <select name="country" id="country" value={country} onChange={handleInputChange} required>
                <option value="" disabled selected>Select Your Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </label>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;





