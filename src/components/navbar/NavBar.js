import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src="/images/download.jpg" alt="" className="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active white-color"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active white-color " to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active white-color" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active white-color"
                  to="/terms%conditions"
                >
                  Terms And Conditions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active white-color" to='contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-navbar mt-3 mb-3" type="submit">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
