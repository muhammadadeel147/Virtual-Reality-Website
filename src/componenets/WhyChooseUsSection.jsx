import React from "react";
import "./WhyChooseUsSection.css"; 

const WhyChooseUsSection = () => {
  return (
    <div className="why-choose-us-section">
      <div className="why-choose-us-content">
        <h2 className="why-choose-us-heading">Why Choose Virtual Learning</h2>
        <p className="why-choose-us-text">
          Discover the future of education through immersive virtual learning.
          Embrace the power of cutting-edge technology to unlock new dimensions
          of learning experiences. Here's why you should choose virtual learning:
        </p>
        <ul className="why-choose-us-list">
          <li>Global Accessibility: Learn from anywhere in the world.</li>
          <li>Personalized Learning: Tailor your pace and preferences.</li>
          <li>Engaging Content: Experience subjects like never before.</li>
          <li>Interactive Labs: Perform experiments in a virtual environment.</li>
          <li>Collaborative Sessions: Connect with peers and instructors.</li>
          <li>Real-world Simulations: Apply knowledge to practical scenarios.</li>
        </ul>
      </div>
      <div className="why-choose-us-image"></div>
    </div>
  );
};

export default WhyChooseUsSection;
