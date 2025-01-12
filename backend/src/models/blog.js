"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------
const { mongoose } = require("../configs/dbConnection");
// -------------------------

const BlogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Stypes.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
  },
  { collection: "blogs", timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
