import React, { Component } from "react";
import "../Components/Contact.css";
import contact from "../images/contact.jpg";
const Contact = () => {
  return (
    <>
      <div className="maincontact">
        <div className="main">
          {/* <img src={image} className="image" /> */}
          <div className="my-5">
            <h1 className="text-center form" style={{ fontSize: "50px" }}>
              Contact Us.
            </h1>
          </div>
          <div className="container contact-div form">
            <div className="row">
              <div className="col-md col-10 mx-auto">
                <form>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="For example: Daivd Bekham"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Mobile No.
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="+92330 - - - - - - -"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-success mb-5">
                      Submit my response
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="picture">
          <img src={contact} className="images" />
        </div>
      </div>
    </>
  );
};

export default Contact;
