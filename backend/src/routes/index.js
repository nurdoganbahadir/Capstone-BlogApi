"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const router = require("express").Router();
// -------------------------

// URL
router.use("/users", require("./user"));

router.use("/tokens", require("./token"));

module.exports = router;
