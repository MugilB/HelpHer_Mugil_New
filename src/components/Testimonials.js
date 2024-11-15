import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "./db/Testimonials.json";  // Adjusted path
import "./Testimonials.css";  // Assuming this CSS file is where custom styles are defined

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {/* Title */}
      <h2 className="testimonials-title">Our Testimonials</h2>

      {/* Slider Component */}
      <Slider {...settings}>
        {testimonialData.testimonial.map((tm, i) => (
          <aside key={i} className="testimonial">
            <div className="testimonial-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 559.27 546.15"
                className="testimonial-quote-icon"
              >
                <path d="M336.63,250.54V33.44H553.71v217.1S587.7,503,364.37,512.71V392s85.76,35.63,74.55-141.49Z" />
                <path d="M3.71,250.54V33.44H220.79v217.1S254.78,503,31.46,512.71V392S117.21,427.66,106,250.54Z" />
              </svg>
              <p className="testimonial-message">{tm.message}</p>
              <img
                src={tm.img}
                alt={tm.name}
                width={80}
                height={80}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">
                {tm.name}
                <br />
                <small className="testimonial-location">{tm.location}</small>
              </h3>
            </div>
          </aside>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
