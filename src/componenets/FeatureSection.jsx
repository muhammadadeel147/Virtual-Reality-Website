import React from "react";
import "./FeatureSection.css"; 
import Img2 from "../Assets/2.jpg"
const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-image">
        <img src={Img2} alt="Feature" />
      </div>
      <div className="feature-content">
        <h2 className="feature-title">Explore More About Virtual Learning</h2>
        <p className="feature-text">
          Discover the exciting world of virtual and augmented realities in
          education. Learn how these technologies are transforming learning
          experiences for students and educators.
        </p>
        <p className="feature-learn-more">Learn More</p>
      </div>
    </div>
  );
};

export default FeatureSection;
