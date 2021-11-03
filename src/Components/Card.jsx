import React, { Component } from "react";
import "./Services.css";
const Card = (props) => {
  return (
    <>
      <div className="eachone eachdiv col-md-4 col-10 mx-auto">
        <div>
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              quaerat nam repellendus, corrupti tenetur molestiae aspernatur
              necessitatibus voluptas facilis eaque?
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
