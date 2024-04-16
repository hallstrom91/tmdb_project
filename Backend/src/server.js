const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

// app use
app.use(helmet());
app.use(cors());
app.use(express.json());

//routes

//export to service.js
module.exports = app;
