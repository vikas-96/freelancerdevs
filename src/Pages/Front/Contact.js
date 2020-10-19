import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./Component/ContactusForm";

const Contact = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        // style="background-image: url('images/bg_2.jpg');"
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link to="/">
                    Home <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                <span>
                  Contact us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h4 className="mb-3 bread">Get in touch with Our Experts!</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section">
        <div className="container">
          <div className="row block-9 justify-content-center mb-5">
            <div className="col-md-8 mb-md-5">
              <div className="bg-light p-5 contact-form">
                <ContactForm buttontext="Send Message" page="contactus" />
              </div>
              <h2 className="text-center mt-5">
                If you got any questions please do not hesitate to send us a
                message. One of our Experts will contact you within 2 business
                days.
              </h2>
            </div>
          </div>
          <div className="row d-flex mb-5 contact-info justify-content-center">
            <div className="col-md-8">
              <div className="row mb-5">
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="fa fa-map"></span>
                  </div>
                  <p>
                    <span>Address:</span> H-6, Akansha, Goregaon West, Mumbai
                    400104
                  </p>
                </div>
                <div className="col-md-4 text-center border-height py-4">
                  <div className="icon">
                    <span className="fa fa-phone"></span>
                  </div>
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel:+918080808128">(+91) 8080808128</a>
                  </p>
                </div>
                <div className="col-md-4 text-center py-4">
                  <div className="icon">
                    <span className="fa fa-paper-plane"></span>
                  </div>
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@intranetcomputers.com">
                      info@intranetcomputers.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60291.987566036456!2d72.81334811341416!3d19.184314037477737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b74d7c53d8fb%3A0xcb919b79948470f4!2sIntranet%20Computers!5e0!3m2!1sen!2sin!4v1602348914891!5m2!1sen!2sin"
                width="100%"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                title="This is an Map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
