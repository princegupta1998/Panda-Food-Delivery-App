import React from "react";
import ReactDOM from "react-dom";
import "./header.css";
import Logo from "../../assets/images/Panda_logo.webp";
import CratIcon from "../../assets/svgs/cart_icon.svg";

const Header = () => {
  return (
    <header id="header" className="container">
      <div className="logo">
        <img src={Logo} alt="Panda food delivery" loading="lazy" />
      </div>
      <nav id="navbar">
        <ul className="navbar_wrapper">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="/" className="header-cart">
              <img src={CratIcon} alt="cart" loading="lazy" />
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
