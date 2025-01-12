"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const router = require("express").Router();
const { list } = require("../controllers/user");

// ROUTERS
router.route("/").get(list);

module.exports = router;
