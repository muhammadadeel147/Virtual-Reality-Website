import React from 'react';
import './Navbar.css'; 
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1><span>Virtual</span> Learning</h1>
      </div>
      <ul className="navbar-center">
      <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50} 
          >   
           <li><a>Home</a></li>
       
          </Link>
        <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50} 
          >   
           <li><a>About Us</a></li>
       
          </Link>
          <Link
            to="courses"
            smooth={true}
            duration={500}
            offset={-50} 
          >   
           <li><a>Courses</a></li>
       
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50} 
          >   
           <li><a>Contact Us</a></li>
       
          </Link>
        
      </ul>
      <div className="navbar-right">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
