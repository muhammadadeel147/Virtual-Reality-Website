import React from "react";
import "./ContactSection.css"; 

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-image"></div>
      <div className="contact-content">
        <h2 className="section-heading">Contact Us</h2>
        <p className="contact-text">
          Have questions? Reach out to us for more information about our courses and services.
        </p>
        <form className="contact-form">
          <h3 className="form-heading">Get in Touch</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
