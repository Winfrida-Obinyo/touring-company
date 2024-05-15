
import React, { useState, useEffect } from 'react';
import './style.css';

const Clients = () => {
  const testimonials = [
    {
      text: "I had an amazing experience with this company. They provided exceptional service and exceeded my expectations.",
      clientName: "John Doe",
      clientCountry: "USA",
    },
    {
      text: "The team was professional and knowledgeable. They made our trip unforgettable and I would highly recommend them.",
      clientName: "Jane Smith",
      clientCountry: "Canada",
    },
    {
      text: "We were delighted with the quality of service. The attention to detail and personalized approach made our journey truly special.",
      clientName: "Michael Johnson",
      clientCountry: "UK",
    },
    {
      text: "Outstanding support from start to finish. This company goes above and beyond to ensure customer satisfaction.",
      clientName: "Emily Brown",
      clientCountry: "Australia",
    },
    {
      text: "Our family vacation was seamless, thanks to the wonderful team. We can't wait to plan our next adventure with them!",
      clientName: "David Wilson",
      clientCountry: "New Zealand",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Change the interval value (in milliseconds) to adjust transition speed

    return () => clearInterval(intervalId);
  }, [testimonials.length]); // Dependency array to ensure effect runs only once

  const images = ['/images/image16.jpg'];
  const backgroundImage = images[0]; // Since you have only one image

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    opacity: 1,
  };

  return (
    <div className="clients-container" style={backgroundStyle}>
      <div className="content-overlay">
        <div className="left-content">
          <h2>WHAT OUR CLIENTS SAY</h2>
          <button className="read-more-button">Read More Testimonials</button>
        </div>
        <div className="right-content">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial ${
                currentTestimonialIndex === index ? 'active' : ''
              }`}
              style={{ animation: 'slideRightLeft 5s ease-in-out forwards' }}
            >
              <p>{testimonial.text}</p>
              <div className="client-details">
                <span className="client-name">{testimonial.clientName}</span>
                <span className="client-country">{testimonial.clientCountry}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonial-navigation">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`navigation-dot ${
              currentTestimonialIndex === index ? 'active' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Clients;







