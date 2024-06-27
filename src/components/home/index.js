import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS file for styling
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const images = [
    '/images/image11.jpg',
    '/images/image3.jpg',
    '/images/image8.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg'
  ];

  const textContent = [
    "BEAUTIFUL MOUNTAIN LANDSCAPE",
    "SERENE OCEAN SUNSET",
    "CITYSCAPE AT NIGHT",
    "LUSH GREEN FOREST",
    "ELEGANT ARCHITECTURE",
    "GOLDEN HOUR ON THE BEACH",
    "VIBRANT CITY LIGHTS"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext(); // Move to the next image
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="home-container">
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${image})` }}>
            <div className="overlay">
              <p className="overlay-text">{textContent[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrev}><FaArrowLeft /></button>
        <button onClick={handleNext}><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default Home;
