import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const TestimonalRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onTestimonialClick={() => scrollToSection(TestimonalRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Sections */}
      <section ref={homeRef} id="home">
        <Home />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={servicesRef} id="services">
        <Services />
      </section>

      <section ref={TestimonalRef} id="testimonial">
        <Testimonial />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </div>

    
  );

}

export default App;
