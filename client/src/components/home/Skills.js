import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Filtres from "./Filtres";

const Skills = () => {
  const [data, setData] = useState([]);

  // Le useEffect ce joue lorsque le composant est monté
  useEffect(() => {
    axios.get("http://localhost:5500/").then((res) => setData(res.data));
  }, []);

  return (
    <div className="skills">
      <div className="title">
        <h5>Skills</h5>
      </div>
      <div className="filtres">
        {data.map((tech, index) => (
          <Filtres key={index} tech={tech} />
        ))}
      </div>
      <div className="list">
        {data.map((tech, index) => (
          <Card key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
