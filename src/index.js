import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Categories/Home/Home.js";
import Clothes from "./components/Categories/Clothes/Clothes.js";
import Electronics from "./components/Categories/Electronics/Electronics.js";
import Accessories from "./components/Categories/Accessories/Accessories.js";
import Product from "./components/Categories/Product/Product.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/clothes" element={<Clothes />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/product/:id" element={<Product/>} />
    </Routes>
  </BrowserRouter>
);
