import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Rating Star Display
import RatingStars from "@shared/RatingStars";

export default function SlickCarousel({ items }) {
  // image url width 500
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const settings = {
    vertical: false,
    infinite: true,
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
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="p-10 bg-stone-300">
      <Slider {...settings}>
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.original_title ? `movies/${item.id}` : `tv/${item.id}`}
          >
            {/* Send Visitor to selected Movie in Slider */}
            {/* Display Movie / TvShow Images in Slider */}
            <div className="p-4">
              <img
                src={`${baseImageUrl}${item.poster_path}`}
                alt={item.original_title}
                className="object-scale-down max-h-min"
              />
            </div>
            {/* Display Movie / TvShow Titel */}

            <div className="bg-neutral-500 rounded-md mx-2 p-2 drop-shadow-lg text-center">
              <h3 className="text-xs">
                {item.original_title || item.original_name}
              </h3>
            </div>
            {/* Movie / Tvshow Rating */}
            <div className="bg-gradient-to-t from-yellow-700 to-yellow-500 rounded-lg mt-1 mx-2 p-1 drop-shadow-lg text-center justify-center flex">
              <RatingStars value={item.vote_average} />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
