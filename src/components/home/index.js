import React, { useState, useEffect, useCallback } from 'react';
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
    '/images/image17.jpg'
  ];

  const textContent = [
    "Tropical beach with sunbeds under swaying palm trees", // image11.jpg
    "Lions intrigued by their reflection in a roadside puddle", // image3.jpg
    "Majestic elephants roaming the African savanna", // image8.jpg
    "Beachside romance with two cozy chairs under twinkling city lights", // image5.jpg
    "Awaiting adventure: Grand architecture bathed in warm light", // image6.jpg
    "Golden hour sunset painting the beach in a magical glow", // image7.jpg
    "Road trip adventure: Car cruising along a scenic highway", // image17.jpg
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [handleNext]);

  return (
    <div className="home-container">
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${image})` }}>
            <p className="slide-text">{textContent[index]}</p>
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
