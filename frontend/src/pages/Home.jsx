import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Best Dental Implant in Hyderabad with Same Day Teeth Fixing</h1>
        <h2>Get A Perfect New Smile</h2>
        <div className="highlight">
          Swiss-Made Dental Implants at just Rs 9,999/-* Only
        </div>
        <div className="images">
          <img src="/images/dental-oldman.jpg" alt="Happy patient" />
          <img src="/images/dental-woman.jpg" alt="Happy patient" />
        </div>
      </section>

      <a
        href="https://wa.me/918800000000"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        💬 Connect For Instant Expert Solutions
      </a>
    </div>
  );
}
