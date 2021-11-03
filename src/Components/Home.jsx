import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import web from "../images/img18.png";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section id="header" className="back">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="thediv  row">
                <div
                  style={{ alignItems: "center" }}
                  className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                >
                  <h3>
                    Hi there! <br />
                    Welcome to our&nbsp;
                    <strong className="brand-name">
                      {" "}
                      TheWebBuilders&nbsp;
                    </strong>
                  </h3>
                  <h4 className="my-3">We Develop Software for the world.</h4>
                  <div className="mt-3">
                    <NavLink className="btn-get-started" to="/services">
                      Lets see what we do!
                    </NavLink>
                  </div>
                </div>
                <div className=" col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
