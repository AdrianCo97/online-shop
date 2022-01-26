import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import "./app.css";

function App() {

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => console.log(data));
  }, [])

  return (
    <body>
      <Navbar />
      <div class="main-content">
        <h3>What's popular</h3>
      </div>
    </body>
    
  );
}

export default App;
