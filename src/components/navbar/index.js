import React, { useState, useEffect } from 'react';
import './style.css'; 
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showImagineMenu, setShowImagineMenu] = useState(false);
  const [showDestinationMenu, setShowDestinationMenu] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

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

  const handleHamburgerMenuToggle = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <nav className="navbar">
      {/* Upper Part (Green) */}
      <div className={`upper ${isScrolled ? 'hidden' : ''}`}>
        <div className="contact-info">
          <span>Get in touch: +1 123 456 7890</span>
        </div>
        <div className="social-links">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaInstagram /></a>
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
          <a href="#">HOME</a>
          <div className={`dropdown ${showImagineMenu ? 'active' : ''}`} onMouseEnter={handleImagineMenuToggle} onMouseLeave={handleImagineMenuToggle}>
            <a href="#">IMAGINE-EXPERIENCE</a>
            <div className="dropdown-content">
              <a href="#">GAME DRIVES</a>
              <a href="#">AIR SAFARIS</a>
              <a href="#">BALLOON TOURS</a>
              <a href="#">BEACH HOLIDAYS</a>
              <a href="#">SIGHTSEEING</a>
              <a href="#">CULTURAL VISITS</a>
              <a href="#">HISTORICAL VISITS</a>
              <a href="#">HONEYMOONERS</a>
              <a href="#">GORILLA TRACKING</a>
              <a href="#">MOUNTAIN CLIMBING</a>
              <a href="#">HORSE RIDING</a>
              <a href="#">FAMILY GATEWAYS</a>
            </div>
          </div>
          <div className={`dropdown ${showDestinationMenu ? 'active' : ''}`} onMouseEnter={handleDestinationMenuToggle} onMouseLeave={handleDestinationMenuToggle}>
            <a href="#">DESTINATION</a>
            <div className="dropdown-content">
              <a href="#">AFRICAN SAFARIS</a>
              <a href="#">OUTBOUND HOLIDAYS</a>
            </div>
          </div>
          <div className={`dropdown ${showExploreMenu ? 'active' : ''}`} onMouseEnter={handleExploreMenuToggle} onMouseLeave={handleExploreMenuToggle}>
            <a href="#">EXPLORE</a>
            <div className="dropdown-content">
              <a href="#">AIR TRAVEL</a>
              <a href="#">SPECIAL OFFERS</a>
              <a href="#">SAMPLE PACKAGES</a>
              <a href="#">TESTIMONIALS</a>
              <a href="#">ENQUIRIES</a>
            </div>
          </div>
        </div>
        <div className="hamburger-menu">
  <FaBars onClick={handleHamburgerMenuToggle} />
  {showHamburgerMenu && (
    <div className="hamburger-dropdown">
      <a href="#">HOME</a>
      <div className={`dropdown ${showImagineMenu ? 'active' : ''}`}>
        <a href="#" onClick={handleImagineMenuToggle}>IMAGINE-EXPERIENCE</a>
        <div className="dropdown-content">
          <a href="#">GAME DRIVES</a>
          <a href="#">AIR SAFARIS</a>
          <a href="#">BALLOON TOURS</a>
          <a href="#">BEACH HOLIDAYS</a>
          <a href="#">SIGHTSEEING</a>
          <a href="#">CULTURAL VISITS</a>
          <a href="#">HISTORICAL VISITS</a>
          <a href="#">HONEYMOONERS</a>
          <a href="#">GORILLA TRACKING</a>
          <a href="#">MOUNTAIN CLIMBING</a>
          <a href="#">HORSE RIDING</a>
          <a href="#">FAMILY GATEWAYS</a>
        </div>
      </div>
      <div className={`dropdown ${showDestinationMenu ? 'active' : ''}`}>
        <a href="#" onClick={handleDestinationMenuToggle}>DESTINATION</a>
        <div className="dropdown-content">
          <a href="#">AFRICAN SAFARIS</a>
          <a href="#">OUTBOUND HOLIDAYS</a>
        </div>
      </div>
      <div className={`dropdown ${showExploreMenu ? 'active' : ''}`}>
        <a href="#" onClick={handleExploreMenuToggle}>EXPLORE</a>
        <div className="dropdown-content">
          <a href="#">AIR TRAVEL</a>
          <a href="#">SPECIAL OFFERS</a>
          <a href="#">SAMPLE PACKAGES</a>
          <a href="#">TESTIMONIALS</a>
          <a href="#">ENQUIRIES</a>
        </div>
      </div>
    </div>
  )}
</div>

      </div>
    </nav>
  );
};

export default Navbar;
