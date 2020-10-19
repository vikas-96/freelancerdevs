import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
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
                  Privacy <i className="fa fa-chevron-right"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb ftco-no-pt about-section">
        <div className="container">
          <div className="row">
            <div className="wrap-about py-md-5 ftco-animate">
              <div className=" col-sm-12 heading-section pr-md-5">
                <h3 className="mb-4">Privacy Policy</h3>
                <h5>Introduction</h5>{" "}
                <p>
                  This Privacy Policy governs the manner in which Intranet
                  collects, uses, maintains and discloses information collected
                  from users (each, a “User”) of the website
                  http://developer.intranetcomputers.com (“Site”). This privacy
                  policy applies to the Site and all products and services
                  offered by Intranet.
                </p>
                <h5>Personal identification information</h5>
                <p>
                  We may collect personal identification information from Users
                  in a variety of ways, including, but not limited to, when
                  Users visit our site, fill out a form, and in connection with
                  other activities, services, features or resources we make
                  available on our Site. Users may be asked for, as appropriate,
                  name, email address, phone number, geographical location, etc.
                  Users may, however, visit our Site anonymously. We will
                  collect personal identification information from Users only if
                  they voluntarily submit such information to us. Users can
                  always refuse to supply personally identification information,
                  except that it may prevent them from engaging in certain Site
                  related activities.
                </p>
                <h5>Non-personal identification information</h5>
                <p>
                  We may collect non-personal identification information about
                  Users whenever they interact with our Site. Non-personal
                  identification information may include the browser name, the
                  type of device and technical information about User’s means of
                  connection to our Site, such as the operating system and the
                  Internet service providers’ utilized and other similar
                  information.
                </p>
                <h5>Web browser cookies</h5>
                <p>
                  Our Site may use “cookies” to enhance User experience. User’s
                  web browser places cookies on their hard drive for
                  record-keeping purposes and sometimes to track information
                  about them. User may choose to set their web browser to refuse
                  cookies. If they do so, note that some parts of the Site may
                  not function properly.
                </p>
                <h5>How we use collected information</h5>
                <p>
                  Intranet may collect and use User’s personal information for
                  the following purposes:
                </p>
                <ul>
                  <li>
                    To improve customer service: Information you provide helps
                    us respond to your customer service requests and support
                    needs more efficiently.
                  </li>
                  <li>
                    To personalize user experience: We may use information in
                    the aggregate to understand how our Users as a group use the
                    services and resources provided on our Site.
                  </li>
                  <li>
                    To improve our Site: We may use feedback you provide to
                    improve our products and services.
                  </li>
                  <li>
                    To send periodic emails: We may use the email address to
                    send User information and updates pertaining to their order.
                    It may also be used to respond to their inquiries,
                    questions, and/or other requests. If User decides to opt-in
                    to our mailing list, they will receive emails that may
                    include company news, updates, related product or service
                    information, etc. If at any time the User would like to
                    unsubscribe from receiving future emails, we include
                    detailed unsubscribe instructions at the bottom of each
                    email or User may contact us via our Site.
                  </li>
                </ul>
                <h5>How we protect your information</h5>
                <p>
                  We adopt appropriate data collection, storage and processing
                  practices and security measures to protect against
                  unauthorized access, alteration, disclosure or destruction of
                  your personal information, username, password and data stored
                  on our Site.
                </p>
                <h5>Sharing your personal information</h5>
                <p>
                  We do not sell, trade, or rent Users personal identification
                  information to others. We may share generic aggregated
                  demographic information not linked to any personal
                  identification information regarding visitors and users with
                  our business partners, trusted affiliates and advertisers for
                  the purposes outlined above.
                </p>
                <h5>Changes to this privacy policy</h5>
                <p>
                  Intranet has the discretion to update this privacy policy at
                  any time. When we do, we will revise the updated date at the
                  bottom of this page. We encourage Users to frequently check
                  this page for any changes to stay informed about how we are
                  helping to protect the personal information we collect. You
                  acknowledge and agree that it is your responsibility to review
                  this privacy policy periodically and become aware of
                  modifications.
                </p>
                <h5>Your acceptance of these terms</h5>
                <p>
                  By using this Site, you signify your acceptance of this
                  policy. If you do not agree to this policy, please do not use
                  our Site. Your continued use of the Site following the posting
                  of changes to this policy will be deemed your acceptance of
                  those changes.
                </p>
                <h5>Contacting us</h5>
                <p>
                  If you have any questions about this Privacy Policy, please
                  feel free to <Link to="/contact">Contact Us</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
