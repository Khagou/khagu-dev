import React from "react";

const Filtres = ({ tech }) => {
  return (
    <div className="List">
      <ul>
        <li>{tech.techType}</li>
      </ul>
    </div>
  );
};

export default Filtres;
