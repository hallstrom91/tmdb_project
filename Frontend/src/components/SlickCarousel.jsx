import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickCarousel({ data }) {
  const settings = {
    vertical: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slickcarousel-container p-10">
      <Slider {...settings}>
        {data.map((api) => (
          <Link
            key={api.id}
            to={api.isMovie ? `movies/${api.id}` : `serie/${api.id}`}
          >
            <div className="container w-full h-full p-2">
              <img
                src={api.posterPath}
                alt={api.title}
                className="object-scale-down"
              />
              <div className="bg-neutral-500 rounded-xl m-1 p-2 ">
                <h3>{api.title}</h3>
                <p>Rating: {api.voteAverage}</p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
export default SlickCarousel;
