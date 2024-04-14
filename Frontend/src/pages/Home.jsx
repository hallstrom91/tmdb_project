import React from "react";
import PopularMovies from "@movies/PopularMovies";
import PopularTv from "@tvshows/PopularTv";
import Loader from "@shared/Loader";
export default function Home() {
  return (
    <>
      <main>
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8 bg-stone-300 text-black">
          <h1 className="block text-2xl font-bold text-black sm:text-4xl uppercase ">
            Välkommen Till
          </h1>
          <h2 className="text-xl font-semibold">VadSkaVi.SE</h2>

          <p className="mt-3 text-lg text-black">
            Välkommen till vår film- och serieportal! Upptäck de senaste
            filmerna och serierna, bläddra bland klassiker och utforska olika
            genrer. Registrera dig för att få en personlig upplevelse, spara
            dina favoritfilmer och serier för senare och dela med dig av dina
            betyg och recensioner. Bli en del av vårt community och rösta på
            dina favoriter för att hjälpa andra användare att hitta sina nästa
            bästa visningar. Med vårt enkla och användarvänliga gränssnitt är
            det enkelt att utforska och njuta av allt som världen av film och TV
            har att erbjuda!
          </p>
        </div>
        {/* Carousel Display Popular Movies and TvShows */}
        <div className="bg-stone-300">
          <div className=" border-b-4 border-b-stone-600">
            <h3 className="text-center text-lg font-bold">
              Topplistan - Filmer
            </h3>
            <PopularMovies />
          </div>
          <div className="pt-2">
            <h3 className="text-center text-lg font-bold">
              Topplistan - Serier
            </h3>
            <PopularTv />
          </div>
        </div>
      </main>
    </>
  );
}
