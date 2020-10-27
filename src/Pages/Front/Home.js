import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Component/Counter";
import Clients from "./Component/Clients";
import WhyChooseUs from "./Component/WhyChooseUs";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Looking for right place to make your website or app then contact freelancer developers."
        />
        <meta
          name="keyword"
          content="freelancer developers, website development, app development seo, digital marketing"
        />
        <title>Best Web Development Freelancing | FreelancerDevs</title>
      </Helmet>
      <section className="hero-wrap" data-stellar-background-ratio="0.3">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center">
            <div className="col-md-10 col-lg-7 ftco-animate d-flex align-items-end">
              <div className="text">
                <h1 className="mb-4">
                  Modern <span>Innovative</span> Software
                </h1>
                <p style={{ fontSize: "18px" }}>
                  A full-stack engineering firm that builds cutting edge
                  products for businesses to grow to a web scale.
                </p>
                <div className="d-flex meta">
                  <div className="">
                    <p className="mb-0">
                      <Link
                        to="/project"
                        className="btn btn-primary py-3 px-2 px-md-4 "
                      >
                        Explore Projects
                      </Link>
                    </p>
                  </div>
                  {/* <a
                    href="!#"
                    className="d-flex align-items-center button-link"
                  >
                    <div className="button-video d-flex align-items-center justify-content-center">
                      <span className="fa fa-play"></span>
                    </div>
                    <span>Watch our video</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb ftco-no-pt bg-primary process-section">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-3 d-flex align-items-stretch ftco-animate process-int">
              <div className="media block-6 services services-bg d-block text-center px-4 py-5 pb-mv-0 mb-mv-0">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-supervised"></span>
                </div>
                <div className="media-body py-md-4">
                  <h3>Requirement Gathering</h3>
                  <p>
                    The stage of discovering and researching, determines how the
                    subsequent steps will look like.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch ftco-animate process-int">
              <div className="media block-6 services services-bg services-darken d-block text-center px-4 py-5 pb-mv-0 mb-mv-0">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-system"></span>
                </div>
                <div className="media-body py-md-4">
                  <h3>Wireframe Creation</h3>
                  <p>
                    Based on the information that was gathered together in the
                    previous phase, the sitemap is created.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch ftco-animate process-int">
              <div className="media block-6 services services-bg services-lighten d-block text-center px-4 py-5 pb-mv-0 mb-mv-0">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-accounting"></span>
                </div>
                <div className="media-body py-md-4">
                  <h3>Development Process</h3>
                  <p>
                    Finally start creating the website. Frameworks and CMS will
                    be implemented to make sure that your dream project comes in
                    reality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch ftco-animate process-int">
              <div className="media block-6 services services-bg d-block text-center px-4 py-5 pb-mv-0">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-blueprint"></span>
                </div>
                <div className="media-body py-md-4">
                  <h3>Build a Product For You</h3>
                  <p>
                    All the necessary test cases are performed on a website
                    before launching it into the World Wide Web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-what-we-do ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8 text-center mb-6 heading-section">
              <span className="subheading">Skills</span>
              <h2 className="position-relative">We’re Specialized In</h2>
              <strong>
                We have the expertise and experience to hoist and vest
                organizations with our exotic computing technology.
              </strong>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row mb-4">
              <div className="col-sm-6 col-md-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/mobile-app.png")}
                />
                <h5 className="font-medium">App Development</h5>
                <p>
                  Let’s give an ultimate medium for your next big app idea to
                  show its traits. We offer customized mobile application
                  development services for you irrespective of your diverse
                  industries.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/web-develop.png")}
                />
                <h5 className="font-medium">Web Development</h5>
                <p>
                  Custom designed website services for you to get noticed online
                  by customers who are looking for your growing business.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/web-design.png")}
                />
                <h5 className="font-medium">Web Design</h5>
                <p>
                  The look and feel of your website are paramount in determining
                  whether someone stays or leaves your corporate identity
                  website. We’re here for you to not only develop a stunning
                  website but also help you generate leads.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/seo.png")}
                />
                <h5 className="font-medium">Digital Marketing</h5>
                <p>
                  Exploring the deepest trends in your industry by our Data
                  Analytics tools. We have a set of well-qualified professionals
                  to turn your pieces of information into insights that will
                  improve your business profits.
                </p>
              </div>
              <div className="col-sm-6 col-md-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/quality-assurance.png")}
                />
                <h5 className="font-medium">Quality Assurance</h5>
                <p>
                  Combining well developed QA with most updated tools and
                  methodologies to fulfill our promise of assured quality is
                  delivered.
                </p>
              </div>

              <div className="col-sm-6 col-md-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/cloud-service.png")}
                />
                <h5 className="font-medium">Cloud Services</h5>
                <p>
                  Freelancerdevs could be your ideal partner to help you make
                  the most out of your cloud with minimum disruption that will
                  improve your business profits.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <center>
              <Link
                to="/service"
                className="btn btn-primary py-3 px-2 px-md-4 "
              >
                Explore More
              </Link>
            </center>
          </div>
        </div>
      </section>

      <Counter />

      <section className="section-what-we-do ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8 text-center mb-6 heading-section">
              <span className="subheading">Industry</span>
              <h2 className="position-relative">
                Experience in various domains
              </h2>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="container-fluid">
            <div className="row mb-6">
              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/ecommerce.png")}
                />
                <h5 className="font-medium">e-Commerce</h5>
              </div>
              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/multimedia.png")}
                />
                <h5 className="font-medium">Streaming Media</h5>
              </div>
              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/social-network.png")}
                />
                <h5 className="font-medium">Social Networking</h5>
              </div>
              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/real-state.png")}
                />
                <h5 className="font-medium">Real Estate</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/food-delivery.png")}
                />
                <h5 className="font-medium">Food Delivery</h5>
              </div>
              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/instruction.png")}
                />
                <h5 className="font-medium">Edutech</h5>
              </div>
              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/exercise.png")}
                />
                <h5 className="font-medium">Health & Fitness</h5>
              </div>

              <div className="col-sm-2 col-md-3 mb-4 text-center wow fadeIn animated">
                <img
                  alt="website"
                  className="mb-3"
                  src={require("../../Assets/images/logistics.png")}
                />
                <h5 className="font-medium">Logistics</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />

      {/* <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Pricing</span>
              <h2>Price &amp; Plans</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="block-7">
                <div
                  className="img"
                  style="background-image: url(images/work-1.jpg);"
                ></div>
                <div className="p-4">
                  <ul className="pricing-text mb-2">
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Planning
                      Solution
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>10
                      Construction Drawings
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Selection
                      Materials
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Unlimited
                      Revision
                    </li>
                  </ul>
                </div>
                <div className="d-lg-flex align-items-center w-100 bg-light py-2 px-4">
                  <span className="price">
                    <sup>$</sup> <span className="number">78</span>{" "}
                    <sub>/mos</sub>
                  </span>
                  <p className="w-100 mb-0">
                    <a href="!#" className="btn btn-primary d-block px-2 py-3">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="block-7">
                <div
                  className="img"
                  style="background-image: url(images/work-2.jpg);"
                ></div>
                <div className="p-4">
                  <ul className="pricing-text mb-2">
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Planning
                      Solution
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>10
                      Construction Drawings
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Selection
                      Materials
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Unlimited
                      Revision
                    </li>
                  </ul>
                </div>
                <div className="d-lg-flex align-items-center w-100 bg-light py-2 px-4">
                  <span className="price">
                    <sup>$</sup> <span className="number">88</span>{" "}
                    <sub>/mos</sub>
                  </span>
                  <p className="w-100 mb-0">
                    <a href="!#" className="btn btn-primary d-block px-2 py-3">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="block-7">
                <div
                  className="img"
                  style="background-image: url(images/work-3.jpg);"
                ></div>
                <div className="p-4">
                  <ul className="pricing-text mb-2">
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Planning
                      Solution
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>10
                      Construction Drawings
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Selection
                      Materials
                    </li>
                    <li>
                      <span className="fa fa-check-circle mr-2"></span>Unlimited
                      Revision
                    </li>
                  </ul>
                </div>
                <div className="d-lg-flex align-items-center w-100 bg-light py-2 px-4">
                  <span className="price">
                    <sup>$</sup> <span className="number">98</span>{" "}
                    <sub>/mos</sub>
                  </span>
                  <p className="w-100 mb-0">
                    <a href="!#" className="btn btn-primary d-block px-2 py-3">
                      Get Started
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Blog</span>
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <div className="text">
                  <a
                    href="blog-single.html"
                    className="block-20 img"
                    style="background-image: url('images/image_1.jpg');"
                  ></a>
                  <div className="meta mb-3">
                    <div>
                      <a href="!#">June 01, 2020</a>
                    </div>
                    <div>
                      <a href="!#">Admin</a>
                    </div>
                    <div>
                      <a href="!#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="!#">Make Peace With Your Broken Pieces</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <div className="text">
                  <a
                    href="blog-single.html"
                    className="block-20 img"
                    style="background-image: url('images/image_2.jpg');"
                  ></a>
                  <div className="meta mb-3">
                    <div>
                      <a href="!#">June 01, 2020</a>
                    </div>
                    <div>
                      <a href="!#">Admin</a>
                    </div>
                    <div>
                      <a href="!#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="!#">Make Peace With Your Broken Pieces</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <div className="text">
                  <a
                    href="blog-single.html"
                    className="block-20 img"
                    style="background-image: url('images/image_3.jpg');"
                  ></a>
                  <div className="meta mb-3">
                    <div>
                      <a href="!#">June 01, 2020</a>
                    </div>
                    <div>
                      <a href="!#">Admin</a>
                    </div>
                    <div>
                      <a href="!#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="!#">Make Peace With Your Broken Pieces</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <div className="text">
                  <a
                    href="blog-single.html"
                    className="block-20 img"
                    style="background-image: url('images/image_4.jpg');"
                  ></a>
                  <div className="meta mb-3">
                    <div>
                      <a href="!#">June 01, 2020</a>
                    </div>
                    <div>
                      <a href="!#">Admin</a>
                    </div>
                    <div>
                      <a href="!#" className="meta-chat">
                        <span className="fa fa-comment"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="!#">Make Peace With Your Broken Pieces</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
