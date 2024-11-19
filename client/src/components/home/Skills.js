import React, { useState, useEffect, isChecked } from "react";
import axios from "axios";
import Card from "./Card";
import "../../styles/index.scss";

const Skills = () => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const radios = [
    "database",
    "back-end",
    "front-end",
    "versionning",
    "CI/CD",
    "infra as code",
    "création vectorielle",
    "conteneurisation",
    "cloud",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/tech")
      .then((res) => setData(res.data));
  }, []);

  const handleRadioClick = (typeTech) => {
    if (selectedRadio === typeTech) {
      setSelectedRadio("");
      setIsChecked(false);
    } else {
      setSelectedRadio(typeTech);
      setIsChecked(true);
    }
  };

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
              checked={selectedRadio === typeTech && isChecked ? "checked" : ""}
              onChange={() => handleRadioClick(typeTech)}
              value={typeTech}
            />
            <label
              htmlFor={typeTech}
              className={selectedRadio === typeTech ? "checked" : ""}
            >
              {typeTech}
            </label>
          </li>
        ))}
      </div>
      <div className="list">
        {data
          .filter(
            (tech) =>
              selectedRadio === "" || tech.techType.includes(selectedRadio)
          )
          .map((tech, index) => (
            <Card key={index} tech={tech} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
