import React from "react";
import "./Card.css";
import { CustomButton } from "./CustomButton";

export const Card = ({ img, title, content, buttonLink }) => {
  const handleButtonClick = () => {
    window.location.href = buttonLink;
  };

  return (
    <div className="card">
      <img src={img} alt="Card" className="card-image" />
      <h2>{title}</h2>
      <p>{content}</p>

      <CustomButton label="Read More" onClick={handleButtonClick} />
    </div>
  );
};
