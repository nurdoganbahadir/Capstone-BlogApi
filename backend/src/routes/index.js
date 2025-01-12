"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const router = require("express").Router();
// -------------------------

// URL
router.use("/user", require("./user"));

module.exports = router;
