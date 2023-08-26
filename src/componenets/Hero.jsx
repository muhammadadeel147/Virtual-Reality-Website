import React from 'react'
import Img1 from "../Assets/1.jpg";
import './Hero.css'; 
const Hero = () => {
  return (
<div className="hero">
  <div className="hero-content">
    <h1 className="hero-title">Welcome to Our World of Virtual Learning</h1>
    <p className="hero-text">Exploring Learning Through Virtual and Augmented Realities</p>
    <button className="learn-more-button">Learn More</button>
  </div>
  <div className="hero-image">
    <img src={Img1} alt="Hero" />
  </div>
</div>

  )
}

export default Hero;