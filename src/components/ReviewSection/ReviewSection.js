import React, { useState, useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewSection.css'

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://wild-west-cars.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container section-container text-center" id="review-section">
      <h4 className="fw-bold text-start">See What Our Clients Say About Us</h4>
      <h1 className="fw-bold mb-5 text-start">All Reviews</h1>
      <div className="all-review">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review._id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;