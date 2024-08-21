import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Specialty = () => {
    return (
        <div className="specialty-container">
            <h2 className="section-header">OUR SPECIALTY</h2>
            <p className="section-subheader">EXPERIENCE AFRICAN MOMENTS</p>

            <div className="subtopics">
                <Subtopic
                    title="AFRICAN SAFARIS"
                    imagePath="/images/Jewela_lions.jpeg"
                    description="Explore the wilderness of Africa on our thrilling safaris. Discover diverse wildlife and breathtaking landscapes. Join our expert guides for an unforgettable adventure."
                    buttonText="African Safaris"
                    redirect="/destinations"
                    />
                <Subtopic
                    title="OUTBOUND HOLIDAYS"
                    imagePath="/images/dubai2.jpg"
                    description="Embark on unforgettable holidays to exotic destinations. From sandy beaches to bustling cities, our holiday packages offer relaxation and exploration."
                    buttonText="OutBond Holidays"
                    redirect="/outbound_holidays"
                />
                <Subtopic
                    title="AIR TRAVELS"
                    imagePath="/images/hot_air_baloon.jpg"
                    description="Fly with us to your dream destinations across the globe. Experience comfort and convenience with our top-notch airline services. Your journey begins with us."
                    buttonText="Air Travels"
                    redirect="/air_travels"                />
            </div>
        </div>
    );
};

const Subtopic = ({ title, imagePath, description, buttonText, redirect }) => {
    return (
        <div className="subtopic">
            <h3>{title}</h3>
            <img src={imagePath} alt={title} className="subtopic-image" />
            <p className="subtopic-description">{description}</p>
            {/* <button className="subtopic-button">{buttonText}</button> */}
            <Link to={redirect}>
                <button className="subtopic-button">{buttonText}</button>
            </Link>
        </div>
    );
};

export default Specialty;

