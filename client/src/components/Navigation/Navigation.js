import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCVClick = () => {
    fetch("./images/CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.target = "_blank";
        alink.click();
      });
    });
  };

  return (
    <header className="page-header">
      <div className="nav-container">
        <div className="logo">
          <h1>Khagu-dev</h1>
        </div>

        <nav>
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
            <button className="cv-button" onClick={handleCVClick} type="button">
              CV
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
