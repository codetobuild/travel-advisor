import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="icons">
        <a href="#">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/codetobuild/travel-advisor" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <p>Build with ❤️ by Nokha</p><br/>
        <p class="company-name">
          Travel Advisor &copy; 2021, ALL Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
