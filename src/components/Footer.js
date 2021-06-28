import React from "react";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-basic">
        <footer className="footer_container">
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
          <div className="list_container">
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
          </div>
          <div className="list_container">
            <ul className="list-inline">
              <a>
                <li className="list-inline-item">
                  <i class="fa fa-location-arrow"></i> Via Di Giovanni 28A,
                  Taormina
                </li>
              </a>
              <a>
                <li className="list-inline-item">
                  <i class="fa fa-phone"></i> +91-9999878398{" "}
                </li>
              </a>
              <a>
                <li className="list-inline-item">
                  <i class="fa fa fa-envelope"></i> degustibustao@gmail.com
                </li>
              </a>
            </ul>
          </div>

          <p className="text-center">Copyright @2021 | De Gustibus</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
