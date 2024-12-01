import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          Copyright © 2024 <Link to="/">Panda Food</Link> | All Rights Reserved
        </div>
        <div>
          <ul className="footer-nav">
            <li className="footer-nav-item">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/">Terms of Services</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
