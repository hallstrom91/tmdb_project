import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function RatingStars({ value }) {
  const dividedRating = value / 2;
  const wholeStars = Math.floor(dividedRating);
  const decimal = dividedRating % 1;

  let halfStar = false;

  if (decimal >= 0.2 && decimal <= 0.8) {
    halfStar = true;
  }
  // create stars, like hollywood
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < wholeStars) {
      stars.push(<FaStar key={i} size={25} color="yellow" />);
    } else if (i === wholeStars && halfStar) {
      stars.push(<FaStarHalfAlt key="half" size={25} color="yellow" />);
    } else {
      stars.push(
        <FaRegStar key={i} size={25} color="black" className="opacity-30" />
      );
    }
  }

  return (
    <>
      <div className="flex">{stars}</div>
    </>
  );
}
