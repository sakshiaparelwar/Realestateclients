import React from "react";
import "../pages/style.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaAndroid,
  FaApple,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <a href="#"></a>
        <div>
          <h4>Quick links</h4>
          <a href="/about" className="quick-links">
            <p>About</p>
          </a>
          <a href="/contact" className="quick-links">
            <p>Contact Us</p>
          </a>
          <a href="/terms" className="quick-links">
            <p>Terms & Conditions</p>
          </a>
          <a href="/loan" className="quick-links">
            <p>Home Loan</p>
          </a>
          <a href="/privacy" className="quick-links">
            <p>Privacy-Policy</p>
          </a>
        </div>
        <div className="followus">
          <h4>Follow us on</h4>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
        </div>
        <div>
          <h4>Our Partners</h4>
          <a href="/" className="partners">
            <p>Housing.com</p>
          </a>
          <a href="/" className="partners">
            <p>Prootiger.com</p>
          </a>
          <a href="/" className="partners">
            <p>Realtor.com</p>
          </a>
          <a href="/" className="partners">
            <p>Rent.com</p>
          </a>
        </div>
        <div>
          <h4>Buyer App|seller App</h4>
          <a href="" className="buyerseller">
            <FaAndroid />
          </a>
          <a href="" className="buyerseller">
            <FaApple />
          </a>
          |
          <a href="" className="buyerseller">
            <FaAndroid />
          </a>
          <a href="" className="buyerseller">
            <FaApple />
          </a>
        </div>
        <hr></hr>
      </footer>
      <div className="bottomline">
        <hr></hr>
        <address>Copywrite&copy; 2023 Residio.com| All Rights Reserved</address>
      </div>
    </div>
  );
}

export default Footer;
