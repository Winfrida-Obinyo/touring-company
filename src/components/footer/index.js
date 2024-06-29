import React from 'react';
import './style.css'; 

const Footer = () => {
    return (
        <footer className="footerWrapper">
            <div className="footerSection">
                <h2 >Special Offers</h2>
                <div className="dropdownMenu">
                    <button className="dropdownButton">Select Categories</button>
                    <div className="dropdownContent">
                        <a href="#non-resident-offers">Non Resident Offers</a>
                        <a href="#resident-offers">Resident Offers</a>
                    </div>
                </div>
                <div className='connect'>
                    <h2 className='connect'>Let's Connect</h2>
                    <div className="socialIcons">
                        <a href="#facebook">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                    </div>

                </div>
            </div>


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
                    <li>Egypt</li>
                    <li>Morocco</li>
                    <li>Ethiopia</li>
                    <li>Mauritius</li>
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
                <h2>Contact Us</h2>
                <p>Phone: +123 456 7890</p>
                <p>Email: info@example.com</p>
                <p>Address: 123 Main St, Anytown, USA</p>
            </div>

        </footer>
    );
};

export default Footer;
