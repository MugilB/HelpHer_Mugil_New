import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  // State to toggle between monthly and yearly view
  const [isMonthly, setIsMonthly] = useState(true);

  // Function to toggle pricing view (monthly/yearly)
  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="pricing-container">
      {/* Toggle buttons for monthly/yearly */}
      <div className="toggle-buttons">
        <button
          className={isMonthly ? "active" : ""}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={!isMonthly ? "active" : ""}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
        </button>
      </div>

      {/* Pricing plans */}
      <div className="plans">
        {/* Basic Plan */}
        <div className="plan">
          <h3>Basic plan</h3>
          <p className="price">{isMonthly ? "$9.99/month" : "$200 yearly"}</p>
          <ul>
            <li>✔ Free delivery within 24 hours</li>
            <li>✔ Custom napkin designs</li>
            <li>✔ Monthly subscription</li>
          </ul>
          <button className="order-button">Order Now</button>
        </div>

        {/* Business Plan */}
        <div className="plan premium">
          <h3>Business plan</h3>
          <p className="price">{isMonthly ? "$19.99/month" : "$299 yearly"}</p>
          <ul>
            <li>✔ Free delivery within 12 hours</li>
            <li>✔ Premium napkin materials</li>
            <li>✔ Monthly subscription</li>
            <li>✔ Feature text goes here</li>
          </ul>
          <button className="order-button">Order Now</button>
        </div>

        {/* Enterprise Plan */}
        <div className="plan premium">
          <h3>Enterprise plan</h3>
          <p className="price">{isMonthly ? "$29.99/month" : "$499 yearly"}</p>
          <ul>
            <li>✔ Free delivery within 6 hours</li>
            <li>✔ Exclusive designer napkin options</li>
            <li>✔ Monthly subscription</li>
            <li>✔ Feature text goes here</li>
            <li>✔ Feature text goes here</li>
          </ul>
          <button className="order-button">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
