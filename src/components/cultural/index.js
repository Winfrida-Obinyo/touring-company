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
            <div className="accommodation-breadcrumb"><a href="/">Home</a>/Cultural</div>
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
            <img src="images/zimbabwe.jpg" alt="Great Zimbabwe Ruins" />
            <div className="site-info">
                <h3>Great Zimbabwe Ruins, Zimbabwe</h3>
                <p>Ancient stone city that was the capital of the Kingdom of Zimbabwe. Visitors can explore its majestic ruins, including the Great Enclosure and the Hill Complex.</p>
            </div>
        </div>
        <div className="site-item">
            <img src="images/ethiopia.jpg" alt="Lalibela Churches" />
            <div className="site-info">
                <h3>Lalibela Churches, Ethiopia</h3>
                <p>Rock-hewn churches carved out of volcanic rock in the 12th century. These UNESCO World Heritage Sites offer a glimpse into Ethiopia's rich Christian history.</p>
            </div>
        </div>
        <div className="site-item">
            <img src="images/senegal.jpg" alt="Gorée Island" />
            <div className="site-info">
                <h3>Gorée Island, Senegal</h3>
                <p>A small island with a big history, known for its role in the transatlantic slave trade. The House of Slaves and its Door of No Return are poignant reminders of the past.</p>
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
                <a href="/contact" className="cta-button">Book Your Cultural Visit</a>
                <p>For more information, contact us at <a href="mailto:info@jewelavacations.com">info@jewelavacations.com</a>.</p>
            </section>
        </div>
    );
};

export default Cultural;
