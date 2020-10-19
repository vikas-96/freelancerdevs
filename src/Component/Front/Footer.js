import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">ArchLab.</h2>
                <p>
                  A full-stack engineering firm that builds cutting edge
                  products for businesses to grow to a web scale
                </p>
                <ul className="ftco-footer-social list-unstyled mt-5">
                  <li className="ftco-animate">
                    <Link to="!#">
                      <span className="fa fa-twitter"></span>
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to="!#">
                      <span className="fa fa-facebook"></span>
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to="!#">
                      <span className="fa fa-instagram"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">About Us</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/project">
                      <span className="fa fa-chevron-right mr-2"></span>Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <span className="fa fa-chevron-right mr-2"></span>Meet the
                      team
                    </Link>
                  </li>
                  <li>
                    <Link to="!#">
                      <span className="fa fa-chevron-right mr-2"></span>Services
                    </Link>
                  </li>
                  <li>
                    <Link to="!#">
                      <span className="fa fa-chevron-right mr-2"></span>Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Company</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about">
                      <span className="fa fa-chevron-right mr-2"></span>About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span className="fa fa-chevron-right mr-2"></span>Contact
                      Us
                    </Link>
                  </li>
                  <li>
                    <Link to="privacy_policy">
                      <span className="fa fa-chevron-right mr-2"></span>Privacy
                      Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon fa fa-map"></span>
                      <span className="text">
                        H-6, Akansha, Goregaon West, Mumbai 400104
                      </span>
                    </li>
                    <li>
                      <a href="tel:+918080808128">
                        <span className="icon fa fa-phone"></span>
                        <span className="text">(+91) 8080808128 </span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@intranetcomputers.com">
                        <span className="icon fa fa-envelope pr-4"></span>
                        <span className="text">info@intranetcomputers.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                {" "}
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved
                <i
                  className="icon-heart color-danger"
                  aria-hidden="true"
                ></i>{" "}
                by <a href="#">Intranet Computers</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <a
        className="floating-link position-fixed fa-tip-right show"
        title=""
        href="https://api.whatsapp.com/send?phone=918080808128&amp;text="
        target="_blank"
        data-original-title="WhatsApp Chat"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </>
  );
};

export default Footer;
