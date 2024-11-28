import React from "react";
import ReactDOM from "react-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="container">
      <div className="copyright">
        Copyright © 2024 <a href="/">Panda Food</a> | All Rights Reserved
      </div>
      <div>
        <ul className="footer-nav">
          <li>Privacy Policy</li>
          <li>Terms of Services</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
