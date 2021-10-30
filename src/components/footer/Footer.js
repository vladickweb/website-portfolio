import React from "react";
import "./Footer.css";
import resume from '../../media/CV-Europass.pdf'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Vladyslav Kapkan</h1>
        <p>Based in Murcia, Spain</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <a target="_blank" className="btn btn-outline-primary" rel="noreferrer" href={resume}>My resume</a>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Vladyslav Kapkan</div>
        <div className="sns-links">
          <a href="https://linkedin.com/in/vladick-kapkan" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/vladickweb" target="_blank" rel="noreferrer">
          <i class="fab fa-github github"></i>
          </a>
          <a href="mailto:vladickbaraza@gmail.com" >
            <i class="far fa-envelope-open mail"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
