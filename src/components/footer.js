import React from "react";
import "../Style/footer.css"
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-container">
            <div className="footer-child">
                <div className="name-holder">
                    <div className="footer-header">Get connected</div>
                    <div className="sub-text">© 2023 Inesh Sekar</div>
                </div>
            </div>
            <div className="footer-child">
                <div className="footer-links" id="fl">
                <a href="https://in.linkedin.com/in/inesh-sekar-4625651a5"  className="footer-link">
                LinkedIn
                </a>
                <a href="https://github.com/Trident14"  className="footer-link">
                Github
                </a>
                <a href="mailto:sekarinesh14@gmail.com" className="footer-link">
                Email
                </a>
                </div>
                </div>
      </div>
    </footer>
  );
};

export default Footer;
