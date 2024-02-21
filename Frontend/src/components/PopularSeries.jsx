import React, { useEffect, useState } from "react";
import SlickCarousel from "./SlickCarousel";
import("../css/SlickCarousel.css");

export default function PopularSeries() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3002/api/popular/series"
        );

        if (response.ok) {
          const result = await response.json();
          console.log("results");
          setSeries(result);
        } else {
          console.error("Failed to fetch popular series from API.");
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
          <SlickCarousel data={series} />
        </div>
      </section>
    </>
  );
}
