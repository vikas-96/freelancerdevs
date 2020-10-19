import React from "react";

const Quotes = () => {
  return (
    <>
      <section className="ftco-section ftco-no-pb ftco-no-pt about-section">
        <div className="container">
          <div className="row">
            <div
              className="wrap-about py-md-5 ftco-animate"
              style={{ textAlign: "center" }}
            >
              <div className=" col-sm-12 heading-section pr-md-5">
                <h3 className="mb-4">About Us</h3>

                <h5>
                  Started as a team of two passionate young individuals and now
                  we deliver amazing user experiences through technology to the
                  people who trusted us around the globe. Being the tech
                  specialists, we create solutions that allow you to do it all
                  in an easy and seamless manner. Be with us to grow together.
                </h5>
              </div>
              <div className="d-flex" style={{ paddingTop: "8%" }}>
                <div className="col-md-6 align-items-stretch ftco-animate service-components">
                  <div className="media block-6 services d-block text-center px-3 pb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img
                        alt="website img"
                        src={require("../../../Assets/images/assured-service.png")}
                      />
                    </div>
                    <div className="media-body py-md-4">
                      <h3>Assured Services</h3>
                      <p>
                        We are always at the top in terms of client
                        satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-items-stretch ftco-animate service-components">
                  <div className="media block-6 services d-block text-center px-3 pb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img
                        alt="website img"
                        src={require("../../../Assets/images/worldwide.png")}
                      />
                    </div>
                    <div className="media-body py-md-4">
                      <h3>Worldwide Clients</h3>
                      <p>We are trusted by 25+ clients from worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-md-6 align-items-stretch ftco-animate service-components">
                  <div className="media block-6 services d-block text-center px-3 pb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img
                        alt="website img"
                        src={require("../../../Assets/images/technology.png")}
                      />
                    </div>
                    <div className="media-body py-md-4">
                      <h3>Next-Gen Technology Provider</h3>
                      <p>
                        Lifetime provider of uttermost tactics for your digital
                        journey.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 align-items-stretch ftco-animate service-components">
                  <div className="media block-6 services d-block text-center px-3 pb-4">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img
                        alt="website img"
                        src={require("../../../Assets/images/AI.png")}
                      />
                    </div>
                    <div className="media-body py-md-4">
                      <h3>It’s All About Technology</h3>
                      <p>24*7 support from our expertise to your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-6 mb-4 mb-sm-0">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="mr-3">
                        <img
                          alt="website img"
                          style={{ height: "110px" }}
                          src={require("../../../Assets/images/mission.png")}
                        />
                      </div>
                      <div>
                        <h4 className="m-0">Mission</h4>
                      </div>
                    </div>
                    <hr />
                    <p>
                      Endured customer contentment with inventive design and
                      development to convey outstanding technology
                      infrastructure, services, and solutions that advertise
                      characterizing astounding arrangements that make esteem
                      and solid upper hand for our consumers around the globe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 mb-4 mb-sm-0">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="mr-3">
                        <img
                          alt="website img"
                          style={{ height: "110px" }}
                          src={require("../../../Assets/images/vision.png")}
                        />
                      </div>
                      <div>
                        <h4 className="m-0">Vision</h4>
                      </div>
                    </div>
                    <hr />
                    <p>
                      To implement an environment that demeanor IT Abundance
                      wherein the services are ingenious and swank web
                      development and software solutions in an impending era of
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotes;
