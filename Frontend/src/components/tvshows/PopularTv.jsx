import React, { useEffect, useState } from "react";
import SlickCarousel from "@shared/SlickCarousel";

// import Fetch Helper & Token
import { fetchGET } from "@utils/Fetchdata";
// Import loading animation
import Loader from "@shared/Loader";

export default function PopularTv() {
  // popular Tv shows state
  const [series, setSeries] = useState([]);
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  // token for API
  const token = import.meta.env.VITE_TMDB_API_TOKEN;

  useEffect(() => {
    fetchGET("tv/popular", token)
      .then((data) => {
        setSeries(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Misslyckad hämtning av populära serier", error);
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
            <SlickCarousel items={series} />
          </div>
        )}
      </section>
    </>
  );
}
