import { React, useEffect, useState } from "react";
import Home from "./components/Categories/Home/Home.js";
import Clothes from "./components/Categories/Clothes/Clothes.js";
import Electronics from "./components/Categories/Electronics/Electronics.js";
import Accessories from "./components/Categories/Accessories/Accessories.js";
import Product from "./components/Categories/Product/Product.js";
import ShoppingCart from "./components/Categories/ShoppingCart/ShoppingCart.js";
import Checkout from "./components/Categories/Checkout/Checkout.js";
import Login from "./components/Categories/Account/Login/Login.js";
import CreateAccount from "./components/Categories/Account/CreateAccount/CreateAccount.js";
import { CartContext } from "./contexts/CartContext.js";
import { UserContext } from "./contexts/UserContext.js";
import { PageContext } from "./contexts/PageContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function WebsiteRoutes() {
  const [productsInCart, setProductsInCart] = useState([]);
  const [currentPage, setCurrentPage] = useState({
    pages: ["Home", "Electronics", "Clothes", "Accessories"],
    onPage: 0,
  });
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      user: { firstname: "", lastname: "", email: "", accesstoken: "" },
      isLoggedIn: false,
    }
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/clothes" element={<Clothes />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createaccount" element={<CreateAccount />} />
            </Routes>
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>
    </PageContext.Provider>
  );
}

export default WebsiteRoutes;
