import React from "react";

const Apropos = () => {
  return (
    <div className="AproposArea">
      {/* Les images importe avec balises img sont accessible depuis public */}
      <img src="./images/isolated-g01e498436_1920.png" alt="devops-circle" />
      <div className="Apropos">
        <h4>A propos de moi</h4>
        <p>
          Diplômé d'un titre pro Développeur Web et Web Mobile obtenu au prêt de
          M2I Formation, ayant déjà quelques projets professionnels et
          personnels réalisés en autonomie.
        </p>
        <p>
          Je dispose actuellement d'une petite expérience en développement web
          et administration sur des langages tels que par exemple JavaScript et
          PHP et des infrastructures tel que Debian, Nginx et PhpMyAdmin qui ont
          servie par exemple au développement et l'hébergement du site que vous
          visitez actuellement.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
