import React, { useEffect, useState } from "react";
import SlickCarousel from "./SlickCarousel";
import("../css/SlickCarousel.css");

export default function PopularMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3002/api/popular/movies"
        );

        if (response.ok) {
          const result = await response.json();
          console.log("results");
          setMovies(result);
        } else {
          console.error("Failed to fetch popular movies from API.");
        }
      } catch (error) {
        console.error("Error fetching data.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="text-white items-center justify-center">
          <SlickCarousel data={movies} />
        </div>
      </section>
    </>
  );
}
