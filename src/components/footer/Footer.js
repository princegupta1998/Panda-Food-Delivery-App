import React from "react";
import ReactDOM from "react-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          Copyright © 2024 <a href="/">Panda Food</a> | All Rights Reserved
        </div>
        <div>
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="footer-nav-item">
              <a href="/">Terms of Services</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
