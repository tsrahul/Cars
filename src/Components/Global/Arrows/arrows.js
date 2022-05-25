import React, { useRef, useState } from "react";
import arrow from "../../../assets/icons/rightArrow.svg";
import arrowLight from "../../../assets/icons/rightArrowWhite.svg";

export const SliderPrevArrow = (props) => {
  const {
    onClick,
    classList,
    onMouseEnter,
    onMouseLeave,
    hover = false,
    icon = arrow,
  } = props;
  return (
    <div
      className={`transform rotate-180 ${classList}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={hover ? arrowLight : icon} className="cursor-pointer" />
    </div>
  );
};

export const SliderNextArrow = (props) => {
  const {
    onClick,
    classList,
    onMouseEnter,
    onMouseLeave,
    hover = false,
    icon = arrow,
  } = props;
  return (
    <div
      className={`${classList}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={hover ? arrowLight : icon} className="cursor-pointer" />
    </div>
  );
};
