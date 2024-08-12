import React, { useState } from 'react';
import './style.css';

const Accommodation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const backgroundStyle = {
    backgroundImage: '/images/image16.jpg',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    opacity: 1,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg',
    '/images/image1.jpg',
    '/images/image10.jpg',
    '/images/image11.jpg',
    '/images/image12.jpg',
    '/images/image13.jpg',
    '/images/image14.jpg',
    '/images/image15.jpg',
    '/images/image16.jpg',
    '/images/image17.jpg',
    '/images/image18.jpg',
    '/images/image19.jpg',
    '/images/image20.jpg',
  ];

  const placeDetails = [
    { id: 1, name: 'Place 1', description: 'Description of Place 1' },
    { id: 2, name: 'Place 2', description: 'Description of Place 2' },
    { id: 3, name: 'Place 3', description: 'Description of Place 3' },
    { id: 4, name: 'Place 4', description: 'Description of Place 4' },
    { id: 5, name: 'Place 5', description: 'Description of Place 5' },
    { id: 6, name: 'Place 6', description: 'Description of Place 6' },
    { id: 7, name: 'Place 7', description: 'Description of Place 7' },
    { id: 8, name: 'Place 8', description: 'Description of Place 8' },
    { id: 9, name: 'Place 1', description: 'Description of Place 1' },
    { id: 10, name: 'Place 10', description: 'Description of Place 10' },
    { id: 11, name: 'Place 11', description: 'Description of Place 11' },
    { id: 12, name: 'Place 12', description: 'Description of Place 12' },
    { id: 13, name: 'Place 13', description: 'Description of Place 13' },
    { id: 14, name: 'Place 14', description: 'Description of Place 14' },
    { id: 15, name: 'Place 15', description: 'Description of Place 15' },
    { id: 16, name: 'Place 16', description: 'Description of Place 16' },
    { id: 17, name: 'Place 17', description: 'Description of Place 17' },
    { id: 18, name: 'Place 18', description: 'Description of Place 18' },
  ];

  const openModal = (place) => {
    setSelectedPlace(place);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlace(null);
  };

  return (
    <div className="accommodation-wrapper">
      <div className="accommodation-background" style={backgroundStyle}>
        <div className="accommodation-breadcrumb">home/accommodation</div>
        <h1 className="accommodation-title">Accommodation</h1>
      </div>

      <div className="accommodation-content">
        <div className="accommodation-left-section accommodation-shadow-box">
          <h2 className="accommodation-header">Find Your Accommodation</h2>
          
          {/* Kenya */}
          <div className="accommodation-country-section">
            <h3 className="accommodation-country-title">Kenya</h3>
            <ul className="accommodation-country-list">
              <li><input type="checkbox" id="kenya-all" /><label htmlFor="kenya-all">All</label></li>
              <li><input type="checkbox" id="kenya-laikipia" /><label htmlFor="kenya-laikipia">Laikipia Plateau</label></li>
              <li><input type="checkbox" id="kenya-samburu" /><label htmlFor="kenya-samburu">Samburu and the Mathew Ranges</label></li>
              <li><input type="checkbox" id="kenya-meru" /><label htmlFor="kenya-meru">Meru National Park</label></li>
              <li><input type="checkbox" id="kenya-tsavo" /><label htmlFor="kenya-tsavo">The Tsavo Ecosystem</label></li>
              <li><input type="checkbox" id="kenya-amoseli" /><label htmlFor="kenya-amoseli">Amoseli and Chyulu Hills Ecosystem</label></li>
              <li><input type="checkbox" id="kenya-rift" /><label htmlFor="kenya-rift">The Great Rift Valley</label></li>
              <li><input type="checkbox" id="kenya-nairobi" /><label htmlFor="kenya-nairobi">Nairobi</label></li>
              <li><input type="checkbox" id="kenya-greatmara" /><label htmlFor="kenya-greatmara">Great Mara</label></li>
              <li><input type="checkbox" id="kenya-mara" /><label htmlFor="kenya-mara">Mara Triangle</label></li>
              <li><input type="checkbox" id="kenya-mara-north" /><label htmlFor="kenya-mara-north">Mara North Conservancy</label></li>
              <li><input type="checkbox" id="kenya-diani" /><label htmlFor="kenya-diani">Diani Beach</label></li>
              <li><input type="checkbox" id="kenya-north-coast" /><label htmlFor="kenya-north-coast">North Coast</label></li>
              <li><input type="checkbox" id="kenya-lamu" /><label htmlFor="kenya-lamu">Lamu Archipelago</label></li>
            </ul>
          </div>

          {/* Tanzania */}
          <div className="accommodation-country-section">
            <h3 className="accommodation-country-title">Tanzania</h3>
            <ul className="accommodation-country-list">
              <li><input type="checkbox" id="tanzania-all" /><label htmlFor="tanzania-all">All</label></li>
              <li><input type="checkbox" id="tanzania-arusha" /><label htmlFor="tanzania-arusha">Arusha National Park</label></li>
              <li><input type="checkbox" id="tanzania-tarangire" /><label htmlFor="tanzania-tarangire">Tarangire National Park</label></li>
              <li><input type="checkbox" id="tanzania-ngorongoro" /><label htmlFor="tanzania-ngorongoro">Ngorongoro National Park</label></li>
              <li><input type="checkbox" id="tanzania-serengeti" /><label htmlFor="tanzania-serengeti">Serengeti National Park</label></li>
              <li><input type="checkbox" id="tanzania-lake" /><label htmlFor="tanzania-lake">Lake Manyara National Park</label></li>
            </ul>
          </div>

          {/* Uganda */}
          <div className="accommodation-country-section">
            <h3 className="accommodation-country-title">Uganda</h3>
            <ul className="accommodation-country-list">
              <li><input type="checkbox" id="uganda-all" /><label htmlFor="uganda-all">All</label></li>
              <li><input type="checkbox" id="uganda-murchison" /><label htmlFor="uganda-murchison">Murchison Falls National Park</label></li>
              <li><input type="checkbox" id="uganda-bwindi" /><label htmlFor="uganda-bwindi">Bwindi Impenetrable Park</label></li>
              <li><input type="checkbox" id="uganda-kibale" /><label htmlFor="uganda-kibale">Kibale National Park</label></li>
              <li><input type="checkbox" id="uganda-queen" /><label htmlFor="uganda-queen">Queen Elizabeth National Park</label></li>
            </ul>
          </div>

          {/* Rwanda */}
          <div className="accommodation-country-section">
            <h3 className="accommodation-country-title">Rwanda</h3>
            <ul className="accommodation-country-list">
              <li><input type="checkbox" id="rwanda-all" /><label htmlFor="rwanda-all">All</label></li>
              <li><input type="checkbox" id="rwanda-volcanoes" /><label htmlFor="rwanda-volcanoes">Volcanoes National Park</label></li>
              <li><input type="checkbox" id="rwanda-akagera" /><label htmlFor="rwanda-akagera">Akagera National Park</label></li>
              <li><input type="checkbox" id="rwanda-nyungwe" /><label htmlFor="rwanda-nyungwe">Nyungwe Forest National Park</label></li>
            </ul>
          </div>
        </div>

        <div className="accommodation-right-section">
          <div className="accommodation-image-grid">
            {placeDetails.map((place, index) => (
              <div className="accommodation-image-item" key={place.id}>
                <img src={images[index % images.length]} alt={place.name} />
                <div className="accommodation-overlay">
                  {place.name}
                  <span className="accommodation-view-more" onClick={() => openModal(place)}>View More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedPlace && (
        <div className="accommodation-modal">
          <div className="accommodation-modal-content">
            <button className="accommodation-modal-close" onClick={closeModal}>X</button>
            <div className="accommodation-modal-left">
              <img src={images[selectedPlace.id % images.length]} alt={selectedPlace.name} />
            </div>
            <div className="accommodation-modal-right">
              <h2>{selectedPlace.name}</h2>
              <p>{selectedPlace.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accommodation;