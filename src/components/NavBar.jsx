import React from "react";
import "./NavBar.css";
import circle from "../assets/Circle.png";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={circle} className="circle" alt="In Love logo" />
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};
