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

    categoryId: {
      type: mongoose.Schema.Stypes.ObjectId,
      ref: "Category",
      required: true,
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    content: {
      type: String,
      trim: true,
      required: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    likes: [String],
    
    countOfVisitors: {
      type: Number,
      default: 0,
    },
  },
  { collection: "blogs", timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
