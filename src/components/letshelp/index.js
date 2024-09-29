import React from 'react';
import './style.css';

const LetsHelp = () => {
  const backgroundImageUrl = 'url(/images/image16.jpg)'; 

  const sectionStyle = {
    backgroundImage: backgroundImageUrl,
    objectFit: 'cover',
    backgroundPosition: 'left',
    backgroundAttachment: 'fixed',
    minHeight: '50vh',
    color: 'white',
    textAlign: 'center',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'
  };

  return (
    <div className="lets-help-section" style={sectionStyle}>
      <div className="content-container">
        <h1>Let's Help You with Your Journey!</h1>
        <p>Start planning your tour today and make your dream trip a reality. Explore our destinations and find the perfect itinerary for you!</p>
        <p>Whether you’re looking for adventure, relaxation, or something in between, we’ve got you covered. Let us guide you through the process and make planning easy and enjoyable.</p>
        <button className="lh-btn" onClick={() => window.location.href = '/contact'}>Start Planning</button>
      </div>
    </div>
  );
};

export default LetsHelp;
