import React from "react";
import { NavLink } from "react-router-dom";

const Presentation = () => {
  return (
    <div className="presentation">
      <h2>Bienvenue chez khagu-dev</h2>
      <h3>Développeur web junior</h3>
      <ul>
        <NavLink to="/cv">
          <li>Voir mon CV</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Presentation;
