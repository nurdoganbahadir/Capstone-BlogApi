"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------
const express = require("express");
const app = express();

// ENV
require("dotenv").config();
const HOST = process.env.HOST;
const PORT = process.env.PORT;

//asyncErrors to errorHandler
require("express-async-errors");






// NOT FOUND
app.all("*", (req, res) => {
  res.status(404).send({
    error: true,
    message: "Route is not found!",
  });
});

// RUN SERVER
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
