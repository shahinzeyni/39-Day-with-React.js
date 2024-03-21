import React, { useContext, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";
import productContext from "../Context/ProductsContext";

export default function Navbar() {
  useEffect(() => {
    console.log(contextData.isShowCart);
  })

  const contextData = useContext(productContext)

  return (
    <nav class="navbar navbar-expand-sm py-3 d-flex">
      <div class="container">
        <a href="#" className="navbar-brand">
          Shahin & Mahdiye Shop
        </a>

        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="#" className="bag">
            <BsBag className="text-white"
             onClick={() => {
              contextData.setIsShowCart(true);
            }}
            
             />
            <span className="bag-products-counter">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
