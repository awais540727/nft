import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
              <h5 className="white-color mt-5">Top Frameworks</h5>
              <button className="btn btn-navbar white-color m-3">
                Mern Stack
              </button>
              <button className="btn btn-navbar white-color m-3">
                React Js
              </button>
              <button className="btn btn-navbar white-color m-3">
                Node Js
              </button>
              <button className="btn btn-navbar white-color m-3">
                Express Js
              </button>
              <button className="btn btn-navbar white-color m-3">
                Apollo Client
              </button>
              <button className="btn btn-navbar white-color m-3">
                Mongodb
              </button>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
              <h5 className="white-color mt-5">Development</h5>
              <p className="white-color">Mern Stack</p>
              <p className="white-color">React Js</p>
              <p className="white-color">Node Js</p>
              <p className="white-color">Express Js</p>
              <p className="white-color">Apollo Client</p>
              <p className="white-color">Mongodb</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
              <h5 className="white-color mt-5">Development</h5>
              <p className="white-color">Mern Stack</p>
              <p className="white-color">React Js</p>
              <p className="white-color">Node Js</p>
              <p className="white-color">Express Js</p>
              <p className="white-color">Apollo Client</p>
              <p className="white-color">Mongodb</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
              <h5 className="text-color mt-5 white-color mt-2 mb-2">
                Subscribe to our Newsletter
              </h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-navbar">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
