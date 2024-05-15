import React, { useState, useEffect } from 'react';
import './style.css';

const Clients = () => {
    const testimonials = [
        {
          text: "My experience with this company was truly remarkable. From the moment I first contacted them, I was impressed by their exceptional service. They were incredibly helpful and knowledgeable, answering all my questions patiently and thoroughly. Throughout the entire process, they exceeded my expectations in every way. They provided personalized recommendations that perfectly aligned with my needs and interests, ensuring a trip I'll never forget.",
          clientName: "John Doe",
          clientCountry: "USA",
        },
        {
          text: "The team at this company is not only professional but also incredibly knowledgeable. Their expertise in travel planning is evident in everything they do. They took the time to understand my desires and crafted a customized itinerary that was both exciting and enriching. They made my trip truly unforgettable, and I wouldn't hesitate to recommend them to anyone seeking a flawless travel experience. Their dedication to customer satisfaction is truly commendable.",
          clientName: "Jane Smith",
          clientCountry: "Canada",
        },
        {
          text: "We were absolutely delighted with the exceptional quality of service provided by this company. Their meticulous attention to detail ensured that every aspect of our journey was flawless. The personalized approach they took made us feel truly valued and cared for. They went above and beyond to create a truly special experience for us, making our trip one we will cherish forever. Their commitment to exceeding customer expectations is truly inspiring.",
          clientName: "Michael Johnson",
          clientCountry: "UK",
        },
        {
          text: "The support I received from this company, from the very beginning to the very end of my travel experience, was nothing short of outstanding. They were always available to answer my questions and address any concerns I had, ensuring a smooth and stress-free journey. Their commitment to customer satisfaction is evident in every interaction. This company truly goes the extra mile to ensure every detail is addressed and that every client has a positive and memorable experience.",
          clientName: "Emily Brown",
          clientCountry: "Australia",
        },
        {
          text: "Our family vacation was truly seamless, thanks in large part to the wonderful team at this company. Their meticulous planning and attention to detail ensured that everything went smoothly, allowing us to relax and enjoy every moment of our trip. Their dedication to creating unforgettable experiences for families is truly commendable. We can't wait to plan our next adventure with them and create even more cherished memories together.",
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
  }, [testimonials.length]);

  const backgroundImage = '/images/image16.jpg';

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
          <div className="testimonial" style={{ animation: 'slideRightLeft 1s ease-in-out forwards' }}>
            <p>
              {testimonials[currentTestimonialIndex].text}
            </p>
            <div className="client-details">
              <span className="client-name">{testimonials[currentTestimonialIndex].clientName}</span>
              <span className="client-country">{testimonials[currentTestimonialIndex].clientCountry}</span>
            </div>
          </div>
          <div className="testimonial-navigation">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`navigation-dot ${currentTestimonialIndex === index ? 'active' : ''}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;









