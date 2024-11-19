import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </NavLink>
            <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
            <button className="cv-button">CV</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
