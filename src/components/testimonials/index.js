import React from 'react';
import './style.css';

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
  {
    text: "I cannot express enough how impressed I was with the level of service and professionalism provided by this company. Every detail of my trip was carefully curated to meet my expectations, and the personalized touches made the experience extraordinary. I highly recommend them to anyone looking for a seamless and unforgettable travel experience.",
    clientName: "Sophia Davis",
    clientCountry: "Germany",
  },
  {
    text: "From the moment we booked our trip until we returned home, the team made sure everything was perfect. Their expert knowledge and attention to detail transformed our holiday into a lifetime memory. Every part of the itinerary was thoughtfully designed and beautifully executed. Highly recommended for anyone who seeks top-notch travel planning.",
    clientName: "Liam Martinez",
    clientCountry: "Spain",
  },
  {
    text: "This company turned our vacation into a dream come true. The level of care and attention they provided was exceptional. They listened carefully to our preferences and crafted a trip that surpassed our expectations. Their team is not just knowledgeable but also genuinely passionate about delivering the best experiences for their clients.",
    clientName: "Olivia White",
    clientCountry: "South Africa",
  },
  {
    text: "I was blown away by how seamless and well-organized my trip was. From start to finish, every aspect was handled with professionalism and care. The team truly understands what makes a great trip, and they delivered above and beyond. I will definitely be using their services again.",
    clientName: "Lucas Thompson",
    clientCountry: "USA",
  },
  {
    text: "Our experience with this company was nothing short of amazing. They took the time to understand exactly what we wanted and created an itinerary that was perfect for us. Their attention to detail and commitment to excellence really set them apart. Highly recommended for anyone looking for a stress-free travel experience.",
    clientName: "Isabella Lopez",
    clientCountry: "Mexico",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h1 className="page-title">What Our Clients Say</h1>
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="client-name">
              <strong>{testimonial.clientName}</strong>, {testimonial.clientCountry}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
