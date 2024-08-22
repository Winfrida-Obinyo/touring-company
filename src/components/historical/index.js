import React from 'react';
import './style.css';

const Historical = () => {

    const backgroundImage = '/images/ancientruins.jpg'; 
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
        <div className="historical-main-container">
            <header className="historical-header-section" style={backgroundStyle}>
            <div className="accommodation-breadcrumb"><a href="/">Home</a>/Historical</div>
                <div className="historical-header-overlay">
                    <h1>Discover Historical Wonders</h1>
                    <p>Uncover the rich tapestry of history through our curated historical tours.</p>
                </div>
            </header>
            <section className="historical-intro-section">
                <h2>Introduction</h2>
                <p>Step back in time and explore the fascinating historical sites that shaped our world. Our historical tours offer deep insights into ancient civilizations, monumental events, and significant landmarks. Dive into history and enrich your knowledge with immersive experiences.</p>
            </section>
            <section className="historical-highlights-section">
                <h2>Historical Highlights</h2>
                <div className="historical-highlights-grid">
                    <div className="historical-highlight-card">
                        <img src="images/ancientruins.jpg" alt="Ancient Ruins" />
                        <div className="historical-highlight-content">
                            <h3>Ancient Ruins</h3>
                            <p>Explore the remnants of ancient civilizations and their architectural marvels.</p>
                        </div>
                    </div>
                    <div className="historical-highlight-card">
                        <img src="images/historical.jpg" alt="Historical Monuments" />
                        <div className="historical-highlight-content">
                            <h3>Historical Monuments</h3>
                            <p>Visit iconic monuments that tell the story of significant historical events.</p>
                        </div>
                    </div>
                    <div className="historical-highlight-card">
                        <img src="images/museum.jpg" alt="Museums and Exhibits" />
                        <div className="historical-highlight-content">
                            <h3>Museums and Exhibits</h3>
                            <p>Discover artifacts and exhibits that bring history to life.</p>
                        </div>
                    </div>
                    <div className="historical-highlight-card">
                        <img src="images/historicaltours.jpg" alt="Historical Tours" />
                        <div className="historical-highlight-content">
                            <h3>Historical Tours</h3>
                            <p>Join guided tours that provide in-depth knowledge of historical sites and stories.</p>
                        </div>
                    </div>
                    <div className="historical-highlight-card">
                        <img src="images/cultural heritage.jpg" alt="Cultural Heritage" />
                        <div className="historical-highlight-content">
                            <h3>Cultural Heritage</h3>
                            <p>Learn about the cultural heritage and traditions that have shaped history.</p>
                        </div>
                    </div>
                    <div className="historical-highlight-card">
                        <img src="images/ancientart.jpg" alt="Ancient Artifacts" />
                        <div className="historical-highlight-content">
                            <h3>Ancient Artifacts</h3>
                            <p>Examine ancient artifacts and relics that offer a glimpse into past civilizations.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="historical-sites-carousel">
    <h2>Featured Historical Sites</h2>
    <div className="historical-sites-carousel-items">
        <div className="historical-site-card">
            <img src="images/fort jesus.jpg" alt="Fort Jesus" />
            <div className="historical-site-info">
                <h3>Fort Jesus</h3>
                <p>Fort Jesus in Mombasa is a UNESCO World Heritage Site, built by the Portuguese in the 16th century. It’s significant for its role in the trade routes and military history of the region.</p>
            </div>
        </div>
        <div className="historical-site-card">
            <img src="images/gedi ruins.jpg" alt="Gedi Ruins" />
            <div className="historical-site-info">
                <h3>Gedi Ruins</h3>
                <p>The Gedi Ruins, located near Malindi, are the remnants of a Swahili town dating back to the 13th century. It showcases the sophisticated architecture and culture of the time.</p>
            </div>
        </div>
        <div className="historical-site-card">
            <img src="images/karen.jpg" alt="Karen Blixen Museum" />
            <div className="historical-site-info">
                <h3>Karen Blixen Museum</h3>
                <p>The Karen Blixen Museum in Nairobi is the former home of the famous author, Karen Blixen, who wrote 'Out of Africa.' It offers insights into colonial history and her life in Kenya.</p>
            </div>
        </div>
    </div>
</section>

            <section className="historical-local-experiences">
                <div className="historical-map-container">
                    <iframe src="https://maps.google.com/maps?q=historical%20sites&t=&z=10&ie=UTF8&iwloc=&output=embed" title="Historical Map"></iframe>
                </div>
                <div className="historical-experiences-details">
                    <h3>Local Experiences</h3>
                    <p>Engage with local experts on historical tours that offer rich insights and engaging narratives.</p>
                    <p>Participate in workshops and activities that delve into historical contexts and artifacts.</p>
                </div>
            </section>
            <section className="historical-testimonials-slider-section">
                <h2>What Our Visitors Say</h2>
                <div className="historical-testimonials-slider">
                    <div className="historical-testimonial-card">
                        <p>"An incredible journey through history! The guided tours were both educational and captivating."</p>
                        <p>- Alex Brown</p>
                    </div>
                    <div className="historical-testimonial-card">
                        <p>"The historical sites we visited were absolutely fascinating. Highly recommended for history enthusiasts!"</p>
                        <p>- Sarah White</p>
                    </div>
                    <div className="historical-testimonial-card">
                        <p>"A remarkable experience with in-depth historical insights. We learned so much and had a great time."</p>
                        <p>- Michael Green</p>
                    </div>
                </div>
            </section>
            <section className="historical-faq-accordion-section">
                <h2>Frequently Asked Questions</h2>
                <div className="historical-faq-accordion">
                    <div className="historical-faq-item">
                        <button className="historical-faq-item-title">What is included in the historical visit?</button>
                        <div className="historical-faq-item-content">
                            <p>Details about what is included, such as tours, activities, and historical insights.</p>
                        </div>
                    </div>
                    <div className="historical-faq-item">
                        <button className="historical-faq-item-title">How do I book a historical visit?</button>
                        <div className="historical-faq-item-content">
                            <p>Instructions on how to book or contact for more information.</p>
                        </div>
                    </div>
                    <div className="historical-faq-item">
                        <button className="historical-faq-item-title">Are there any specific requirements or recommendations?</button>
                        <div className="historical-faq-item-content">
                            <p>Information on what visitors should know or prepare for.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="historical-cta-section">
                <a href="/book" className="historical-cta-button">Book Your Historical Visit</a>
                <p>For more information, contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
            </section>
        </div>
    );
};

export default Historical;
