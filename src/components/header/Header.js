import "./header.css";
import Logo from "../../assets/images/Panda_logo.webp";
import CratIcon from "../../assets/svgs/cart_icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnaccount, setBtnAccount] = useState("Login");

  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Panda food delivery" loading="lazy" />
          </Link>
        </div>
        <nav id="navbar">
          <ul className="navbar_wrapper">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="header-cart">
                <img src={CratIcon} alt="cart" loading="lazy" />
                Cart
              </Link>
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
