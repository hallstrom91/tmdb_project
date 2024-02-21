import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ match }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/movie/${id}`);

        if (response.ok) {
          const data = await response.json();
          setMovie(data);
        } else {
          console.error(`Failed to fetch movie details for ID ${id}`, error);
        }
      } catch (error) {
        console.error("Error fetching movie detials", error);
      }
    };
    fetchMovieDetails();
  }, [id]);
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className=" text-center py-10 px-4 sm:px-6 lg:px-8 text-black bg-neutral-200">
        <h1 className="text-5xl text-black">{movie.title}</h1>
        <div className="container mx-auto flex justify-center p-4 object-scale-down">
          <img
            src={movie.posterPath}
            alt={movie.title}
            className="object-scale-down"
          />
        </div>
        <p>{movie.overview}</p>
        <p>Release: {movie.releaseDate}</p>
        <p>Popularity: {movie.popularity}</p>
        <div className="flex justify-center">
          <p className="border-2 p-2 m-2 rounded-3xl bg-gradient-to-b from-yellow-800 to-yellow-500 opacity-70 shadow border-indigo-900 w-1/4 ">
            Rating: {movie.voteAverage}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
