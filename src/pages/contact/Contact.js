import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2 className="mt-5 mb-5 text-center">Contact Us</h2>
        <div className="row mt-5 mb-5">
          <div className="col-md-4 col-sm-6 col-6 text-center">
            <i
              className="fa fa-phone mt-2 mb-2"
              style={{ fontSize: "3rem" }}
            ></i>
            <h3 className="mt-2 mb-2">Phone</h3>
            <p className="mt-2 mb-2">+923055798339</p>
          </div>
          <div className="col-md-4 col-sm-6 col-6 text-center">
            <i
              className="fa fa-envelope mt-2 mb-2"
              style={{ fontSize: "3rem" }}
            ></i>

            <h3>Email</h3>
            <p className="mt-2 mb-2">awaisali786378@gmail.com</p>
          </div>
          <div className="col-md-4 col-sm-6 col-6 text-center">
            <i
              className="fa fa-map-marker mt-2 mb-2"
              style={{ fontSize: "3rem" }}
            ></i>

            <h3>Location</h3>
            <p className="mt-2 mb-2">Pakistan, Lahore</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
