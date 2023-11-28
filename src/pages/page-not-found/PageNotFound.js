import React from "react";
import { Link } from "react-router-dom";
import './PageNotFound.css'
const PageNotFound = () => {
  return (
    <>
      <div className="page-not-found">
        <h1 className="pnf white-color mb-5">Page Not Found</h1>
        <Link to="/" className="btn btn-navbar">
          Go Back to Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
