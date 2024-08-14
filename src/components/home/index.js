import React, { useState, useEffect, useCallback } from 'react';
import './style.css'; // Import your CSS file for styling
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const images = [
    '/images/beach_front_hotel2.jpg',
    '/images/lions_drinking_water.jpeg',
    '/images/elephants.jpg',
    '/images/image5.jpg',
    '/images/fort_jesus.jpg',
    '/images/beach_sunste.jpg',
    '/images/image17.jpg'
  ];

  const textContent = [
    "Tropical beach with sunbeds under swaying palm trees", 
    "Lions intrigued by their reflection in a puddle", 
    "Majestic elephants roaming the African savanna", 
    "Beachside romance with two cozy chairs under twinkling city lights", 
    "Golden hour sunset painting the beach in a magical glow", 
    "Road trip adventure: Car cruising along a scenic highway", 
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
