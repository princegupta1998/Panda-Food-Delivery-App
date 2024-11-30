import "./header.css";
import Logo from "../../assets/images/Panda_logo.webp";
import CratIcon from "../../assets/svgs/cart_icon.svg";
import { useState } from "react";

const Header = () => {
  const [btnaccount, setBtnAccount] = useState("Login");

  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Panda food delivery" loading="lazy" />
          </a>
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
            <button
              className="account-btn button"
              onClick={() => {
                btnaccount == "Login"
                  ? setBtnAccount("Logout")
                  : setBtnAccount("Login");
              }}
            >
              {btnaccount}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
