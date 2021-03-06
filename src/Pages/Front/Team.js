import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="A dedicated team of expertise website developers is what you will find in Freelancer Developer."
        />
        <meta
          name="keyword"
          content="Freelancer Website developers India, SEO experts, Professional team, Management team, freelancerdevs."
        />
        <title>Meet our freelancer team | FreelancerDevs</title>
      </Helmet>
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
                  Team <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h4 className="mb-3 bread">
                Having efficient experience and a proficient team of responsible
                web developers.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section team-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-second"></div>
                  {/* <div class="">
                    <img
                      src={require("../../Assets/images/Mayur.png")}
                      class="img-fluid"
                    />
                  </div> */}
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Mayur <br />
                      Mane
                    </h3>
                    <span className="position mb-4">
                      Solution Architect / Developer
                    </span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-first"></div>
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Pooja <br />
                      Benbansi
                    </h3>
                    <span className="position mb-4">
                      Team lead / PHP Developer
                    </span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-third"></div>
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Harshit <br />
                      Singh
                    </h3>
                    <span className="position mb-4">MERN Stack Developer</span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-fourth"></div>
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Vikas <br />
                      Gupta
                    </h3>
                    <span className="position mb-4">
                      Reactjs & Nodejs Developer
                    </span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-fifth"></div>
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Sameer <br />
                      Mandave
                    </h3>
                    <span className="position mb-4">
                      React Native & Electronjs Developer
                    </span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-sixth"></div>
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Pratik <br />
                      Padte
                    </h3>
                    <span className="position mb-4">
                      Php & Angularjs Developer
                    </span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-seventh"></div>
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Neha <br />
                      Patil
                    </h3>
                    <span className="position mb-4">
                      IOS & Android Developer
                    </span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 ftco-animate">
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch justify-content-end">
                  <div className="img align-self-stretch team-eight"></div>
                </div>
                <div className="text d-flex align-items-center pt-3">
                  <div>
                    <h3 className="mb-2">
                      Angad <br />
                      Yadav
                    </h3>
                    <span className="position mb-4">UI/UX Designer</span>
                    <ul className="ftco-social">
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-twitter"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-facebook"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-google-plus"></span>
                        </a>
                      </li>
                      <li className="ftco-animate">
                        <a href="#">
                          <span className="icon-instagram"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row justify-content-center no-gutters">
        <div className="col-md-12 heading-section text-center ftco-animate mb-5">
          <h2 className="mb-2">
            If Needed then More People Will Available....
          </h2>
        </div>
      </div>
    </>
  );
};

export default Team;
