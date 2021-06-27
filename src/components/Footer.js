import React from "react";
const Footer = (props) => {
  return (
    <div className="footer_container">
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a
              href="https://www.instagram.com/de_gustibus_taormina/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g187892-d12538208-Reviews-De_Gustibus-Taormina_Province_of_Messina_Sicily.html"
              target="_blank"
            >
              <i className="fab fa-tripadvisor"></i>
            </a>

            <a href="https://www.facebook.com/DeGustibusTao" target="_blank">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">DeGustibus © 2021</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
