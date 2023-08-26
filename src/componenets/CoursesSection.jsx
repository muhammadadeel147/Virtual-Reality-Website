import React from "react";
import "./CoursesSection.css";

import Img5 from "../Assets/5.jpg";
import Img6 from "../Assets/6.jpg";
import Img7 from "../Assets/7.jpg";
import Img8 from "../Assets/8.jpg";
const coursesData = [
 
 {
    title: "Historical World Tour",
    detail: "Explore historical events and landmarks through immersive Virtual Reality tours.",
    image: Img5,
  },
  {
    title: "Science Adventures in VR",
    detail: "Discover scientific concepts and phenomena with hands-on Virtual Reality experiments.",
    image: Img6,
  },
  {
    title: "Math Quest in Virtual Reality",
    detail: "Embark on a math journey using VR to visualize complex mathematical concepts.",
    image: Img7,
  },
  {
    title: "Language Learning in VR",
    detail: "Immerse yourself in foreign languages and cultures for interactive language learning.",
    image: Img8,
  },
  

];

const CoursesSection = () => {
  return (
    <div className="courses-section">
      <h2 className="section-heading">Our Courses</h2>
      <div className="courses-container">
        {coursesData.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-detail">{course.detail}</p>

          </div>
        ))}
      </div>
                
      <button className="learn-more-button">Explore More</button>
    </div>
  );
};

export default CoursesSection;
