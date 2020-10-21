import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";

const Header = (props) => {
  const pagename = props.location.pathname;
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Freelancer developers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className={pagename === "/" ? "nav-item active" : "nav-item"}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  pagename === "/about" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              {/* <li
                className={
                  pagename === "/team" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/team" className="nav-link">
                  Team
                </Link>
              </li> */}
              <li
                className={
                  pagename === "/service" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/service" className="nav-link">
                  Services
                </Link>
              </li>
              <li
                className={
                  pagename === "/project" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/project" className="nav-link">
                  Project
                </Link>
              </li>
              <li
                className={
                  pagename === "/contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
