import React from "react";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-basic">
        <footer className="footer_container">
          <div className="social">
            <a
              className="icon"
              href="https://www.instagram.com/de_gustibus_taormina/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="icon"
              href="https://www.tripadvisor.com/Restaurant_Review-g187892-d12538208-Reviews-De_Gustibus-Taormina_Province_of_Messina_Sicily.html"
              target="_blank"
            >
              <i className="fab fa-tripadvisor"></i>
            </a>
            <a
              className="icon"
              href="https://www.facebook.com/DeGustibusTao"
              target="_blank"
            >
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
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Gustibus/@38.1016515,15.0073676,9z/data=!3m1!5s0x131411a1f7a0459b:0x65c8c70c6b9f66f1!4m9!1m2!2m1!1sde+gustibus!3m5!1s0x131411a1f773005d:0xde64b748ad4af5fc!8m2!3d37.8527688!4d15.2888901!15sCgtkZSBndXN0aWJ1c1oNIgtkZSBndXN0aWJ1c5IBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnZkSFZ0TFVSUkVBRQ"
              >
                <li className="list-inline-item">
                  <i class="fa fa-location-arrow"></i> Via Di Giovanni 28A,
                  Taormina
                </li>
              </a>
              <a>
                <li className="list-inline-item">
                  <i class="fa fa-phone"></i> 0942 24595{" "}
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
