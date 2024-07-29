import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="header">
        <h1 className="header-title">About Us</h1>
        <p className="header-subtitle">Empowering Women, One Service at a Time</p>
      </header>

      <section className="service-section">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

const services = [
  {
    title: "Period Support",
    image: "https://img.freepik.com/premium-vector/menstruation-theme-period-various-feminine-hygiene-products-young-girl-is-happy-have-various-feminine-hygiene-products-panties-pads-cups-menstrual-protection-feminine-hygiene-vector_501069-242.jpg?w=740",
    description: "When you need us, we're here. Call us, and we will deliver napkins to your location.",
  },
  {
    title: "Female Bike Ride",
    image: "https://img.freepik.com/premium-photo/cartoon-woman-riding-scooter-with-picture-girl-front_1121404-17544.jpg?w=740",
    description: "Safe and reliable bike rides exclusively for women.",
  },
  {
    title: "Room Booking",
    image: "https://img.freepik.com/free-vector/flat-hotel-booking-concept_23-2148153079.jpg?t=st=1722158786~exp=1722162386~hmac=04b93fecbd7f4334054e1f7fecb8e36f6c0c3d1296161abdc65baf0cf7c085b3&w=740",
    description: "Book a room quickly and easily with our trusted service.",
  },
  {
    title: "Pick Up and Drop",
    image: "https://img.freepik.com/free-vector/safe-food-delivery-concept_23-2148567976.jpg?t=st=1722158890~exp=1722162490~hmac=f3084235cfa1b8dc1ee1a966510cf380770ece85553df508603bfc853574678f&w=740",
    description: "Convenient and safe pick-up and drop services for women.",
  },
  {
    title: "Gynecologist",
    image: "https://img.freepik.com/free-vector/flat-illustration-world-hypertension-day-awareness_23-2150333260.jpg?t=st=1722158434~exp=1722162034~hmac=2bb548d3eb07b82c05b7376e1af1a72406559f9b87db6fa268915bcbc71af612&w=740",
    description: "Consult with our experienced gynecologists for your health needs.",
  },
  {
    title: "Mental Counseling",
    image: "https://img.freepik.com/premium-photo/two-people-are-talking-each-other-one-them-is-holding-laptop_809804-4821.jpg?w=360",
    description: "Professional mental health support to help you through tough times.",
  },
  {
    title: "Fitness",
    image: "https://img.freepik.com/free-photo/fit-cartoon-character-training_23-2151148999.jpg?t=st=1722159971~exp=1722163571~hmac=4a88768865eb32290a8972e59041409375e573cf78a9cd02cae7f3d6c8345391&w=740",
    description: "Stay fit and healthy with our tailored fitness programs.",
  },
];

export default AboutUs;
