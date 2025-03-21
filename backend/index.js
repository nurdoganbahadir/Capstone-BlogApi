"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------
const express = require("express");
const app = express();
const cors = require("cors");

// ENV
require("dotenv").config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

//asyncErrors to errorHandler
require("express-async-errors");

// Connect to DB:
require("./src/configs/dbConnection");

// Searching&Sorting&Pagination:
app.use(require("./src/middlewares/queryHandler"));

// Middlewares:
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(require("./src/middlewares/authentication"));

// Home Paths:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to Capstone Blog Api",
    documents: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// Routes
app.use(require("./src/routes"));

// NOT FOUND
app.all("*", (req, res) => {
  res.status(404).send({
    error: true,
    message: "Route is not found!",
  });
});

// errorHandler added:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
