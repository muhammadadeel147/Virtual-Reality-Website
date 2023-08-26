import React from "react";
import "./ReviewSection.css"; 

const reviewsData = [
  {
    name: "John Doe",
    testimonial:
      "Virtual learning has completely transformed my learning experience. The immersive lessons and interactive labs have made studying exciting and engaging.",
  },
  {
    name: "Jane Smith",
    testimonial:
      "I'm amazed by the level of realism that virtual reality brings to my education. It's like stepping into the subjects I'm studying and truly understanding the concepts.",
  },

];

const ReviewSection = () => {
  return (
    <div className="reviews-section">
      <h2 className="section-heading">Student Reviews</h2>
      <div className="reviews-container">
        {reviewsData.map((review, index) => (
          <div key={index} className="review-card">
            <p className="testimonial">{review.testimonial}</p>
            <p className="student-name">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
