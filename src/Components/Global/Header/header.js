import React from "react";
import "./header.css";
import carIcon from "../../../assets/car.svg";

const header = () => {
  return (
    <div className="header_div z-50">
      <div>
        <img src={carIcon} alt="carIcon" className="h-8" />
      </div>
      <div className="inner_div">
        <a className="active">Home Page</a>
        <a>Booking Page</a>
        <a>Setting</a>
        <a>SignIn</a>
      </div>
    </div>
  );
};

export default header;
