"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const router = require("express").Router();
// -------------------------

// URL
router.use("/users", require("./user"));

module.exports = router;
