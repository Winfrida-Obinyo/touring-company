import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaWhatsapp, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'; // Import FaTimes for close icon

const Navbar = () => {
  const [showImagineMenu, setShowImagineMenu] = useState(false);
  const [showDestinationMenu, setShowDestinationMenu] = useState(false);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const mobileMenuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setShowImagineMenu(false);
        setShowDestinationMenu(false);
        setShowExploreMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prevState => !prevState);
    document.body.classList.toggle('menu-active', !isMobileMenuOpen);
  };

  const handleDropdownToggle = (setShowMenu, currentMenuState) => {
    if (currentMenuState === undefined) {
      setShowMenu(true);
    } else {
      setShowMenu(!currentMenuState);
    }
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
      <div className={`upper ${isScrolled ? 'hidden' : ''}`}>
        <div className="contact-info">
          <span><i className='fab fa-BlenderPhone'></i> +254 745829828</span>
        </div>
        <div className="social-links">
          <a href="https://facebook.com"><FaFacebook /></a>
          <a href="https://wa.me/+254745829828"><FaWhatsapp /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
        </div>
      </div>

      <div className="lower">
        <a href="/">
          <div className="logos">
            <div className="left-image">
              <img src="/images/jewelaremoved bg words_prev_ui.png" alt="Logo" />
            </div>
            <div className="right-image">
              <img src="/images/jewelaremoved bg newafrica img-Photoroom.png" alt="Logo" />
            </div>
          </div>
        </a>
        <div className={`navigation-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="/">HOME</a>
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(setShowImagineMenu)}
            onMouseLeave={() => handleMouseLeave(setShowImagineMenu)}
          >
            <button
              className={`dropdown-toggle button-link ${showImagineMenu ? 'open' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownToggle(setShowImagineMenu, showImagineMenu);
              }}
            >
              JEWELA-EXPERIENCE
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>
            {showImagineMenu && (
              <div className="dropdown-content">
                <ol>
                  <li><a href="/game-drives">GAME DRIVES</a></li>
                  <li><a href="/beach-holidays">BEACH HOLIDAYS</a></li>
                  <li><a href="/cultural-visits">CULTURAL VISITS</a></li>
                  <li><a href="/historical-visits">HISTORICAL VISITS</a></li>
                  <li><a href="/mountain-climbing">MOUNTAIN CLIMBING</a></li>
                  <li><a href="sightseeing">SIGHTSEEING</a></li>
                  <li><a href="air-safaris">AIR SAFARIS</a></li>
                  <li><a href="balloon-tours">BALLOON TOURS</a></li>
                  <li><a href="honeymooners">HONEYMOONERS</a></li>
                  <li><a href="gorilla-tracking">GORILLA TRACKING</a></li>
                  <li><a href="family-getaways">FAMILY GETAWAY</a></li>
                </ol>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(setShowDestinationMenu)}
            onMouseLeave={() => handleMouseLeave(setShowDestinationMenu)}
          >
            <button
              className={`dropdown-toggle button-link ${showDestinationMenu ? 'open' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownToggle(setShowDestinationMenu, showDestinationMenu);
              }}
            >
              DESTINATION
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>
            {showDestinationMenu && (
              <div className="dropdown-content">
                <ol>
                  <li><a href="/safaris">AFRICAN SAFARIS</a></li>
                  <li><a href="outbound-holidays">OUTBOUND HOLIDAYS</a></li>
                </ol>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={() => handleMouseEnter(setShowExploreMenu)}
            onMouseLeave={() => handleMouseLeave(setShowExploreMenu)}
          >
            <button
              className={`dropdown-toggle button-link ${showExploreMenu ? 'open' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleDropdownToggle(setShowExploreMenu, showExploreMenu);
              }}
            >
              EXPLORE
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>
            {showExploreMenu && (
              <div className="dropdown-content">
                <ol>
                  <li><a href="air-travel">AIR TRAVEL</a></li>
                  <li><a href="special-offers">SPECIAL OFFERS</a></li>
                  <li><a href="sample-packages">SAMPLE PACKAGES</a></li>
                  <li><a href="/client-testimonial">TESTIMONIALS</a></li>
                  <li><a href="enquiries">ENQUIRIES</a></li>
                </ol>
              </div>
            )}
          </div>
          <a href="/accommodation">ACCOMMODATION</a>
        </div>
        <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between bars and close icon */}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu" ref={mobileMenuRef}>
          <a href="home">HOME</a>
          <div className="dropdown">
            <button
              className={`dropdown-toggle button-link ${showImagineMenu ? 'open' : ''}`}
              onClick={() => handleDropdownToggle(setShowImagineMenu, showImagineMenu)}
            >
              JEWELA-EXPERIENCE
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>
            {showImagineMenu && (
              <div className="dropdown-content">
                <ol>
                  <li><a href="game-drives">GAME DRIVES</a></li>
                  <li><a href="air-safaris">AIR SAFARIS</a></li>
                  <li><a href="balloon-tours">BALLOON TOURS</a></li>
                  <li><a href="beach-holidays">BEACH HOLIDAYS</a></li>
                  <li><a href="sightseeing">SIGHTSEEING</a></li>
                  <li><a href="cultural-visits">CULTURAL VISITS</a></li>
                  <li><a href="historical-visits">HISTORICAL VISITS</a></li>
                  <li><a href="honeymooners">HONEYMOONERS</a></li>
                  <li><a href="gorilla-tracking">GORILLA TRACKING</a></li>
                  <li><a href="mountain-climbing">MOUNTAIN CLIMBING</a></li>
                  <li><a href="family-getaways">FAMILY GATEWAYS</a></li>
                </ol>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className={`dropdown-toggle button-link ${showDestinationMenu ? 'open' : ''}`}
              onClick={() => handleDropdownToggle(setShowDestinationMenu, showDestinationMenu)}
            >
              DESTINATION
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>
            {showDestinationMenu && (
              <div className="dropdown-content">
                <ol>
                  <li><a href="/destinations">AFRICAN SAFARIS</a></li>
                  <li><a href="outbound-holidays">OUTBOUND HOLIDAYS</a></li>
                </ol>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className={`dropdown-toggle button-link ${showExploreMenu ? 'open' : ''}`}
              onClick={() => handleDropdownToggle(setShowExploreMenu, showExploreMenu)}
            >
              EXPLORE
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>
            {showExploreMenu && (
              <div className="dropdown-content">
                <ol>
                  <li><a href="air-travel">AIR TRAVEL</a></li>
                  <li><a href="special-offers">SPECIAL OFFERS</a></li>
                  <li><a href="sample-packages">SAMPLE PACKAGES</a></li>
                  <li><a href="/client-testimonial">TESTIMONIALS</a></li>
                  <li><a href="enquiries">ENQUIRIES</a></li>
                </ol>
              </div>
            )}
          </div>
          <a href="/accommodation">ACCOMMODATION</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
