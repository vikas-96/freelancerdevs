import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
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
                  Projects <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h3 className="mb-3 bread">
                Our software services and solutions are designed with a focus on
                secure, scalable, expandable and reliable business systems.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-portfolio project-section">
        <div className="row justify-content-center no-gutters">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">Projects</span>
            <h2 className="mb-2">Our Unique Latest Projects</h2>
          </div>
        </div>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center">
                {/* <div
                  className="col-md-5 img js-fullheight project-first-img"
                  // style="background-image: url(images/work-1.jpg);"
                ></div> */}
                <div className="col-md-5 project-first-img">
                  <img
                    src={require("../../Assets/images/forextwist.jpeg")}
                    className="img-fluid"
                    alt="Forextwist"
                  />
                </div>
                <div className="col-md-7">
                  <div className="text pt-5 pl-0 pl-lg-5 pl-md-4 ftco-animate">
                    <div className="px-4 px-lg-4">
                      <div className="desc">
                        <div className="top">
                          <h2 className="mb-4">
                            <a
                              rel="noopener noreferrer"
                              href="https://www.forextwist.com"
                              target="_blank"
                            >
                              Forex Twist
                            </a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <p>
                            Forex Twist is amongst the most favored and trusted
                            companies offering online forex trading in india.
                            Forex Twist belive that we only succeed when our
                            clients are successful Our mission is to provide
                            good learning skills with minimum efforts. We are
                            constantly developing new advanced ways to make our
                            client’s trading experience even better.
                          </p>
                          <p>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.forextwist.com"
                              target="_blank"
                              className="custom-btn"
                            >
                              Visit Website
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center">
                {/* <div
                  className="col-md-5 order-md-last img js-fullheight project-second-img"
                  // style="background-image: url(images/work-2.jpg);"
                ></div> */}
                <div className="col-md-5 order-md-last project-first-img">
                  <img
                    src={require("../../Assets/images/askmeinfoline.jpeg")}
                    className="img-fluid"
                    alt="AskmeInfoline"
                  />
                </div>
                <div className="col-md-7">
                  <div className="text pt-5 pr-md-5 ftco-animate">
                    <div className="px-4 px-lg-4">
                      <div className="desc text-md-right">
                        <div className="top">
                          <h2 className="mb-4">
                            <a
                              rel="noopener noreferrer"
                              href="https://www.askmeinfoline.com"
                              target="_blank"
                            >
                              Askme Infoline
                            </a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <p>
                            Askme Infoline provides repair services for almost
                            all your house appliances and to cater digital needs
                            of your business. Established 18 years ago, Askme
                            started with fewer employees and were only operating
                            in one city. In present with a great reputation,
                            Askme now actively offer repair services in 8 big
                            cities across India.
                          </p>
                          <p>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.askmeinfoline.com"
                              target="_blank"
                              className="custom-btn"
                            >
                              Visit Website
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center">
                {/* <div
                  className="col-md-5 img js-fullheight project-third-img"
                  // style="background-image: url(images/work-3.jpg);"
                ></div> */}
                <div className="col-md-5 project-first-img">
                  <img
                    src={require("../../Assets/images/zionkart.jpeg")}
                    className="img-fluid"
                    alt="Zionkart"
                  />
                </div>
                <div className="col-md-7">
                  <div className="text pt-5 pl-md-5 pl-md-4 ftco-animate">
                    <div className="px-4 px-lg-4">
                      <div className="desc">
                        <div className="top">
                          <h2 className="mb-4">
                            <a
                              rel="noopener noreferrer"
                              href="https://www.zionkart.in"
                              target="_blank"
                            >
                              Zionkart
                            </a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <p>
                            Zionkart.in is an Indian e-commerce website owned by
                            M/S ZIONKART, in Patna, Bihar, India Founded in
                            2020. The website and app provides a special focus
                            on the stationery, office supplies and covers the
                            book sales and various IT-equipment’s.
                          </p>
                          <p>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.zionkart.in"
                              target="_blank"
                              className="custom-btn"
                            >
                              Visit Website
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center">
                {/* <div
                  className="col-md-5 order-md-last img js-fullheight project-fourth-img"
                  // style="background-image: url(images/work-4.jpg);"
                ></div> */}
                <div className="col-md-5 order-md-last project-first-img">
                  <img
                    src={require("../../Assets/images/piyalzinal.jpeg")}
                    className="img-fluid"
                    alt="Piyal&Zinal"
                  />
                </div>
                <div className="col-md-7">
                  <div className="text pt-5 pr-md-5 ftco-animate">
                    <div className="px-4 px-lg-4">
                      <div className="desc text-md-right">
                        <div className="top">
                          <h2 className="mb-4">
                            <a
                              rel="noopener noreferrer"
                              href="https://payalandzinal.com"
                              target="_blank"
                            >
                              Payal & Zinal
                            </a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <p>
                            The label- Payal & Zinal achieved an overwhelming
                            success through debut collection in 2016 which was
                            all about Androgyny Fashion.At the age of 23 & 22,
                            duos designers have first label outlet in Baroda and
                            also own the rack at the multi designer store called
                            AJILIYAA- Surat.
                          </p>
                          <p>
                            <a
                              rel="noopener noreferrer"
                              href="https://payalandzinal.com"
                              target="_blank"
                              className="custom-btn"
                            >
                              Visit Website
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center">
                {/* <div
                  className="col-md-5 img js-fullheight project-third-img"
                  // style="background-image: url(images/work-3.jpg);"
                ></div> */}
                <div className="col-md-5 project-first-img">
                  <img
                    src={require("../../Assets/images/vaspra.jpeg")}
                    className="img-fluid"
                    alt="Vaspra"
                  />
                </div>
                <div className="col-md-7">
                  <div className="text pt-5 pl-md-5 pl-md-4 ftco-animate">
                    <div className="px-4 px-lg-4">
                      <div className="desc">
                        <div className="top">
                          <h2 className="mb-4">
                            <a
                              rel="noopener noreferrer"
                              href="http://vaspraenterprises.in"
                              target="_blank"
                            >
                              Vaspra Enterprises
                            </a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <p>
                            Vaspra Enterprises is an eminent entity involved in
                            manufacturing of industrial goods. They offer there
                            clients with a wide & high quality range of Fan
                            Guards, Coil Guards, and Wire Mesh. They started the
                            journey in the year 2000, incorporated as a
                            partnership firm in Vapi, Gujarat, India.
                          </p>
                          <p>
                            <a
                              rel="noopener noreferrer"
                              href="http://vaspraenterprises.in"
                              target="_blank"
                              className="custom-btn"
                            >
                              Visit Website
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 portfolio-wrap">
              <div className="row no-gutters align-items-center">
                {/* <div
                  className="col-md-5 order-md-last img js-fullheight project-fourth-img"
                  // style="background-image: url(images/work-4.jpg);"
                ></div> */}
                <div className="col-md-5 order-md-last project-first-img">
                  <img
                    src={require("../../Assets/images/sizs.jpeg")}
                    className="img-fluid"
                    alt="Sizs"
                  />
                </div>
                <div className="col-md-7">
                  <div className="text pt-5 pr-md-5 ftco-animate">
                    <div className="px-4 px-lg-4">
                      <div className="desc text-md-right">
                        <div className="top">
                          <h2 className="mb-4">
                            <a
                              rel="noopener noreferrer"
                              href="http://sizs.co.in/"
                              target="_blank"
                            >
                              Sizs
                            </a>
                          </h2>
                        </div>
                        <div className="absolute">
                          <p>
                            Sizs has been in the business of Massage Products
                            for more than 10 years, Sizs have been one of the
                            leading importers of Health and Beauty Equipments.
                          </p>
                          <p>
                            <a
                              rel="noopener noreferrer"
                              href="http://sizs.co.in/"
                              target="_blank"
                              className="custom-btn"
                            >
                              Visit Website
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center no-gutters">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <h2 className="mb-2">And Many More....</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
