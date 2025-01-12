"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const router = require("express").Router();
const {
  list,
  create,
  read,
  update,
  deleteUser,
} = require("../controllers/user");

// ROUTERS
router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).patch(update).delete(deleteUser);

module.exports = router;
