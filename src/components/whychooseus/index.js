import React from 'react';
import './style.css'; 

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <header className="header">
        <h1>Why Choose Us</h1>
        <p>Don't be a tourist, be a traveller</p>
      </header>
      <section className="reasons">
        <div className="reason">
          <img src="/images/image1.jpg" alt="Reason 1" className="reason-image" />
          <h2>Personalized Experiences</h2>
          <p>We tailor our tours to your interests, ensuring a unique and memorable experience.</p>
        </div>
        <div className="reason">
          <img src="/images/image2.jpg" alt="Reason 2" className="reason-image" />
          <h2>Local Guides</h2>
          <p>Our knowledgeable local guides provide insider tips and stories about each destination.</p>
        </div>
        <div className="reason">
          <img src="/images/image5.jpg" alt="Reason 3" className="reason-image" />
          <h2>Authentic Adventures</h2>
          <p>Experience the culture, cuisine, and traditions of each location beyond the tourist spots.</p>
        </div>
      </section>
      <section className="ratings">
        <h2>Ratings</h2>
        <div className="rating-item">
          <h3>Tour Quality</h3>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="rating-item">
          <h3>Guide Knowledge</h3>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="rating-item">
          <h3>Authenticity</h3>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </section>
      <footer className="call-to-action">
        <h2>Ready to Start Your Journey?</h2>
        <p>Contact us today to plan your next adventure.</p>
        <button onClick={() => window.location.href = '/contact'}>Get in Touch</button>
      </footer>
    </div>
  );
};

export default WhyChooseUs;
