import React from 'react';
import './style.css'; 

const GameDrive = () => {
  const backgroundImage = '/images/image16.jpg';
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="gameDrive-container">
      
      <section className="hero-section" style={backgroundStyle}>
      <div className="accommodation-breadcrumb"><a href="/">Home</a>/Game Drive</div>
        <div className="hero-overlay">
          <h1>Experience the Ultimate Game Drive</h1>
          <p>Discover the Wild in its Natural Habitat</p>
          <button className="cta-button">Start Your Adventure</button>
        </div>
      </section>
      
      <section className="introduction-section">
        <h2>What is a Game Drive?</h2>
        <p>
          A game drive is an opportunity to explore the wild and encounter 
          various species in their natural habitats. Our experienced guides 
          will take you on a journey through the heart of nature.
        </p>
        <div className="intro-icons">
          <div className="icon">🐘</div>
          <div className="icon">🦁</div>
          <div className="icon">🚙</div>
          <div className="icon">🌄</div>
        </div>
      </section>
      
      <section className="wildlife-section">
        <h2>Wildlife Highlights</h2>
        <div className="wildlife-grid">
          <div className="wildlife-item">
            <img src="images/lion.jpg" alt="Lion" />
            <div className="wildlife-info">Lion</div>
          </div>
          <div className="wildlife-item">
            <img src="images/elephant.jpg" alt="Elephant" />
            <div className="wildlife-info">Elephant</div>
          </div>
          <div className="wildlife-item">
            <img src="images/giraffe.jpg" alt="Giraffe" />
            <div className="wildlife-info">Giraffe</div>
          </div>
          <div className="wildlife-item">
            <img src="images/zebra1.jpg" alt="Zebra" />
            <div className="wildlife-info">Zebra</div>
          </div>
          <div className="wildlife-item">
            <img src="images/leopard.jpg" alt="Leopard" />
            <div className="wildlife-info">Leopard</div>
          </div>
          <div className="wildlife-item">
            <img src="images/buffalo.jpg" alt="Buffalo" />
            <div className="wildlife-info">Buffalo</div>
          </div>
          <div className="wildlife-item">
            <img src="images/rhino.jpg" alt="Rhinoceros" />
            <div className="wildlife-info">Rhinoceros</div>
          </div>
          <div className="wildlife-item">
            <img src="images/cheetah.jpg" alt="Cheetah" />
            <div className="wildlife-info">Cheetah</div>
          </div>
        </div>
      </section>
      
      <section className="routes-section">
        <h2>Explore Our Routes</h2>
        <div className="map-container">
          <iframe 
            title="Game Drive Routes Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31528.560738259345!2d35.34106325183643!3d-1.3498624641260481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183f0dbb392d6b4d%3A0x601d504562d4f106!2sMaasai%20Mara%20National%20Reserve!5e0!3m2!1sen!2ske!4v1692005369137!5m2!1sen!2ske" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="route-info">
            <p>Click on the routes to learn more about the wildlife in each area.</p>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to Start Your Adventure?</h2>
        <button className="cta-button">Book Now</button>
      </section>

      <footer className="footer">
        <p>&copy; 2024 GameDrive Adventures. All Rights Reserved.</p>
      </footer>
      
    </div>
  );
};

export default GameDrive;
