"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const router = require("express").Router();

// URL
router.use("/auth", require("./auth"));

router.use("/users", require("./user"));

router.use("/tokens", require("./token"));

router.use("/categories", require("./category"));

router.use("/blogs", require("./blog"));

router.use("/comments", require("./comment"));

module.exports = router;
