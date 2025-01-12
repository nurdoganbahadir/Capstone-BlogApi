"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------
const { mongoose } = require("../configs/dbConnection");
// -------------------------

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: ture,
      unique: true,
      required: true,
    },
  },
  { collection: "categories", timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
