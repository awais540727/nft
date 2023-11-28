import React from "react";
import "./Home.css";
import {
  competitiveAdvantages,
  projects,
  technologies,
  topCategories,
  topDevelopers,
} from "../../data";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row home-topbar m-2">
          <div className="col-lg-6 col-md-6 col-sm-12 left-col mt-5 mb-5">
            <h1 className="white-color mt-3">
              Not Just Another Digital Agency
            </h1>
            <p className="white-color mt-2">
              We specilaize in providing innovative digital solutions to help
              your business grow and succeed in the ever-changing online
              landscape
            </p>
            <div className="home-btns mt-5  ">
              <button className="me-4 btn btn-navbar">Explore</button>
              <button className="btn btn-navbar">Get a Quote</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center right-col">
            <h1 className="white-color">Top Categories</h1>
            <hr className="white-color" />
            <div className="row">
              {topCategories.map((category) => (
                <>
                  <div className="col-6 col-lg-4 clo-md-4 col-sm-6 text-center">
                    <img src={category.img} alt="" className="category-img" />
                    <p className="white-color category-name">{category.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="top-developer mt-5">
          <h1 className="white-color text-center">
            Top Developers in our team
          </h1>
          <hr className="white-color mt-4" />
          <div className="developers-team">
            <div className="row text-center">
              {topDevelopers.map((developer) => (
                <>
                  <div className="col-lg-2 col-md-2 col-sm-6 col-6 tex-center">
                    <img
                      src={developer.img}
                      alt=""
                      className="developer-img mt-2 mb-2"
                    />
                    <h4 className="white-color mt-2 mb-2">{developer.name}</h4>
                    <button className="btn btn-navbar  mt-2 mb-2">
                      LinkdIn
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="projects mt-5">
          <h1 className="white-color text-center">
            Projects we mostly work on
          </h1>
          <hr className="white-color m-4" />
          <div className="row">
            {projects.map((project) => (
              <>
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                  <img src={project.img} alt="" className="project-img mt-2" />
                  <h4 className="white-color mt-2 mb-2">{project.name}</h4>
                  <button className="btn btn-navbar project-button mt-2 mb-3">
                    {project.button}
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="tachenologies mt-5">
          <h1 className="white-color text-center mb-2">
            Technologies we work in
          </h1>
          <hr className="white-color mt-4 mb-4" />
          <div className="row">
            {technologies.map((techonology) => (
              <>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-center">
                  <img
                    src={techonology.img}
                    alt=""
                    className="techonology-img mt-3 mb-3"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="competitive-advantages mt-4 mb-4">
          <h1 className="white-color text-center">Competetive Advantages</h1>
          <hr className="white-color mt-4 mb-4" />
          <div className="row">
            {competitiveAdvantages.map((comptitive) => (
              <>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12 text-center">
                  <img
                    src={comptitive.img}
                    alt=""
                    className="mb-3"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h2 className="white-color">{comptitive.heading}</h2>
                  <p className="white-color">{comptitive.desc}</p>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="row mt-5 mb-5 p-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center mt-4 mb-4">
            <img
              src="/images/metaverse2.jpg"
              alt=""
              className="metaverse"
              style={{ width: "350px", height: "250px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4 mb-4 p-4">
            <h3 className="white-color mb-5">
              Create, Sell, Well and collect your best NFTs with us very fast
            </h3>
            <p className="white-color mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
              qui id, facilis praesentium aperiam ducimus distinctio?
            </p>
            <button className="btn btn-navbar mt-3">Connect Wallet</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
