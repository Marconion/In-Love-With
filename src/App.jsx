import { useState } from "react";
import logo from "./assets/Logo transparent.png";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";
import image1 from "./assets/images/img1.jpg";
import image2 from "./assets/images/img2.jpg";
import video from "./assets/images/video.mp4";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <div className="nav">
        <NavBar />
      </div>
      <div>
        <img src={logo} className="logo" alt="In Love logo" />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}>
        <p className="read-the-docs">Welcome to My Website!</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          animi vitae! Eligendi non optio repellendus ad exercitationem, ab
          reiciendis iure?
        </p>
      </div>
      <div>
        <video
          src={video}
          // controls
          autoFocus
          loop
          muted
          autoPlay
          style={{ width: "100%", maxWidth: "600px" }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}>
        <p className="read-the-docs">Join me on a journey</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          animi vitae! Eligendi non optio repellendus ad exercitationem, ab
          reiciendis iure?
        </p>
      </div>
      <Card
        img={image1}
        title={`Our next retreat`}
        content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi
        vitae`}
        buttonLink="/pages/About"
      />
      <Card
        img={image2}
        title={`Online Cosmo Meditation`}
        content={`Based on donations. I will guide you through a meditation and it will be in russian language`}
      />
      {/* <Footer /> */}
      <div
        style={{
          backgroundColor: "rgb(66, 66, 66)",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}>
        <p className="read-the-docs" style={{ color: "white" }}>
          Join me on a journey
        </p>
        <p className="desc" style={{ color: "rgb(192, 192, 192)" }}>
          Yoga By Yuliya creates transformative, long lasting and sustainable
          results.
        </p>
      </div>
      <div>
        <p className="desc" style={{ color: "black", padding: "2rem" }}>
          Whether you have 5 or 45 minutes to dedicate that day there is
          something for everyone to practise anywhere and anytime.
        </p>
      </div>
    </div>
  );
}

export default App;
