import React from 'react';
import './style.css'; 

const Destinations = () => {
    const backgroundImage = 'images/Jewela_baobab.jpeg'; 

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
        width: '100%',
        height: '66.6vh', 
    };

    return (
        <div className="destinations-container" style={backgroundStyle}>
            <div className="destinations-left">
                <img src="images/Jewela_lions.jpeg" alt="Kenya" />
                <div className="destinations-content">
                    <h2>Kenya Destinations</h2>
                    <p>20 places</p>
                </div>
            </div>

            <div className="destinations-center">
                <div className="destinations-top">
                    <div className="destinations-image-with-content">
                        <img src="images/image16.jpg" alt="Tanzania" />
                        <div className="destinations-content">
                            <h2>Tanzania Destinations</h2>
                            <p>8 places</p>
                        </div>
                    </div>
                    <div className="destinations-image-with-content">
                        <img src="images/image17.jpg" alt="Tanzania" />
                        <div className="destinations-content">
                            <h2>Tanzania Destinations</h2>
                            <p>8 places</p>
                        </div>
                    </div>
                </div>
                <div className="destinations-bottom">
                    <div className="destinations-image-with-content">
                        <img src="images/image18.jpg" alt="Rwanda" />
                        <div className="destinations-content">
                            <h2>Rwanda Destinations</h2>
                            <p>8 places</p>
                        </div>
                    </div>
                    <div className="destinations-image-with-content">
                        <img src="images/image19.jpg" alt="Uganda" />
                        <div className="destinations-content">
                            <h2>Uganda Destinations</h2>
                            <p>10 places</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="destinations-right">
                <div className="destinations-bordered-content">
                    <img src="/images/jewelaremoved bg words_prev_ui.png" alt="Logo" />
                    <h2>Upcoming Holiday Tour Plan</h2>
                    <div className="destinations-countdown">
                        <div className="destinations-countdown-row">
                            <div className="destinations-countdown-box">
                                <span className="destinations-countdown-number">00</span>
                                <span className="destinations-countdown-label">Days</span>
                            </div>
                            <div className="destinations-countdown-box">
                                <span className="destinations-countdown-number">00</span>
                                <span className="destinations-countdown-label">Hours</span>
                            </div>
                        </div>
                        <div className="destinations-countdown-row">
                            <div className="destinations-countdown-box">
                                <span className="destinations-countdown-number">00</span>
                                <span className="destinations-countdown-label">Minutes</span>
                            </div>
                            <div className="destinations-countdown-box">
                                <span className="destinations-countdown-number">00</span>
                                <span className="destinations-countdown-label">Seconds</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Destinations;
