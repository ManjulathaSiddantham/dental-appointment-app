// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    appointmentDate: "",
    message: ""
  });

  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setPopup({ show: true, message: "Appointment booked successfully!", type: "success" });
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          appointmentDate: "",
          message: ""
        });
      } else {
        setPopup({ show: true, message: data.message || "Something went wrong.", type: "error" });
      }
    } catch (error) {
      setPopup({ show: true, message: "Error connecting to server.", type: "error" });
    }

    // Hide popup after 3 seconds
    setTimeout(() => setPopup({ ...popup, show: false }), 3000);
  };

  return (
    <div className="contact-section">
      {/* Popup */}
      {popup.show && (
        <div className={`popup ${popup.type}`}>
          <p>{popup.message}</p>
        </div>
      )}

      {/* Heading */}
      <h2 className="contact-heading">Contact Us</h2>

      {/* Contact Info Cards */}
      <div className="contact-info">
        <div className="contact-card">
          <FaPhone className="icon" />
          <div>
            <h4>Phone</h4>
            <p>+91 9980368994</p>
          </div>
        </div>
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <div>
            <h4>Email</h4>
            <p>info@Dentluxory.co.in</p>
          </div>
        </div>
        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h4>Address</h4>
            <p>Banjara Hills, Hyderabad, Telangana, 500034</p>
          </div>
        </div>
        <div className="contact-card">
          <FaClock className="icon" />
          <div>
            <h4>Open Hours</h4>
            <p>Mon - Sat : 9.30 am - 9.30 pm</p>
          </div>
        </div>
      </div>

      {/* Appointment Form & Map */}
      <div className="contact-main">
        {/* Appointment Form */}
        <div className="appointment-form">
          <h3>Book An Appointment</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Id"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="datetime-local"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message: Only 30 characters allowed, no special characters /*%$@#"
              maxLength="30"
              rows="2"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="small-btn">Send Message</button>
          </form>
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.558982802334!2d78.43465027587093!3d17.41845968345385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb968b6f24464d%3A0xecc1f6070e6db420!2sBanjara%20Hills%2C%20Hyderabad%2C%20Telangana%20500034!5e0!3m2!1sen!2sin!4v1691400000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <p>© {new Date().getFullYear()} Dentluxory Dental Clinic. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
