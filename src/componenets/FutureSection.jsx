import React from "react";
import "./FutureSection.css"; 

const FutureSection = () => {
  return (
    <div className="future-section">
      <div className="future-content">
        <h2 className="future-title">Look to the Future of Education</h2>
        <ul className="future-list">
          <li>Immersive Learning Environments</li>
          <li>Hands-on Experiences Anywhere</li>
          <li>Personalized Learning Paths</li>
          <li>Collaborative Virtual Classrooms</li>
        </ul>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="future-image"></div>
    </div>
  );
};

export default FutureSection;
