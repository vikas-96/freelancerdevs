import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Service = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Freelancer developers is a software development company that offers top-rated software development services across different clients in India and abroad. | Freelancerdevs."
        />
        <meta
          name="keyword"
          content="software application development, Mobile application development, Webiste development companies, App development company, website development company India"
        />
        <title>Best Website Services | Freelancer developers.</title>
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
                  Services <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h4 className="mb-3 bread">
                As a software development company, we understand the role of
                providing you with best solutions and services for your
                projects.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section-what-we-do ftco-section bg-light">
        <div className="wrapper">
          <div className="container-fluid">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8 text-center mb-5 heading-section">
                  <span className="subheading">Services</span>
                  <h2 className="position-relative">We’re Expertise In</h2>
                  <strong>
                    As a software development company, we understand the role of
                    providing you with best solutions and services for your
                    projects.
                  </strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-6 col-xl-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <div className="card card-sh card-hover h-100 text-decoration-none hover-1 app-develop">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-1 mb-3 mx-auto mx-sm-0">
                      <img
                        alt="website img"
                        className="mb-2"
                        src={require("../../Assets/images/mobile-app.png")}
                      />
                    </div>
                    <h5 className="font-medium">App Development</h5>
                    <p className="text-gray-2">
                      We Provide user-centric and exceptionally captivating
                      mobile app solutions customized for every business model,
                      from iPhone apps to android apps.
                    </p>
                    <ul className="text-gray-2 d-none d-sm-block">
                      <li>Android Application</li>
                      <li>iOS Application</li>
                      <li>Hybrid Application</li>
                      <li>App Redesign &amp; Update</li>
                      <li>Mobile UI/UX Design</li>
                      <li>App Support &amp; Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 col-xl-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <div className="card card-sh card-hover h-100 text-decoration-none hover-1  web-develop">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-1 mb-3 mx-auto mx-sm-0">
                      <img
                        alt="website img"
                        className="mb-2"
                        src={require("../../Assets/images/web-develop.png")}
                      />
                    </div>
                    <h5 className="font-medium">Web Development</h5>
                    <p className="text-gray-2">
                      We develop and deliver high quality, responsive web sites
                      ranging from simple websites to complex portals that are
                      available on the web, mobile & tablet.
                    </p>
                    <ul className="text-gray-2 d-none d-sm-block">
                      <li>Nodejs, Reactjs, Php Development</li>
                      <li>SaaS Apps Development Services</li>
                      <li>Backend Development</li>
                      <li>UI/UX Development</li>
                      <li>E-commerce Development</li>
                      <li>Corporate Website &amp; Identity Design</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 col-xl-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <div className="card card-sh card-hover h-100 text-decoration-none hover-1  web-design">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-1 mb-3 mx-auto mx-sm-0">
                      <img
                        alt="website img"
                        className="mb-2"
                        src={require("../../Assets/images/web-design.png")}
                      />
                    </div>
                    <h5 className="font-medium">Web Design</h5>
                    <p className="text-gray-2">
                      We create an amazing digital experience for Startups,
                      Small & Medium-size Businesses from ideation to the final
                      execution with the fine clarity from our expertise.
                    </p>
                    <ul className="text-gray-2 d-none d-sm-block">
                      <li>Corporate Website designing</li>
                      <li>Responsive Web Designing</li>
                      <li>Email Template Designing</li>
                      <li>UI/UX Designing</li>
                      <li>Theme designing</li>
                      <li>Interface Designing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 col-xl-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <div className="card card-sh card-hover h-100 text-decoration-none hover-1  digital-marketing">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-1 mb-3 mx-auto mx-sm-0">
                      <img
                        alt="website img"
                        className="mb-2"
                        src={require("../../Assets/images/seo.png")}
                      />
                    </div>
                    <h5 className="font-medium">Digital Marketing</h5>
                    <p className="text-gray-2">
                      Grow your brand visibility and increase your website
                      traffic with our best digital marketing services focused
                      on higher search engine rankings for your business.
                    </p>
                    <ul className="text-gray-2 d-none d-sm-block">
                      <li>SEO for Globalization &amp; Localization</li>
                      <li>SEO for E-Commerce</li>
                      <li>SEO for Enterprise Application</li>
                      <li>Social Media Marketing</li>
                      <li>Google Ad words Services</li>
                      <li>Play Store &amp; App Store Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 col-xl-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <div className="card card-sh card-hover h-100 text-decoration-none hover-1 quality-assurance">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-1 mb-3 mx-auto mx-sm-0">
                      <img
                        alt="website img"
                        className="mb-2"
                        src={require("../../Assets/images/quality-assurance.png")}
                      />
                    </div>
                    <h5 className="font-medium">Quality Assurance</h5>
                    <p className="text-gray-2">
                      Leave your QA process to our professional team and ensure
                      your final product will delight your customer’s assumption
                      with high-quality running standards.
                    </p>
                    <ul className="text-gray-2 d-none d-sm-block">
                      <li>QA Consulting</li>
                      <li>Quality Assessment</li>
                      <li>Unit Testing</li>
                      <li>Full Cycle Testing</li>
                      <li>Automated Testing</li>
                      <li>Performance Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6 col-xl-4 mb-4 text-center text-sm-left wow fadeIn animated">
                <div className="card card-sh card-hover h-100 text-decoration-none hover-1 cloud-service">
                  <div className="card-body d-flex flex-column">
                    <div className="icon-1 mb-3 mx-auto mx-sm-0">
                      <img
                        alt="website img"
                        className="mb-2"
                        src={require("../../Assets/images/cloud-service.png")}
                      />
                    </div>
                    <h5 className="font-medium">Cloud Services</h5>
                    <p className="text-gray-2">
                      Freelancerdevs could be your ideal partner to help you
                      make the most out of your cloud with minimum disruption.
                    </p>
                    <ul className="text-gray-2 d-none d-sm-block">
                      <li>Cloud Advisory</li>
                      <li>Cloud Build and Migration</li>
                      <li>Devops</li>
                      <li>Cloud Management</li>
                      <li>Cloud Solution on AWS</li>
                      <li>Cloud Solution on Azure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex align-items-stretch ftco-animate service-components">
              <div className="media block-6 services d-block text-center px-3 pb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img alt="website img" src={require("../../Assets/images/web-design.png")} />
                </div>
                <div className="media-body py-md-4">
                  <h3>Website Development</h3>
                  <p>
                    Freelancerdevs is a full service Web Development Company, that
                    offers Web Development Services using all leading
                    development technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate service-components">
              <div className="media block-6 services d-block text-center px-3 pb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img alt="website img" src={require("../../Assets/images/android.png")} />
                </div>
                <div className="media-body py-md-4">
                  <h3>Android App Development</h3>
                  <p>
                    Our Android mobile app developers have learned the craft to
                    maximize versatility of the Android platform, enabling us to
                    quickly turn ideas into tomorrow’s download on Google Play
                    store.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate service-components">
              <div className="media block-6 services d-block text-center px-3 pb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img alt="website img" src={require("../../Assets/images/mobile-app.png")} />
                </div>
                <div className="media-body py-md-4">
                  <h3>IOS/iphone App Development</h3>
                  <p>
                    Our iPhone mobile app developers strive to achieve a perfect
                    synthesis of design, usability, engineering and goal
                    conversions for your business ideas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate service-components">
              <div className="media block-6 services d-block text-center px-3 pb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img alt="website img" src={require("../../Assets/images/ecommerce.png")} />
                </div>
                <div className="media-body py-md-4">
                  <h3>e-Commerce Development</h3>
                  <p>
                    A leading e-Commerce Website Development Company, offering
                    solutions for a successful online store. With services like,
                    Web Design, Web Development and SEO.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate service-components">
              <div className="media block-6 services d-block text-center px-3 pb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img alt="website img" src={require("../../Assets/images/cloud-service.png")} />
                </div>
                <div className="media-body py-md-4">
                  <h3>Cloud Services</h3>
                  <p>
                    Freelancerdevs could be your ideal partner to help you make the
                    most out of your cloud with minimum disruption.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-stretch ftco-animate service-components">
              <div className="media block-6 services d-block text-center px-3 pb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img alt="website img" src={require("../../Assets/images/seo.png")} />
                </div>
                <div className="media-body py-md-4">
                  <h3>SEO Services</h3>
                  <p>
                    Not just following the SEO rule. We are agile & experienced
                    to deliver conversion goals & not just top ranking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Service;
