const express = require("express");
const cors = require("cors");
const endPoints = require("./endpoints/endpoints.js");
const helmet = require("helmet");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api", endPoints);

module.exports = app;
