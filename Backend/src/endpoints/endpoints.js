const express = require("express");
const fetch = require("node-fetch");
const FormatMultiObject = require("../format/FormatMultiObjects"); // For Homepage Popular Movies / Series Slider
const FormatSingelObject = require("../format/FormatSingelObject"); // For choosing a singel Movie / Serie in Slider
const { jsonFormatter } = require("../format/jsonFormatter"); // For multiple Formats (Search)
require("dotenv").config();

const router = express.Router();

/*
========================================
Popular Movies and Movies by
========================================
*/

// Endpoints All Most Popular Movies
router.get("/popular/movies", async (req, res) => {
  try {
    const url = "https://api.themoviedb.org/3/movie/popular";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const formatInfo = FormatMultiObject(data);

    res.json(formatInfo);
  } catch (error) {
    console.error("Error with fetching popular movies.", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoints for specific movie ID
router.get("/movie/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(`Failed to fetch movie details for id ${id}`);
      return res
        .status(response.status)
        .send("Failed to fetch data for movie.");
    }

    const movie = await response.json();

    if (!movie) {
      console.error(`Movie with ID ${id}`);
      return res.status(404).send("Movie not found...");
    }

    const formatInfo = FormatSingelObject(movie);

    res.json(formatInfo);
  } catch (error) {
    console.error("Error with fetching movie by ID.", error);
    res.status(500).send("Internal Server Error");
  }
});

/*
========================================
Popular Series and Series by
========================================
*/

// Fetch most popular series
router.get("/popular/series", async (req, res) => {
  try {
    const url = "https://api.themoviedb.org/3/tv/popular";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const formatInfo = FormatMultiObject(data);

    res.json(formatInfo);
  } catch (error) {
    console.error("Error with fetching popular movies.", error);
    res.status(500).send("Internal Server Error");
  }
});

// Endpoints for specific serie ID
router.get("/tv/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(`Failed to fetch movie details for id ${id}`);
      return res
        .status(response.status)
        .send("Failed to fetch data for movie.");
    }

    const serie = await response.json();

    if (!serie) {
      console.error(`Serie with ID ${id}`);
      return res.status(404).send("Serie not found...");
    }

    const formatInfo = FormatSingelObject(serie);

    res.json(formatInfo);
  } catch (error) {
    console.error("Error with fetching serie by ID.", error);
    res.status(500).send("Internal Server Error");
  }
});

/*
========================================
Search 
========================================
*/

router.get("/search", async (req, res) => {
  const { query } = req.query;

  try {
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    };
    const response = await fetch(url, options);
    const searchData = await response.json();

    const formattedSearch = formatData(searchData.results);

    res.json(formattedSearch);
  } catch (error) {
    console.error("Error with search query.", error);
    res.status(500).send("Internal Server Error...");
  }
});

module.exports = router;
