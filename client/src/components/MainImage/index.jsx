import React from "react";
import "./style.css";

const mainImage = "http://localhost:8000/images/mandalorian-with-yoda.jpeg";

const MainImage = () => {
  return (
    <div className="container">
      <div className="title-block">
        <div className="title">Star Wars</div>
        <div className="subtitle">Memories of Baby Yoda, These Are</div>
      </div>
      <img className="main-image" src={mainImage} alt="Mandalorian with Yoda" />
    </div>
  );
};

export { MainImage };
