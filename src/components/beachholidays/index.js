import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faSwimmer, faVolleyballBall} from '@fortawesome/free-solid-svg-icons';


const backgroundImage = 'images/beach_front_hotel2.jpg'; 

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

const BeachHolidays = () => {
  return (
    <div className="beach-holidays">
      <section className="hero-section" style={backgroundStyle}>
      <div className="accommodation-breadcrumb"><a href="/">Home</a>/Beach Holidays</div>
        <div className="hero-content">
          <h1>Your Dream Beach Vacation Awaits</h1>
          <p>Relax, Unwind, and Enjoy the Sun</p>
          <button className="cta-button">Plan Your Trip</button>
        </div>
      </section>

      <section className="introduction-section">
  <div className="introduction-content">
    <div className="intro-text">
      <h2>Explore Our Beach Destinations</h2>
      <p>We offer the best beach destinations where you can relax, enjoy, and create unforgettable memories.</p>
    </div>
    <div className="intro-images">
      <div className="image-container">
        <img src="/images/beach_front_hotel.jpg" alt="Beach 1" />
        <div className="caption">Luxurious Beach Front Hotel</div>
      </div>
      <div className="image-container">
        <img src="/images/sunset.jpg" alt="Beach 2" />
        <div className="caption">Sunset View at the Beach</div>
      </div>
      <div className="image-container">
        <img src="images/dubai beaches.jpg" alt="Beach 3" />
        <div className="caption">Dubai's Stunning Beaches</div>
      </div>
      <div className="image-container">
        <img src="images/beach picnic.jpg" alt="Beach 4" />
        <div className="caption">Perfect Beach Picnic</div>
      </div>
      <div className="image-container">
        <img src="images/relax2.jpg" alt="Beach 5" />
        <div className="caption">Relaxing by the Shore</div>
      </div>
      <div className="image-container">
        <img src="images/family fun2.jpg" alt="Beach 6" />
        <div className="caption">Family Fun at the Beach</div>
      </div>
    </div>
  </div>
</section>



      <section className="featured-destinations">
        <h2>Featured Beach Destinations</h2>
        <div className="destination-grid">
          <div className="destination-card">
            <img src="/images/maldives.jpg" alt="Beach Destination 1" />
            <div className="destination-info">
              <h3>Maldives</h3>
              <p>Experience the crystal-clear waters and white sandy beaches.</p>
            </div>
          </div>
          <div className="destination-card">
            <img src="/images/bora.jpg" alt="Beach Destination 2" />
            <div className="destination-info">
              <h3>Bora Bora</h3>
              <p>A tropical paradise known for its turquoise lagoon.</p>
            </div>
          </div>
          <div className="destination-card">
            <img src="/images/seychelles.jpg" alt="Beach Destination 3" />
            <div className="destination-info">
              <h3>Seychelles</h3>
              <p>Explore the untouched beaches and lush greenery.</p>
            </div>
          </div>
          <div className="destination-card">
            <img src="/images/bahamas.jpg" alt="Beach Destination 4" />
            <div className="destination-info">
              <h3>Bahamas</h3>
              <p>Relax on pink sand beaches and swim with dolphins.</p>
            </div>
          </div>
          <div className="destination-card">
            <img src="/images/hawaii.jpg" alt="Beach Destination 5" />
            <div className="destination-info">
              <h3>Hawaii</h3>
              <p>Enjoy the vibrant culture and stunning coastal views.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="beach-activities">
  <h2>Beach Activities</h2>
  <div className="activities-grid">
    <div className="activity-block">
      <FontAwesomeIcon icon={faWater} className="activity-icon" />
      <h3>Snorkeling</h3>
      <p>Discover the underwater world and vibrant marine life.</p>
    </div>
    {/* <div className="activity-block">
      <FontAwesomeIcon icon={faWave} className="activity-icon" />
      <h3>Surfing</h3>
      <p>Ride the waves and experience the thrill of the ocean.</p>
    </div> */}
    <div className="activity-block">
      <FontAwesomeIcon icon={faVolleyballBall} className="activity-icon" />
      <h3>Beach Volleyball</h3>
      <p>Get active with a game of beach volleyball with friends.</p>
    </div>
    <div className="activity-block">
      <FontAwesomeIcon icon={faSwimmer} className="activity-icon" />
      <h3>Paddle Boarding</h3>
      <p>Glide across the water and enjoy the scenic views.</p>
    </div>
    {/* <div className="activity-block">
      <FontAwesomeIcon icon={faKayak} className="activity-icon" />
      <h3>Kayaking</h3>
      <p>Explore the coastline and hidden coves by kayak.</p>
    </div> */}
  </div>
</section>

      <section className="beach-moments">
        <h2>Beach Moments</h2>
        <div className="moments-grid">
          <div className="moment-card">
            <img src="/images/sunsetstroll.jpg" alt="Sunset Stroll" />
            <div className="moment-info">
              <h3>Sunset Stroll</h3>
              <p>Experience the serene beauty of a sunset walk </p>
            </div>
          </div>
          <div className="moment-card">
            <img src="/images/tropical.jpg" alt="Tropical Paradise" />
            <div className="moment-info">
              <h3>Tropical Paradise</h3>
              <p>Relax under the palm trees with a refreshing drink.</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="/images/ocean.jpg" alt="Ocean Adventure" />
            <div className="moment-info">
              <h3>Ocean Adventure</h3>
              <p>Embark on an exciting boat ride to explore hidden coves.</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="/images/beachdining.jpg" alt="Beachfront Dining" />
            <div className="moment-info">
              <h3>Beachfront Dining</h3>
              <p>Enjoy a gourmet meal with a view of the rolling waves.</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="/images/seashell.jpg" alt="Seashell Collection" />
            <div className="moment-info">
              <h3>Seashell Collection</h3>
              <p>Collect unique seashells as a keepsake from your trip.</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="/images/morningyoga.jpg" alt="Morning Yoga" />
            <div className="moment-info">
              <h3>Morning Yoga</h3>
              <p>Start your day with a peaceful yoga session on the sand.</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="/images/sandcustle.jpg" alt="Sandcastle Fun" />
            <div className="moment-info">
              <h3>Sandcastle Fun</h3>
              <p>Build your dream castle with your family on the shore.</p>
            </div>
          </div>
          <div className="moment-card">
            <img src="/images/bonfire.jpg" alt="Bonfire Nights" />
            <div className="moment-info">
              <h3>Bonfire Nights</h3>
              <p>End your day with a cozy bonfire under the stars.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Book Your Beach Getaway?</h2>
        <button className="cta-button">Explore Our Packages</button>
      </section>
    </div>
  );
};

export default BeachHolidays;
