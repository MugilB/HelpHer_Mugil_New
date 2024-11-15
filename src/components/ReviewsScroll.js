import React from 'react';
import './ReviewsScroll.css';

const reviews = [
  { name: 'Priya', review: 'The napkin delivery was fast and discreet. Very helpful during critical times!' },
  { name: 'Anjali', review: 'I used the pick and drop service for my medical appointment. Very reliable and on time.' },
  { name: 'Sita', review: 'The female bike ride service is amazing! I felt safe and comfortable throughout.' },
  { name: 'Kavya', review: 'Booking a room for my stay was super easy, and the service was great!' },
  { name: 'Meera', review: 'I had a consultation with a gynecologist through the website. The doctor was professional and understanding.' },
  { name: 'Aarti', review: 'The mental counseling service was really helpful. I feel more at peace after my session.' },
  { name: 'Pooja', review: 'The cyber crime support team guided me through a tough situation. Very knowledgeable and supportive.' },
  { name: 'Neha', review: 'The fitness tips are practical and easy to follow. I’ve noticed a positive change in my energy levels!' },
];

const ReviewsScroll = () => {
  return (
    <div className="wrapper">
      {reviews.map((review, index) => (
        <div key={index} className={`item item${index + 1}`}>
          <div className="review-content">
            <p className="reviewer-name">{review.name}</p>
            <p className="review-text">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsScroll;
