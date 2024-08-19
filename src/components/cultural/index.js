import React from 'react';
import './style.css';

const Cultural = () => {


    const backgroundImage = 'images/localcrafts.jpg';
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
        <div className="cultural-container">
            <header className="cultural-header" style={backgroundStyle}>
                <div className="header-overlay">
                    <h1>Explore Cultural Wonders</h1>
                    <p>Experience the rich heritage and traditions of our diverse destinations.</p>
                </div>
            </header>
            <section className="cultural-intro">
                <h2>Introduction</h2>
                <p>Embark on a cultural journey like no other. Our curated cultural visits offer an immersive experience into the heart of traditional practices, festivals, and historical landmarks. Whether you're interested in ancient history, vibrant arts, or local cuisine, we have something for every cultural enthusiast.</p>
            </section>
            <section className="cultural-highlights">
                <h2>Cultural Highlights</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <img src="images/traditional festivals.jpg" alt="Traditional Festivals" />
                        <div className="highlight-content">
                            <h3>Traditional Festivals</h3>
                            <p>Experience the vibrant celebrations and ceremonies that define local cultures.</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <img src="images/historicallandmarks.jpg" alt="Historic Landmarks" />
                        <div className="highlight-content">
                            <h3>Historic Landmarks</h3>
                            <p>Explore ancient ruins and historical sites that tell the story of our past.</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <img src="images/localcrafts.jpg" alt="Local Crafts and Cuisine" />
                        <div className="highlight-content">
                            <h3>Local Crafts and Cuisine</h3>
                            <p>Discover traditional crafts and savor authentic local dishes.</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <img src="images/artand cultural.jpg" alt="Art and Music" />
                        <div className="highlight-content">
                            <h3>Art and Music</h3>
                            <p>Immerse yourself in the rich artistic traditions and musical heritage of the region.</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <img src="images/religious.jpg" alt="Religious Sites" />
                        <div className="highlight-content">
                            <h3>Religious Sites</h3>
                            <p>Visit sacred places and learn about the spiritual practices of local communities.</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <img src="images/traditionalclothing.jpg" alt="Traditional Clothing" />
                        <div className="highlight-content">
                            <h3>Traditional Clothing</h3>
                            <p>Explore the unique fashion and attire that reflect cultural identities and traditions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cultural-sites">
                <h2>Featured Cultural Sites</h2>
                <div className="sites-carousel">
                    <div className="site-item">
                        <img src="images/image7.jpg" alt="Site 1" />
                        <div className="site-info">
                            <h3>Site Name 1</h3>
                            <p>Brief description of the site. Why it’s significant and what visitors can expect.</p>
                        </div>
                    </div>
                    <div className="site-item">
                        <img src="images/image8.jpg" alt="Site 2" />
                        <div className="site-info">
                            <h3>Site Name 2</h3>
                            <p>Brief description of the site. Why it’s significant and what visitors can expect.</p>
                        </div>
                    </div>
                    <div className="site-item">
                        <img src="images/image10.jpg" alt="Site 3" />
                        <div className="site-info">
                            <h3>Site Name 3</h3>
                            <p>Brief description of the site. Why it’s significant and what visitors can expect.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="local-experiences">
                <div className="map-container">
                    <iframe src="https://maps.google.com/maps?q=cultural%20sites&t=&z=10&ie=UTF8&iwloc=&output=embed" title="Cultural Map"></iframe>
                </div>
                <div className="experiences-details">
                    <h3>Local Experiences</h3>
                    <p>Join local experts on guided tours that offer deep insights into cultural practices and history.</p>
                    <p>Participate in workshops and activities that allow you to engage with local traditions.</p>
                </div>
            </section>
            <section className="testimonials">
                <h2>What Our Visitors Say</h2>
                <div className="testimonials-slider">
                    <div className="testimonial-item">
                        <p>"An unforgettable experience! The cultural immersion was truly eye-opening."</p>
                        <p>- Jane Doe</p>
                    </div>
                    <div className="testimonial-item">
                        <p>"The guided tours and local experiences exceeded our expectations. Highly recommended!"</p>
                        <p>- John Smith</p>
                    </div>
                    <div className="testimonial-item">
                        <p>"A perfect blend of history, culture, and adventure. We loved every moment."</p>
                        <p>- Emily Johnson</p>
                    </div>
                </div>
            </section>
            <section className="faqs">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-accordion">
                    <div className="faq-item">
                        <button className="faq-title">What is included in the cultural visit?</button>
                        <div className="faq-content">
                            <p>Details about what is included, such as tours, activities, meals, etc.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-title">How do I book a cultural visit?</button>
                        <div className="faq-content">
                            <p>Instructions on how to book or contact for more information.</p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-title">Are there any specific requirements or recommendations?</button>
                        <div className="faq-content">
                            <p>Information on what visitors should know or prepare for.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta">
                <a href="/book" className="cta-button">Book Your Cultural Visit</a>
                <p>For more information, contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
            </section>
        </div>
    );
};

export default Cultural;
