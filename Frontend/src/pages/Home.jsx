import React from "react";
import PopularMovies from "../components/PopularMovies";
import PopularSeries from "../components/PopularSeries";

export default function Home() {
  return (
    <>
      <main>
        <div className=" text-center py-10 px-4 sm:px-6 lg:px-8 bg-neutral-200 text-black">
          <h1 className="block text-2xl font-bold text-black sm:text-4xl uppercase ">
            Populäraste filmerna
          </h1>
          <p className="mt-3 text-lg text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum at
            nulla aliquam! Minus iure beatae hic rem, officiis ex fuga libero
            rerum, accusamus assumenda omnis dignissimos? Explicabo, iusto.
            Temporibus, et!
          </p>
        </div>
        <div className="bg-neutral-200 border-b-4 border-b-black">
          <PopularMovies />
        </div>
        <div className="bg-neutral-200 border-b-4 border-b-black">
          <PopularSeries />
        </div>
      </main>
    </>
  );
}
