// src/components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * id: target element id (without '#')
   * path: route that contains that element (e.g. '/about' or '/' for home)
   */
  const scrollToSection = (id, path = null) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
      return;
    }

    // Not in current DOM -> navigate to path with hash
    if (path) {
      // navigate to path with hash fragment, e.g. /about#about
      navigate(`${path}#${id}`);
    } else {
      // fallback: set hash in current location (may not exist if different route)
      window.location.hash = `#${id}`;
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => scrollToSection("home", "/")}>
        <img src="/images/DentalLogos.png" alt="Dentluxory Logo" />
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span><span></span><span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection("home", "/")}>Home</li>
        <li onClick={() => scrollToSection("about", "/about")}>About</li>
        <li onClick={() => scrollToSection("services", "/services")}>Services</li>
        <li onClick={() => scrollToSection("testimonial", "/#testimonial")}>Testimonial</li>
        <li onClick={() => scrollToSection("contact", "/contact")}>Contact</li>
      </ul>
    </nav>
  );
}
