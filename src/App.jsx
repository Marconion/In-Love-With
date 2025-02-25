import { useState } from "react";
import logo from "./assets/Logo Pink pastel.png";
import "./App.css";
import { NavBar } from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="In Love logo" />
        </a>
      </div>
      <div className="card"></div>
      <p className="read-the-docs">Welcome to Our Website!</p>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, animi
        vitae! Eligendi non optio repellendus ad exercitationem, ab reiciendis
        iure?
      </p>
    </>
  );
}

export default App;
