import React from "react";
import ContactForm from "./ContactusForm";

const WhyChooseUs = () => {
  return (
    <>
      <section className="ftco-section ftco-no-pb ftco-no-pt about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 order-md-last d-md-flex align-items-stretch">
              <div
                className="img w-100 img-2 img-overlay ml-md-2 p-4 quote-about-img"
                // style="background-image: url(images/about-2.jpg);"
              >
                <div className="request-quote py-5">
                  <div className="py-2">
                    <span className="subheading">Discuss your idea TODAY!</span>
                    <h3>Ask for Experts</h3>
                  </div>
                  <div className="request-form ftco-animate">
                    <ContactForm
                      buttontext="I'd like to discuss my project"
                      page="whychooseus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 wrap-about py-md-5 ftco-animate">
              <div className="heading-section pr-md-5">
                <h3 className="mb-4">Why Choose Us</h3>

                <p>
                  We have highly skilled engineers with excellent technical
                  knowledge and experience in using the latest software
                  standards. We have built a large pool of knowledge that we
                  apply to deliver solutions that meet client's needs,
                  expectations and budget. we understand the role of providing
                  you with best solutions and services for your projects. We
                  develop the same level of online business solutions, with a
                  team of trained and experienced developers. By putting our
                  clients at the heart of everything we do, we are proud that we
                  are still supporting our very first business client.
                </p>

                <p>
                  <strong style={{ fontSize: "20px" }}>Cost Effective</strong>{" "}
                  Enhancement with production cycle and reduction in cost will
                  arrive with, offshore development.
                </p>
                <p>
                  <strong style={{ fontSize: "20px" }}>Experienced</strong>{" "}
                  programmers, engineers & designers, are trained on new
                  technologies and project management to builds cutting edge
                  solutions for businesses.
                </p>
                <p>
                  <strong style={{ fontSize: "20px" }}>Passion</strong> Our
                  process & innovative approach deliver concrete solutions and
                  goals, with great ideas and strong teamwork.
                </p>
                <p>
                  Work with us, and you’ll work with seasoned professionals –
                  vigilant of deadlines, and committed to exceeding client
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
