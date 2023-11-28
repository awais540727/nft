import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <h2>About Us</h2>
        </div>

        <div className="about-card">
          <div className="row mt-4 mb-4 m-2">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              <h2 className="mt-4">
                On a mission to environmental sustainability with NFT's
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                vel ea beatae neque reiciendis sint Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Explicabo minima repellendus
                sapiente aliquid cum itaque.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
              <img
                src="/images/about.svg"
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </div>
        </div>
        <h2 className="mt-5 text-center">
          NFT Gen Marketplace with everything for everyone
        </h2>
        <div className="text-center">
          <video
            autoPlay muted loop
            style={{ width: "500px", height: "500px" }}
          >
            <source src="/images/about.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default About;
