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
  deleteBlog,
} = require("../controllers/blog");

// ROUTERS
router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).patch(update).delete(deleteBlog);

module.exports = router;
