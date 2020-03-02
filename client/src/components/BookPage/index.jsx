import React from "react";
import "./style.css";

const baseImgUrl = "http://localhost:8000/images/";

const BookPage = ({ imgPath, title, content }) => {
  const imgSrc = `${baseImgUrl}${imgPath}`;
  return (
    <div className="page">
      <img className="page-img" src={imgSrc} alt="Yoda" />
      <div className="content-wrapper">
        <div className="content-title">{title}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};

export { BookPage };
