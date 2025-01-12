"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const router = require("express").Router();
const { login, logout } = require("../controllers/auth");

// ROUTERS
router.post("/login", login);

router.all("/logout", logout);

module.exports = router;
