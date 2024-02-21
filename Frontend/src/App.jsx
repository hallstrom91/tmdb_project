import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Images from "./images/images";
import MovieDetails from "./pages/MovieDetails";
import SeriesDetails from "./pages/SeriesDetails";
import SearchResults from "./pages/SearchResults";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/serie/:id" element={<SeriesDetails />} />
          <Route path="/SearchResults" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
