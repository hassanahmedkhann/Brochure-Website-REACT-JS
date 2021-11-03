import React, { Component } from "react";
import Cdata from "./Cdata";
import Card from "./Card";
import "./Services.css";
const Services = () => {
  return (
    <>
      <din className="my-5">
        <h1 className="title text-center" style={{ fontFamily: "Mulish" }}>
          Our Services
        </h1>
        <hr></hr>
      </din>
      <div className="eachcard">
        {Cdata.map((val, ind) => {
          return (
            <>
              <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Services;
