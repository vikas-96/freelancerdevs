import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Clients = () => {
  return (
    <>
      <section className="ftco-section testimony-section happy-client-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ftco-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Clients</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <OwlCarousel
                className="carousel-testimony owl-theme"
                loop
                margin={30}
                options={{
                  slideBy: 1,
                }}
                responsive={{
                  0: {
                    items: 1,
                  },
                  400: {
                    items: 1,
                  },
                  600: {
                    items: 2,
                  },
                  700: {
                    items: 2,
                  },
                  1000: {
                    items: 3,
                  },
                }}
              >
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4">
                        The Freelancerdevs team has been instrumental in shaping
                        our requirements and deliver the best product. Team is
                        very dedicated and talented. We are glad to choose them
                        as our technology partners.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img client-first-img"
                          // style="background-image: url(images/person_1.jpg)"
                        ></div>
                        <div className="pl-3">
                          <p className="name">Jesal Chauhan</p>
                          <span className="position">Owner, ForexTwist</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4">
                        The guys at Freelancerdevs have strong technical
                        knowledge. They completed our website within record
                        time. There were a lot of features in the app which
                        required research on different platforms.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img client-second-img"
                          // style="background-image: url(images/person_3.jpg)"
                        ></div>
                        <div className="pl-3">
                          <p className="name">Errol Ferreira</p>
                          <span className="position">
                            Owner, Startup Canada{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4">
                        The dedication of your company, we truly appreciate each
                        and every one of your crew in helping us to achieve our
                        goals, bring us to #1 location’s and broaden our
                        horizons.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img client-third-img"
                          // style="background-image: url(images/person_2.jpg)"
                        ></div>
                        <div className="pl-3">
                          <p className="name">Rajiv Giri</p>
                          <span className="position">
                            Manager, Askme Infoline
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4">
                        Excellent company to work with. They provide all kinds
                        of options for building software. Trustworthy,
                        professional and quality team. They have transparent
                        process and flexible people.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img client-fourth-img"
                          // style="background-image: url(images/person_1.jpg)"
                        ></div>
                        <div className="pl-3">
                          <p className="name">Sanjeev Dillon</p>
                          <span className="position">
                            Product Manager, Zionkart
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4">
                        One of the Best company I ever had business with. Once
                        you do business with the Freelancerdevs, I am sure you
                        will visit them again and again as their quality of work
                        is very good.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img client-fifth-img"
                          // style="background-image: url(images/person_2.jpg)"
                        ></div>
                        <div className="pl-3">
                          <p className="name">Mittul Patel</p>
                          <span className="position">Owner, Amazingpen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
