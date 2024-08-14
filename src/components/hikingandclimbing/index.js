import React from 'react';
import './style.css';

const HikingAndClimbing = () => {
  const trails = [
    {
      id: 1,
      name: 'Mount Kenya',
      description: 'Experience the stunning beauty of Kenya’s highest peak, with its diverse ecosystems and breathtaking views.',
      image: 'images/image8.jpg',
    },
    {
      id: 2,
      name: 'Mount Kilimanjaro',
      description: 'Conquer Africa’s tallest mountain and enjoy the scenic trek through lush forests and alpine landscapes.',
      image: 'images/image7.jpg',
    },
    {
      id: 3,
      name: 'Ras Dashen',
      description: 'Explore Ethiopia’s highest peak and take in the dramatic landscapes and rich cultural heritage.',
      image: 'images/image6.jpg',
    },
    {
      id: 4,
      name: 'Rwenzori Mountains',
      description: 'Embark on an adventure in the “Mountains of the Moon,” known for their stunning glaciers and diverse flora and fauna.',
      image: 'images/image5.jpg',
    },
    {
      id: 5,
      name: 'Mount Elgon',
      description: 'Discover the ancient volcanic peak and its unique caldera, along with lush forests and diverse wildlife.',
      image: 'images/image2.jpg',
    },
    {
      id: 6,
      name: 'Simien Mountains',
      description: 'Venture into the Simien Mountains for dramatic scenery, including deep gorges, high peaks, and endemic wildlife.',
      image: 'images/image1.jpg',
    },
  ];

  const gear = [
    {
      id: 1,
      name: 'Hiking Boots',
      description: 'Sturdy boots for rugged terrain.',
      image: 'images/image10.jpg',
    },
    {
      id: 2,
      name: 'Backpack',
      description: 'Comfortable and durable for carrying essentials.',
      image: 'images/image11.jpg',
    },
    {
      id: 3,
      name: 'Tent',
      description: 'Reliable shelter for camping.',
      image: 'images/image12.jpg',
    },
    {
      id: 4,
      name: 'Sleeping Bag',
      description: 'Warm and lightweight for a good night’s sleep.',
      image: 'images/image13.jpg',
    },
    {
      id: 5,
      name: 'Climbing Gear',
      description: 'Essential equipment for rock climbing and safety.',
      image: 'images/image14.jpg',
    },
  ];

  const backgroundImage = '/images/image16.jpg';
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
    <div className="hiking-climbing-container">
      <header className="header" style={backgroundStyle}>
        <div className="header-content">
          <h1>Hiking and Climbing Adventures</h1>
          <p>Explore the world's most breathtaking trails and peaks.</p>
        </div>
      </header>

      <section className="introduction">
        <img src="images/image13.jpg" alt="Introduction" />
        <div className="intro-text">
          <h2>Discover Your Next Adventure</h2>
          <p>Join us as we take you through the most spectacular hiking and climbing experiences. From majestic mountains to serene trails, we have something for every adventure seeker.</p>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Trails and Peaks</h2>
        <div className="featured-grid">
          {trails.map(trail => (
            <div key={trail.id} className="featured-item">
              <img src={trail.image} alt={trail.name} />
              <h3>{trail.name}</h3>
              <p>{trail.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gear-preparation">
        <h2>Essential Gear and Preparation</h2>
        <div className="gear-list">
          {gear.map(item => (
            <div key={item.id} className="gear-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="preparation-tips">
          <h3>Preparation Tips</h3>
          <p>Ensure you're well-prepared for your adventure with the right gear, training, and planning. Check weather conditions, pack essentials, and consult guides if needed.</p>
        </div>
      </section>


      <footer className="footer">
        <p>&copy; 2024 Hiking and Climbing Adventures. All rights reserved.</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HikingAndClimbing;
