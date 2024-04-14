import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import MovieDetails from "@pages/MovieDetails";
import TvDetails from "@pages/TvDetails";
import SearchResults from "@pages/SearchResults";

export default function Switch() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/SearchResults" element={<SearchResults />} />
      </Routes>
    </>
  );
}
