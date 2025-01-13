"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const {
  list,
  create,
  read,
  update,
  deleteComment,
} = require("../controllers/comment");
const router = require("express").Router();

// ROUTES
router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).patch(update).delete(deleteComment);

module.exports = router;
