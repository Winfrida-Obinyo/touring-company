import React, { useState } from 'react';
import './style.css';

const Accommodation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

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
    '/images/image18.jpg',
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
  ];

  const placeDetails = [
    { id: 1, name: 'Nairobi', description: 'Nairobi is Kenya’s bustling capital city, known for its vibrant culture, diverse population, and rich history. It serves as a major economic, political, and cultural hub in East Africa, offering attractions such as the Nairobi National Park, the Giraffe Centre, and a thriving arts and dining scene.' },
    { id: 2, name: 'Mombasa', description: 'Mombasa is Kenya’s second-largest city, located on the Indian Ocean coast. Renowned for its stunning beaches, historical sites, and lively atmosphere, Mombasa is home to landmarks like Fort Jesus, a UNESCO World Heritage site, and offers a blend of Swahili culture and modern attractions.' },
    { id: 3, name: 'Laikipia Plateau', description: 'The Laikipia Plateau is a highland region in Kenya, known for its extensive ranches, private conservancies, and rich biodiversity. This area is ideal for wildlife viewing, including elephants, lions, and rare species like the Grevy’s zebra, and offers a more exclusive safari experience.' },
    { id: 4, name: 'Samburu', description: 'Samburu is a semi-arid region in northern Kenya renowned for its unique wildlife and cultural heritage. The area is home to the Samburu people and offers opportunities to see rare species such as the reticulated giraffe and Somali ostrich, as well as spectacular landscapes and dramatic scenery.' },
    { id: 5, name: 'Meru National Park', description: 'Meru National Park is located in eastern Kenya and is celebrated for its diverse landscapes, ranging from woodlands and savannahs to swamps and rivers. The park is known for its vibrant wildlife, including elephants, lions, and a variety of bird species, as well as its lush vegetation and scenic beauty.' },
    { id: 6, name: 'Tsavo', description: 'Tsavo National Parks, divided into Tsavo East and Tsavo West, are among Kenya’s largest and most famous wildlife reserves. Known for their rugged terrain and diverse ecosystems, they offer a wide range of wildlife experiences, including sightings of the “Tsavo Lions” and herds of elephants.' },
    { id: 7, name: 'Amboseli', description: 'Amboseli National Park, located in southern Kenya near the Tanzanian border, is famous for its large herds of elephants and breathtaking views of Mount Kilimanjaro. The park’s diverse habitats include swamps, savannahs, and woodlands, providing excellent opportunities for wildlife viewing and photography.' },
    { id: 8, name: 'Great Rift Valley', description: 'The Great Rift Valley is a geological and ecological wonder stretching from Ethiopia to Mozambique. In Kenya, it features stunning landscapes such as the escarpment, various lakes, and volcanic mountains. The valley is rich in wildlife and offers unique experiences like hot springs and dramatic scenery.' },
    { id: 9, name: 'Mara Triangle', description: 'The Mara Triangle is part of the Maasai Mara National Reserve and is renowned for its exceptional wildlife, especially during the Great Migration. This area offers prime game viewing opportunities, including the famous Mara River crossings, and is known for its rich ecosystem and abundant predator sightings.' },
    { id: 10, name: 'Diani Beach', description: 'Diani Beach is a picturesque coastal town on Kenya’s Indian Ocean shoreline, known for its pristine white sandy beaches and turquoise waters. It’s a popular destination for relaxation, water sports, and exploring the nearby coral reefs and marine life.' },
    { id: 11, name: 'Lamu Archipelago', description: 'The Lamu Archipelago consists of several islands off the coast of Kenya, celebrated for their well-preserved Swahili culture and architecture. The islands feature narrow streets, traditional dhow boats, and a relaxed atmosphere, making them perfect for cultural exploration and tranquil retreats.' },
    { id: 12, name: 'Arusha National Park', description: 'Arusha National Park, located in northern Tanzania, is known for its diverse ecosystems, including montane forests, lakes, and grasslands. The park is home to Mount Meru, the second-highest peak in Tanzania, and offers excellent opportunities for walking safaris, game drives, and birdwatching.' },
    { id: 13, name: 'Tarangire National Park', description: 'Tarangire National Park is located in northern Tanzania and is renowned for its large herds of elephants and iconic baobab trees. The park’s diverse habitats support a rich variety of wildlife, including buffalo, lions, and a wealth of bird species, making it a key destination for safari enthusiasts.' },
    { id: 14, name: 'Ngorongoro', description: 'The Ngorongoro Crater is a vast volcanic caldera in Tanzania, known for its stunning landscapes and high concentration of wildlife. The crater floor is home to diverse species such as black rhinos, lions, and flamingos, offering an exceptional game viewing experience in a unique setting.' },
    { id: 15, name: 'Serengeti', description: 'The Serengeti National Park is one of Tanzania’s most famous wildlife reserves, known for its vast plains and the annual migration of wildebeests and zebras. The park offers incredible wildlife viewing opportunities, including big cats, elephants, and a plethora of bird species, set against a dramatic backdrop.' },
    { id: 16, name: 'Lake Manyara', description: 'Lake Manyara National Park is situated in northern Tanzania and is famous for its large population of flamingos and tree-climbing lions. The park features a range of habitats, including a soda lake, dense forests, and open grasslands, supporting a diverse array of wildlife and birdlife.' },
    { id: 17, name: 'Murchison Falls', description: 'Murchison Falls National Park, located in northwestern Uganda, is known for its powerful waterfalls and rich wildlife. The park offers a variety of activities, including boat safaris to view hippos and crocodiles, game drives to see lions and elephants, and hiking trails with scenic views of the falls.' },
    { id: 18, name: 'Bwindi Impenetrable Park', description: 'Bwindi Impenetrable National Park is a UNESCO World Heritage site in southwestern Uganda, renowned for its mountain gorillas. The park’s dense forests and steep terrain provide a habitat for these endangered primates, offering thrilling gorilla trekking experiences and opportunities to witness diverse flora and fauna.' },
    { id: 19, name: 'Kibale National Park', description: 'Kibale National Park, located in western Uganda, is known for its high primate diversity and is often referred to as the “Primate Capital of the World.” The park is home to chimpanzees, red colobus monkeys, and other primate species, as well as a variety of birdlife and beautiful landscapes.' },
    { id: 20, name: 'Volcanoes National Park', description: 'Volcanoes National Park, situated in northwestern Rwanda, is famous for its mountain gorillas and volcanic landscapes. The park offers guided gorilla trekking tours, scenic hikes to volcanic peaks, and opportunities to explore the rich biodiversity of this stunning region.' },
    { id: 21, name: 'New Location 1', description: 'New Location 1 is an emerging destination known for its unique attractions and cultural experiences. It offers visitors a chance to explore uncharted territories, with potential highlights including local traditions, natural landscapes, and engaging activities.' },
    { id: 22, name: 'New Location 2', description: 'New Location 2 is a recently discovered site offering a mix of scenic beauty and cultural heritage. Visitors can expect to experience a range of attractions, from historical landmarks to natural wonders, providing a fresh perspective on the region.' },
    { id: 23, name: 'New Location 3', description: 'New Location 3 features a blend of traditional and modern experiences, making it an exciting addition to any travel itinerary. This destination promises a range of activities and sights, including local festivals, historical sites, and picturesque landscapes.' },
    { id: 24, name: 'New Location 4', description: 'New Location 4 offers a unique travel experience with its distinctive attractions and rich cultural background. Visitors can explore a variety of points of interest, from ancient landmarks to contemporary developments, enhancing their overall travel experience.' },
    { id: 25, name: 'New Location 5', description: 'New Location 5 is an intriguing destination that provides visitors with a diverse range of activities and experiences. From exploring its natural beauty to immersing in its cultural heritage, this location has something to offer for every type of traveler.' },
    { id: 26, name: 'New Location 6', description: 'New Location 6 is a captivating site known for its exceptional attractions and cultural significance. Whether you’re interested in outdoor adventures or exploring local traditions, this destination offers a memorable experience for all visitors.' },
    { id: 27, name: 'New Location 7', description: 'New Location 7 is a vibrant and dynamic place that showcases a mix of natural wonders and cultural heritage. It provides an opportunity to engage with unique landscapes, local customs, and various activities that make it an appealing destination.' },
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

      <div className="accommodation-main">
        <div className="accommodation-left-section">
          <div className="accommodation-content">
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
                <li><input type="checkbox" id="kenya-amboseli" /><label htmlFor="kenya-amboseli">Amboseli and Chyulu Hills Ecosystem</label></li>
                <li><input type="checkbox" id="kenya-rift" /><label htmlFor="kenya-rift">The Great Rift Valley</label></li>
                <li><input type="checkbox" id="kenya-nairobi" /><label htmlFor="kenya-nairobi">Nairobi</label></li>
                <li><input type="checkbox" id="kenya-diani" /><label htmlFor="kenya-diani">Diani Beach</label></li>
                <li><input type="checkbox" id="kenya-lamu" /><label htmlFor="kenya-lamu">Lamu Archipelago</label></li>
                <li><input type="checkbox" id="kenya-coast" /><label htmlFor="kenya-lamu">North Coast</label></li>


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
                <li><input type="checkbox" id="tanzania-lake" /><label htmlFor="tanzania-lake">Lake Manyara</label></li>
              </ul>
            </div>

            {/* Uganda */}
            <div className="accommodation-country-section">
              <h3 className="accommodation-country-title">Uganda</h3>
              <ul className="accommodation-country-list">
                <li><input type="checkbox" id="uganda-all" /><label htmlFor="uganda-all">All</label></li>
                <li><input type="checkbox" id="uganda-murchison" /><label htmlFor="uganda-murchison">Murchison Falls</label></li>
                <li><input type="checkbox" id="uganda-bwindi" /><label htmlFor="uganda-bwindi">Bwindi Impenetrable Park</label></li>
                <li><input type="checkbox" id="uganda-kibale" /><label htmlFor="uganda-kibale">Kibale National Park</label></li>
                <li><input type="checkbox" id="uganda-queen" /><label htmlFor="uganda-Queen Elizabeth">Queen Elizabeth National Park</label></li>

              </ul>
            </div>

            {/* Rwanda */}
            <div className="accommodation-country-section">
              <h3 className="accommodation-country-title">Rwanda</h3>
              <ul className="accommodation-country-list">
                <li><input type="checkbox" id="rwanda-all" /><label htmlFor="rwanda-all">All</label></li>
                <li><input type="checkbox" id="rwanda-volcanoes" /><label htmlFor="rwanda-volcanoes">Volcanoes National Park</label></li>
                <li><input type="checkbox" id="rwanda-park" /><label htmlFor="nyungwe-national-park">Nyungwe National Park</label></li>
                <li><input type="checkbox" id="rwanda-lake" /><label htmlFor="lake-kivu">Lake Kivu</label></li>
                <li><input type="checkbox" id="rwanda-kigali" /><label htmlFor="kigali">Kigali</label></li>
                <li><input type="checkbox" id="rwanda-park" /><label htmlFor="akagera-national-park">Akagera National Park</label></li>




              </ul>
            </div>
          </div>
        </div>

        <div className="accommodation-right-section">
          <div className="accommodation-image-grid">
            {images.slice(0, 27).map((image, index) => (
              <div className="accommodation-image-item" key={index}>
                <img src={image} alt={`Place ${index + 1}`} />
                <div className="accommodation-image-title">{placeDetails[index].name}</div>
                <button onClick={() => openModal(placeDetails[index])}>View More</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="accommodation-modal">
        <div className="accommodation-modal-content">
          <div className="accommodation-modal-left">
            <img src={images[0]} alt="Selected Place" />
          </div>
          <div className="accommodation-modal-right">
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.description}</p>
          </div>
          <button className="accommodation-modal-close" onClick={closeModal}>&times;</button>
        </div>
      </div>
      )}
    </div>
  );
};

export default Accommodation;
