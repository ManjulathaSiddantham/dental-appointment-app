// src/pages/About.jsx
import React from "react";
import "./About.css";
import { FaSmile, FaBone, FaThumbsUp, FaTooth, FaLightbulb, FaCheckCircle, FaUtensils, FaShieldAlt, FaHeartbeat, FaCertificate, FaWallet, FaClock } from "react-icons/fa";
import doctorImage from "/images/Doctor.jpg"; // replace with your actual image paths
// import implantImg1 from "/images/implant1.jpg";
import implantImg2 from "/images/implant2.jpg";

const About = () => {
  return (
    <div className="about-page">

      {/* Section 1: Why Choose */}
      <section className="why-choose">
        <h3>Why Choose</h3>
        <h2>Basal Implants at Dentluxory Hyderabad</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaSmile className="icon" />
            <h4>Instant Smile Renewal</h4>
            <p>Picture enjoying an improved smile and function faster than ever. Basal implants support immediate functional loading, granting you results almost instantly.</p>
          </div>
          <div className="feature-card">
            <FaBone className="icon" />
            <h4>Defying Bone Constraints</h4>
            <p>Basal implants thrive where traditional implants demand bone grafting. Even those with minimal bone height can embrace dental implants' benefits.</p>
          </div>
          <div className="feature-card">
            <FaThumbsUp className="icon" />
            <h4>Remarkable Success</h4>
            <p>Impressive success rate ensuring reliability for diverse individuals, including those with medical conditions affecting bone healing.</p>
          </div>
          <div className="feature-card">
            <FaTooth className="icon" />
            <h4>Versatile Restoration</h4>
            <p>Whether it's one tooth or a full dental arch, basal implants offer a versatile and effective solution for smile restoration.</p>
          </div>
          <div className="feature-card">
            <FaLightbulb className="icon" />
            <h4>Efficiency Redefined</h4>
            <p>Streamlined treatment process means quicker restoration without compromising quality – an efficient path to regained confidence.</p>
          </div>
        </div>
        <p className="section-footer">
          Discover the future of dental restoration at Dentluxory. Your journey to a revitalized smile starts here.
        </p>
      </section>

      {/* Section 2: Benefits */}
      <section className="benefits">
        <div className="benefits-image">
          {/* <img src={implantImg1} alt="Patient Implant" /> */}

          <img src={implantImg2} alt="Smiling Patient" className="small-img" />
          <div className="happy-customers">
            <FaSmile className="icon" />
            <h3>5000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="benefits-content">
          <h3>Benefits</h3>
          <h2>Painless Implant Procedure</h2>
          <p>Experience the advantages of Painless Implant Procedure, redefining dental restoration:</p>
          <ul>
            <li><FaCheckCircle /> No bleeding, No cuts, No stitches</li>
            <li><FaUtensils /> No diet restrictions</li>
            <li><FaShieldAlt /> Lifetime warranty</li>
            <li><FaHeartbeat /> Works even with poor bone quality & diabetes</li>
            <li><FaCertificate /> US FDA Approved – Top-notch Imported Cortical Implant</li>
            <li><FaWallet /> No cost EMI</li>
            <li><FaClock /> Same day implant with permanent teeth fixing</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Doctor Info */}
      <section className="doctor-info">
        <div className="doctor-text">
          <h2>Best Sr Basal Implant Surgeon in Hyderabad</h2>
          <h3>Dr Gowtham Devansh</h3>
          <h4>Founder and Director, Dentluxory Cosmetic Clinic</h4>
          <p><em>MDS(OMFS), FICOI(USA), FAM(GER), MAAAM(USA), LASERPLAST(ITALY), MESO (SPAIN), AQUA (UK), SCARS (GER), MONO (Switzerland)</em></p>
          <p>Dr Gowtham Devansh is one of the top preferred celebrity cosmetic surgeons with 23 years of experience in dental implants. He is the promoter and director of Dentluxory Cosmetic Clinic located at Hyderabad.</p>
          <p>He is trained and certified for basal & cortical implants by mono implants in Switzerland and has done more than 5000 implants with 100% success rate.</p>
        </div>
        <div className="doctor-image">
          <img src={doctorImage} alt="Dr Gowtham Devansh" />
        </div>
      </section>
    </div>
  );
};

export default About;
