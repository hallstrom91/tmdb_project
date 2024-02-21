import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SerieDetails = ({ match }) => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSerieDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/tv/${id}`);

        if (response.ok) {
          const data = await response.json();
          setSerie(data);
        } else {
          console.error(`Failed to fetch serie details for ID ${id}`, error);
        }
      } catch (error) {
        console.error("Error fetching serie detials", error);
      }
    };
    fetchSerieDetails();
  }, [id]);
  if (!serie) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className=" text-center py-10 px-4 sm:px-6 lg:px-8 text-black bg-neutral-200">
        <h1 className="text-5xl text-black">{serie.title}</h1>
        <div className="container mx-auto flex justify-center p-4 object-scale-down">
          <img
            src={serie.posterPath}
            alt={serie.title}
            className="object-scale-down"
          />
        </div>
        <p>{serie.overview}</p>
        <p>Release: {serie.releaseDate}</p>
        <p>Popularity: {serie.popularity}</p>
        <div className="flex justify-center">
          <p className="border-2 p-2 m-2 rounded-3xl bg-gradient-to-b from-yellow-800 to-yellow-500 opacity-70 shadow border-indigo-900 w-1/4 ">
            Rating: {serie.voteAverage}
          </p>
        </div>
      </div>
    </>
  );
};

export default SerieDetails;
