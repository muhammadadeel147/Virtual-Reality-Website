import "./App.css";
import AboutUsSection from "./componenets/AboutUsSection";
import ContactSection from "./componenets/ContactSection";
import CoursesSection from "./componenets/CoursesSection";
import FeatureSection from "./componenets/FeatureSection";
import FutureSection from "./componenets/FutureSection";
import Hero from "./componenets/Hero";
import Navbar from "./componenets/Navbar";
import ReviewsSection from "./componenets/ReviewSection";
import WhyChooseUsSection from "./componenets/WhyChooseUsSection";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Element name="home">
         <Navbar />
         </Element>
      <Hero />
      <FeatureSection />
      <Element name="about">
      <AboutUsSection />
      </Element>  
      <FutureSection />
      <Element name="courses">
      <CoursesSection/>
      </Element>  
      <WhyChooseUsSection/>
      <ReviewsSection/>
      <Element name="contact">
      <ContactSection/>
      </Element>  
    </div>
  );
}

export default App;
