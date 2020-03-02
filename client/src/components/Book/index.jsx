import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "infinite-react-carousel";
import "./style.css";
import { BookPage } from "../BookPage";
import PrevArrow from "./arrow-left.png";
import NextArrow from "./arrow-right.png";

const Book = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    const getMilestones = async () => {
      try {
        const res = await axios.get("http://localhost:8000/milestones");
        setMilestones(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    getMilestones();
  }, []);

  if (milestones.length > 0) {
    return (
      <div className="book-wrapper">
        <Slider
          prevArrow={
            <img
              style={{
                height: "20px",
                width: "20px",
                top: "50%",
                marginLeft: "10px"
              }}
              src={PrevArrow}
              alt="prev arrow"
            />
          }
          nextArrow={
            <img
              style={{
                height: "20px",
                width: "20px",
                top: "50%",
                marginRight: "10px"
              }}
              src={NextArrow}
              alt="prev arrow"
            />
          }
          dots
        >
          {milestones.map((milestone, index) => {
            return (
              <div key={index} className="page">
                <BookPage
                  className="carousel-item"
                  imgPath={milestone.imagePath}
                  title={milestone.title}
                  content={milestone.description}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export { Book };
