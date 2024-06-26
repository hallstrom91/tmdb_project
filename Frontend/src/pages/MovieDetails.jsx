import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import image popup modal viewer
import PosterModal from "@shared/PosterModal";
// import Fetch Helper & Token
import { fetchGET } from "@utils/Fetchdata";
// Import loading animation
import Loader from "@shared/Loader";
// Import Rating Star Display
import RatingStars from "@shared/RatingStars";

export default function MovieDetails() {
  // find movie by id-ref
  const { id } = useParams();
  //specific movie state
  const [displayMovie, setDisplayMovie] = useState(null);
  // token for API
  const token = import.meta.env.VITE_TMDB_API_TOKEN;
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  // img url
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetchGET(`movie/${id}`, token, "sv-SV")
      .then((data) => {
        setDisplayMovie(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Misslyckad hämtning av film med id ${id}`, error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <>
      <section className="bg-stone-300">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container mx-auto pt-10">
            {/* Display Title */}
            <h1 className="text-3xl font-bold text-center pb-5">
              {displayMovie.title}
            </h1>

            {/* Display Poster & Rating - possible to enlarge poster*/}
            <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 pb-4">
              <div className="flex justify-center order-1 object-scale-down md:col-span-1 md:justify-start">
                <PosterModal item={displayMovie} />
              </div>
              {/* Display Object Bio */}
              <div className="order-2 pl-3 md:col-span-2">
                <h2 className="text-xl font-bold pb-2">Bio</h2>
                <p>{displayMovie.overview}</p>
              </div>
            </div>

            {/* Display Object Details */}
            <div className="pb-6 pl-3">
              <h2 className="text-xl font-bold pb-2">Detaljer</h2>
              {/* Display Object rating */}
              <p className="flex border-2 border-black md:w-1/6 w-2/5 p-2 rounded-lg bg-gradient-to-t from-yellow-700 to-yellow-500 justify-center">
                <RatingStars value={displayMovie.vote_average} />
              </p>

              {/* Display Object release date */}
              <p>
                <span className="font-bold">Släppt:</span>{" "}
                {displayMovie.release_date}
              </p>
              {/* Display Object popularity */}
              <p>
                <span className="font-bold">Popularitet:</span>{" "}
                {displayMovie.popularity}
              </p>
              {/* Display Object genre*/}
              <p>
                <span className="font-bold">Genre:</span>{" "}
                {displayMovie.genres.map((genre) => genre.name).join(", ")}
              </p>
              {/* Display Object spoken language*/}
              <p>
                <span className="font-bold">Språk:</span>{" "}
                {displayMovie.spoken_languages
                  .map((language) => language.name)
                  .join(", ")}
              </p>
              {/* Display Object runtime movie*/}
              <p>
                <span className="font-bold">Längd:</span> {displayMovie.runtime}{" "}
                minuter
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
