import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <footer className="footerWrapper">
            <div className="footerSection">
                <h2>Quick Connect</h2>
                <ul className="quickLinks">
                    <li>Kenya</li>
                    <li>Uganda</li>
                    <li>Tanzania</li>
                    <li>Rwanda</li>
                    <li>Zanzibar</li>
                    <li>Zambia</li>
                    <li>Botswana</li>
                    <li>South Africa</li>
                    <li>Seychelles</li>
                    <li>Outbound Holidays</li>
                    <li>African Packages</li>
                    <li>Outbound Packages</li>
                </ul>
            </div>

            <div className="footerSection">
                <h2>Latest Offers</h2>
                <ul className="offersList">
                    <li>
                        <div>
                            <img src="/images/dubai5.jpg" alt="Oltukai Lodge Amboseli" />
                            Oltukai Lodge Amboseli
                        </div>
                        <span className="location">Amboseli , KENYA</span>
                    </li>
                    <li>
                        <div>
                            <img src="/images/dubai6.jpg" alt="Bluebay Beach Resort" />
                            Bluebay Beach Resort
                        </div>
                        <span className="location">ZANZIBAR</span>
                    </li>
                    <li>
                        <div>
                            <img src="/images/roadtrip1.jpg" alt="Narengai Luxury Camp" />
                            Narengai Luxury Camp
                        </div>
                        <span className="location">Maasai Mara, KENYA</span>
                    </li>
                    <li>
                        <div>
                            <img src="/images/picnic3.jpg" alt="Mara Bush Camp Maasai" />
                            Mara Bush Camp Maasai
                        </div>
                        <span className="location">Maasai Mara ,KENYA</span>
                    </li>
                    <li>
                        <div>
                            <img src="/images/picnic4.jpg" alt="Entumoto Luxury Camp" />
                            Entumoto Luxury Camp
                        </div>
                        <span className="location">Maasai Mara, KENYA</span>
                    </li>
                </ul>
            </div>

            <div className="footerSection">
                <h2>Special Offers</h2>
                <div className="dropdownMenu">
                    <button className="dropdownButton">Select Categories</button>
                    <div className="dropdownContent">
                        <a href="#non-resident-offers">Non Resident Offers</a>
                        <a href="#resident-offers">Resident Offers</a>
                    </div>
                </div>
                <div className="connect">
                    <h2>Let's Connect</h2>
                    <div className="socialIcons">
                        <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://x.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://wa.me/+254745829828"><i className="fab fa-whatsapp"></i></a>
                        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>

            <div className="footerSection">
                <h2>Contact Us</h2>
                <p className='contactus-font'>
                    <FontAwesomeIcon icon={faPhone} /> <span> +254 745 829 828</span>
                </p>
                <p className='contactus-font'>
                    <FontAwesomeIcon icon={faEnvelope} /> <span> info@jewelavacations.com</span>
                </p>
                <p className='contactus-font'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> <span>  Moi ave, Nairobi, Kenya</span>
                </p>
            </div>

            {/* <div className="copyright-footer">
                <p>&copy; 2024 <a href='/'>jewelavacations.com</a> All Rights Reserved.</p>
            </div> */}

        </footer>
    );
};

export default Footer;
