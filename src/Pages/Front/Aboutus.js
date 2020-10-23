import React from "react";
import { Link } from "react-router-dom";
import AboutDetail from "./Component/AboutDetail";
import Counter from "./Component/Counter";
import Clients from "./Component/Clients";

const Aboutus = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2 mb-4"
        // style="background-image: url('images/bg_2.jpg')"
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
                </span>
                <span>
                  About us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h4 className="mb-3 bread">
                Delivering the best Website Designs and Web Development Services
                to our cutomers, globally.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <AboutDetail />
      <Counter />
      <Clients />
    </>
  );
};

export default Aboutus;
