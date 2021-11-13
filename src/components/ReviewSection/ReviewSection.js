import React, { useState, useEffect } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './ReviewSection.css'

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container section-container text-center mb-5">
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