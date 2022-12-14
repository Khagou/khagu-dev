import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Skills = () => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = [
    "database",
    "back-end",
    "front-end",
    "versionning",
    "OS",
    "virtualisation",
  ];

  // Le useEffect ce joue lorsque le composant est monté
  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_URL).then((res) => setData(res.data));
  }, []);

  return (
    <div className="skills">
      <div className="title">
        <h5>Skills</h5>
      </div>
      <div className="filtres">
        {radios.map((typeTech, index) => (
          <li key={index}>
            <input
              type="radio"
              id={typeTech}
              name="typeTech"
              className="typeTech"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={typeTech}>{typeTech}</label>
          </li>
        ))}
      </div>
      <div className="list">
        {data
          .filter((tech) => tech.techType.includes(selectedRadio))
          .map((tech, index) => (
            <Card key={index} tech={tech} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
