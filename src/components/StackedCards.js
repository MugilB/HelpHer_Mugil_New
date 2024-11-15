import React, { useEffect } from "react";
import "./StackedCards.css"; // Move the CSS to an external file if preferred
import { color } from "framer-motion";

const StackedCards = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const stackArea = document.querySelector(".stack-area");

    const rotateCards = () => {
      let angle = 0;
      cards.forEach((card) => {
        if (card.classList.contains("active")) {
          card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle -= 10;
        }
      });
    };

    const handleScroll = () => {
      const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        const n = cards.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;
        for (let i = 0; i < n; i++) {
          if (i <= index) {
            cards[i].classList.add("active");
          } else {
            cards[i].classList.remove("active");
          }
        }
        rotateCards();
      }
    };

    const adjustLayout = () => {
      const windowWidth = window.innerWidth;
      const left = document.querySelector(".left");
      left.remove();
      if (windowWidth < 800) {
        stackArea.insertAdjacentElement("beforebegin", left);
      } else {
        stackArea.insertAdjacentElement("afterbegin", left);
      }
    };

    rotateCards();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", adjustLayout);

    adjustLayout();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", adjustLayout);
    };
  }, []);

  return (
    <div className="center">
      <div className="stack-area">
        <div className="left">
          <div className="title">Our Features</div>
          <div className="sub-title">
            Explore a range of services designed to make your life easier and more secure.
            <br />
            {/* <button style={{ backgroundColor: '#ff66a3' }}>See More Details</button> */}

          </div>
        </div>
        <div className="right">
          <div className="cards">
            <div className="card">
              <div className="sub">Napkin Delivery</div>
              <div className="content">Convenient doorstep delivery for urgent needs</div>
            </div>
            <div className="card">
              <div className="sub">Female Bike Ride</div>
              <div className="content">Safe and reliable rides exclusively for females</div>
            </div>
            <div className="card">
              <div className="sub">Pick and Drop</div>
              <div className="content">Hassle-free transport solutions, whenever you need</div>
            </div>
            <div className="card">
              <div className="sub">Room Booking</div>
              <div className="content">Easy bookings for short or long stays</div>
            </div>
            <div className="card">
              <div className="sub">Gynecologist Consultations</div>
              <div className="content">Access to health advice from expert gynecologists</div>
            </div>
            <div className="card">
              <div className="sub">Mental Counseling</div>
              <div className="content">Qualified mental health support </div>
            </div>
            <div className="card">
              <div className="sub">Cyber Crime Support</div>
              <div className="content">Dedicated help for cyber safety and crime issues</div>
            </div>
            <div className="card">
              <div className="sub">Fitness Tips</div>
              <div className="content">Personalized guidance for a healthier lifestyle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
