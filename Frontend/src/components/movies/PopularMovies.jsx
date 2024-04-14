import React, { useEffect, useState } from "react";
import SlickCarousel from "@shared/SlickCarousel";

// import Fetch Helper & Token
import { fetchGET } from "@utils/Fetchdata";
// Import loading animation
import Loader from "@shared/Loader";

export default function PopularMovies() {
  // popular movie state
  const [movies, setMovies] = useState([]);
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  // token for API
  const token = import.meta.env.VITE_TMDB_API_TOKEN;

  useEffect(() => {
    fetchGET("movie/popular", token)
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Misslyckad hämtning av populära filmer", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="text-white items-center justify-center">
            <SlickCarousel items={movies} />
          </div>
        )}
      </section>
    </>
  );
}
