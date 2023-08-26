import React from "react";
import "./AboutUsSection.css"; 

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <div className="about-us-image"></div>
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          Welcome to our world of immersive education. At VirtualEd, we believe
          that learning should be an adventure, a journey of exploration that
          engages and enlightens. Our mission is to revolutionize education
          through the power of virtual and augmented reality. With years of
          experience and a passion for technology, we've created a unique
          learning platform that transports students into virtual realms where
          history, science, mathematics, and languages come alive. Through
          interactive simulations and real-world scenarios, we provide an
          unparalleled educational experience that ignites curiosity and deepens
          understanding. Our expert instructors and cutting-edge VR technology
          work in harmony to bridge the gap between theory and practice. From
          exploring ancient civilizations to unraveling complex scientific
          phenomena, our courses empower students to grasp concepts in a whole
          new dimension. Join us in shaping the future of education. Discover
          the extraordinary potential of virtual and augmented reality as we
          embark on a journey to make learning more captivating, immersive, and
          enriching than ever before.
        </p>

        <h3 className="about-us-subtitle">Our Benefits</h3>
        <ul className="about-us-benefits">
          <li>Enhanced Learning Experiences</li>
          <li>Interactive Virtual Labs</li>
          <li>Real-world Simulations</li>
          <li>Personalized Education</li>
          <li>And Much More</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsSection;
