import React, { useState, useEffect } from 'react';
import './style.css'; 
import { FaFacebook, FaWhatsapp, FaInstagram, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showImagineMenu, setShowImagineMenu] = useState(false);
  const [showDestinationMenu, setShowDestinationMenu] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (setShowMenu) => {
    setShowMenu((prevState) => !prevState);
  };

  const handleMouseEnter = (setShowMenu) => {
    if (!isMobile) {
      setShowMenu(true);
    }
  };

  const handleMouseLeave = (setShowMenu) => {
    if (!isMobile) {
      setShowMenu(false);
    }
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
          <a href="whatsapp"><FaWhatsapp /></a>
          <a href="instagram"><FaInstagram /></a>
        </div>
      </div>

      {/* Lower Part (Gold) */}
      <div className="lower">
        <div className="logos">
          <div className="left-image">
            <img src="/images/jewelaremoved bg words_prev_ui.png" alt="Logo" />
          </div>
          <div className="right-image">
            <img src="/images/jewelaremoved bg newafrica img-Photoroom.png" alt="Logo" />
          </div>
        </div>
        <div className={`navigation-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="home">HOME</a>
          <div 
            className="dropdown" 
            onMouseEnter={() => handleMouseEnter(setShowImagineMenu)} 
            onMouseLeave={() => handleMouseLeave(setShowImagineMenu)} 
          >
            <button 
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownToggle(setShowImagineMenu);
              }}
            >
              IMAGINE-EXPERIENCE
            </button>
            {showImagineMenu && (
              <div className="dropdown-content">
                <a href="game-drives">GAME DRIVES</a>
                <a href="air-safaris">AIR SAFARIS</a>
                <a href="balloon-tours">BALLOON TOURS</a>
                <a href="beach-holidays">BEACH HOLIDAYS</a>
                <a href="sightseeing">SIGHTSEEING</a>
                <a href="cultural-visits">CULTURAL VISITS</a>
                <a href="historical-visits">HISTORICAL VISITS</a>
                <a href="gorilla-tracking">GORILLA TRACKING</a>
                <a href="mountain-climbing">MOUNTAIN CLIMBING</a>
                <a href="family-getaways">FAMILY GATEWAYS</a>
              </div>
            )}
          </div>
          <div 
            className="dropdown" 
            onMouseEnter={() => handleMouseEnter(setShowDestinationMenu)} 
            onMouseLeave={() => handleMouseLeave(setShowDestinationMenu)} 
          >
            <button 
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownToggle(setShowDestinationMenu);
              }}
            >
              DESTINATION
            </button>
            {showDestinationMenu && (
              <div className="dropdown-content">
                <a href="african-safaris">AFRICAN SAFARIS</a>
                <a href="outbound-holidays">OUTBOUND HOLIDAYS</a>
              </div>
            )}
          </div>
          <div 
            className="dropdown" 
            onMouseEnter={() => handleMouseEnter(setShowExploreMenu)} 
            onMouseLeave={() => handleMouseLeave(setShowExploreMenu)} 
          >
            <button 
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownToggle(setShowExploreMenu);
              }}
            >
              EXPLORE
            </button>
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
        <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
          <FaBars />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="home">HOME</a>
          <div className="dropdown">
            <button 
              className="dropdown-toggle" 
              onClick={() => handleDropdownToggle(setShowImagineMenu)}
            >
              IMAGINE-EXPERIENCE
            </button>
            {showImagineMenu && (
              <div className="dropdown-content">
                <a href="game-drives">GAME DRIVES</a>
                <a href="air-safaris">AIR SAFARIS</a>
                <a href="balloon-tours">BALLOON TOURS</a>
                <a href="beach-holidays">BEACH HOLIDAYS</a>
                <a href="sightseeing">SIGHTSEEING</a>
                <a href="cultural-visits">CULTURAL VISITS</a>
                <a href="historical-visits">HISTORICAL VISITS</a>
                <a href="gorilla-tracking">GORILLA TRACKING</a>
                <a href="mountain-climbing">MOUNTAIN CLIMBING</a>
                <a href="family-getaways">FAMILY GATEWAYS</a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button 
              className="dropdown-toggle" 
              onClick={() => handleDropdownToggle(setShowDestinationMenu)}
            >
              DESTINATION
            </button>
            {showDestinationMenu && (
              <div className="dropdown-content">
                <a href="african-safaris">AFRICAN SAFARIS</a>
                <a href="outbound-holidays">OUTBOUND HOLIDAYS</a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button 
              className="dropdown-toggle" 
              onClick={() => handleDropdownToggle(setShowExploreMenu)}
            >
              EXPLORE
            </button>
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
      )}
    </nav>
  );
};

export default Navbar;
