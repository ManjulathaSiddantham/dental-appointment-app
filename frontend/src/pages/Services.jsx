import React from "react";
import "./service.css";
import { FaCheckSquare, FaTooth, FaMedal, FaLandmark, FaPuzzlePiece, FaSmileBeam } from "react-icons/fa";

// Import Before/After Images
import tooth1 from "/images/tooth1.jpg";
import tooth2 from "/images/tooth2.png";
import tooth3 from "/images/tooth3.jpg";
import tooth4 from "/images/tooth4.jpg";

const Service = () => {
  return (
    <div className="service-page">

      {/* SECTION 1: Why Basal Implants */}
      <section className="implant-benefits">
        <h5>Why</h5>
        <h2>
          Basal Implants <br /> Outshine Other Methods
        </h2>

        <div className="benefit-cards">
          <div className="benefit-card">
            <FaCheckSquare className="icon" />
            <h3>Rapid Results</h3>
            <p><strong>Basal Implants:</strong> Immediate function means quicker smile restoration.</p>
            <p><strong>Regular Implants:</strong> Longer healing phases delay outcomes.</p>
          </div>

          <div className="benefit-card">
            <FaTooth className="icon" />
            <h3>Bone Challenges Conquered</h3>
            <p><strong>Basal Implants:</strong> Ideal for limited bone height, reducing grafting needs.</p>
            <p><strong>Regular Implants:</strong> Inadequate bone might require grafting.</p>
          </div>

          <div className="benefit-card">
            <FaMedal className="icon" />
            <h3>Success Defined</h3>
            <p><strong>Basal Implants:</strong> High success rates, even for challenging cases.</p>
            <p><strong>Regular Implants:</strong> Success remains high but can vary.</p>
          </div>

          <div className="benefit-card">
            <FaLandmark className="icon" />
            <h3>Efficiency Counts</h3>
            <p><strong>Basal Implants:</strong> Streamlined process for swift, quality outcomes.</p>
            <p><strong>Regular Implants:</strong> Additional procedures and integration extend timelines.</p>
          </div>

          <div className="benefit-card">
            <FaPuzzlePiece className="icon" />
            <h3>Versatile Solutions</h3>
            <p><strong>Basal Implants:</strong> Single to full arch restorations in one solution.</p>
            <p><strong>Regular Implants:</strong> Versatile, but some cases demand more steps.</p>
          </div>

          <div className="benefit-card">
            <FaSmileBeam className="icon" />
            <h3>Boosted Confidence</h3>
            <p><strong>Basal Implants:</strong> Quick restoration enhances self-assurance.</p>
            <p><strong>Regular Implants:</strong> Longer waits can affect confidence.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Before and After */}
      <section className="before-after">
        <h2>Before and After <br /> Basal Implant</h2>
        <div className="image-grid">
          {[tooth1, tooth2, tooth3, tooth4].map((img, index) => (
            <div className="img-wrapper" key={index}>
              <img src={img} alt={`Before After ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Service;
