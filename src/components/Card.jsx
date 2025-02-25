import React from "react";
import "./Card.css";

export const Card = ({ img }) => {
  return (
    <div className="card">
      <img src={img} alt="Card" className="card-image" />
      <h2>Card Title</h2>
      <p>Card Content</p>
    </div>
  );
};
