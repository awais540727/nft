import React from "react";
import "./Projects.css";
import { projects, topDevelopers } from "../../data";
const Projects = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="project-top-div"></div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-2 col-md-2 col-sm-12 col-12 mb-4 text-center">
            <img
              src="/images/location.jpg"
              alt=""
              className="mt-2 mb-2 rounded"
              style={{ width: "100px", height: "100px" }}
            />
            <h3>QLAB</h3>
            <p className="mt-3 mb-3">@qlab</p>
            <p className="mt-3 mb-3">Followers. 1M</p>
            <button className="m-3 btn btn-navbar ">Ongoing Activities</button>
            <button className="m-3 btn btn-navbar">Testimonials</button>
            <button className="m-3 btn btn-navbar ">
              Our Previous Projects
            </button>
            <button className="m-3 btn btn-navbar">Case Studies</button>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-12 mb-4">
            <h1 className="text-center mb-4">Projects</h1>
            <div className="row">
              {projects.map((project) => (
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 text-center">
                  <img
                    src={project.img}
                    alt=""
                    className="mb-2 mt-2 rounded"
                    style={{ width: "200px", height: "200px" }}
                  />

                  <p className="mb-2 mt-2">{project.name}</p>
                  <button
                    className="btn btn-navbar mb-2 mt-2"
                    style={{ width: "100px" }}
                  >
                    {project.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="project-top-div"></div>
        <div className="row mt-5 mb-5">
          <div className="col-lg-2 col-md-2 col-sm-12 col-12 text-center">
            <img
              src="/images/location.jpg"
              alt=""
              className="mt-2 mb-2 rounded"
              style={{ width: "100px", height: "100px" }}
            />
            <h3>QLAB</h3>
            <p className="mt-3 mb-3">@qlab</p>
            <p className="mt-3 mb-3">Followers. 1M</p>
            <button className="m-3 btn btn-navbar ">Ongoing Activities</button>
            <button className="m-3 btn btn-navbar">Testimonials</button>
            <button className="m-3 btn btn-navbar ">
              Our Previous Projects
            </button>
            <button className="m-3 btn btn-navbar">Case Studies</button>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <h2 className="text-center">Testimonial</h2>
            <div className="row mt-4 mb-4">
              {topDevelopers.map((developer) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center">
                  <img
                    src={developer.img}
                    alt=""
                    className="mt-3 mb-3"
                    style={{ width: "120px", height: "120px" }}
                  />
                  <h4 className="mt-3 mb-3">{developer.name}</h4>
                  <button className="btn btn-navbar mt-3 mb-3">LinkdIn</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
