import { useState } from "react";
import logo from "./assets/Logo Pink pastel.png";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";
import image1 from "./assets/images/img1.jpg";
import image2 from "./assets/images/img2.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="nav">
        <NavBar />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="In Love logo" />
        </a>
      </div>
      <p className="read-the-docs">Welcome to Our Website!</p>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi
        vitae! Eligendi non optio repellendus ad exercitationem, ab reiciendis
        iure?
      </p>
      <Card img={image1} />
      <Card img={image2} />
      {/* <Card img={yourImageSource3} /> */}
    </div>
  );
}

export default App;
