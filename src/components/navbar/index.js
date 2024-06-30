import React, { useState, useEffect } from 'react';
import './style.css'; 
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [showImagineMenu, setShowImagineMenu] = useState(false);
  const [showDestinationMenu, setShowDestinationMenu] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImagineMenuToggle = () => {
    setShowImagineMenu(!showImagineMenu);
  };

  const handleDestinationMenuToggle = () => {
    setShowDestinationMenu(!showDestinationMenu);
  };

  const handleExploreMenuToggle = () => {
    setShowExploreMenu(!showExploreMenu);
  };

  return (
    <nav className="navbar">
      {/* Upper Part (Green) */}
      <div className={`upper ${isScrolled ? 'hidden' : ''}`}>
        <div className="contact-info">
          <span>Get in touch: +1 123 456 7890</span>
        </div>
        <div className="social-links">
          <a href="facebook"><FaFacebook /></a>
          <a href="twitter"><FaTwitter /></a>
          <a href="linkedin"><FaLinkedin /></a>
          <a href="whatsapp"><FaWhatsapp /></a>
          <a href="instagram"><FaInstagram /></a>
        </div>
      </div>

      {/* Lower Part (Gold) */}
      <div className="lower">
        <div className="logos">
          <div className="left-image">
            <img src="/images/jewelaremoved bg words_prev_ui.png" alt="Left Image" />
          </div>
          <div className="right-image">
            <img src="/images/jewelaremoved bg newafrica img-Photoroom.png" alt="Logo" />
          </div>
        </div>
        <div className="navigation-links">
          <a href="home">HOME</a>
          <div className="dropdown" onMouseEnter={handleImagineMenuToggle} onMouseLeave={handleImagineMenuToggle}>
            <a href="imagine-experience">IMAGINE-EXPERIENCE</a>
            {showImagineMenu && (
              <div className="dropdown-content">
                <a href="game-drives">GAME DRIVES</a>
                <a href="air-safaris">AIR SAFARIS</a>
                <a href="balloon-tours">BALLOON TOURS</a>
                <a href="beach-holidays">BEACH HOLIDAYS</a>
                <a href="sightseeing">SIGHTSEEING</a>
                <a href="cultural-visits">CULTURAL VISITS</a>
                <a href="historical-visits">HISTORICAL VISITS</a>
                <a href="honeymooners">HONEYMOONERS</a>
                <a href="gorilla-tracking">GORILLA TRACKING</a>
                <a href="mountain-climbing">MOUNTAIN CLIMBING</a>
                <a href="horse-riding">HORSE RIDING</a>
                <a href="family-getaways">FAMILY GATEWAYS</a>
              </div>
            )}
          </div>
          <div className="dropdown" onMouseEnter={handleDestinationMenuToggle} onMouseLeave={handleDestinationMenuToggle}>
            <a href="destination">DESTINATION</a>
            {showDestinationMenu && (
              <div className="dropdown-content">
                <a href="african-safaris">AFRICAN SAFARIS</a>
                <a href="outbound-holidays">OUTBOUND HOLIDAYS</a>
              </div>
            )}
          </div>
          <div className="dropdown" onMouseEnter={handleExploreMenuToggle} onMouseLeave={handleExploreMenuToggle}>
            <a href="explore">EXPLORE</a>
            {showExploreMenu && (
              <div className="dropdown-content">
                <a href="air-travel">AIR TRAVEL</a>
                <a href="special-offers">SPECIAL OFFERS</a>
                <a href="sample-packages">SAMPLE PACKAGES</a>
                <a href="testimonials">TESTIMONIALS</a>
                <a href="enquiries">ENQUIRIES</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
