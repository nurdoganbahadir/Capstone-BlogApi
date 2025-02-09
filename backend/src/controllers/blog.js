"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

const Blog = require("../models/blog");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Blog);

    res.status(200).send({
      error: false,
      count: data.length,
      details: await res.getModelListDetails(Blog),
      data,
    });
  },

  create: async (req, res) => {
    req.body.userId = req.user._id;

    const data = await Blog.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Blog.findOne({ _id: req.params.id });
    data.countOfVisitors += 1;
    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Blog.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Blog.findOne({ _id: req.params.id }),
    });
  },

  deleteBlog: async (req, res) => {
    const data = await Blog.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: true,
      message: "Something went wrong, data might be deleted already.",
    });
  },

  postLike: async (req, res) => {
    // console.log(req.user) buradan username'e erişebilirim.

    const blog = await Blog.findOne({ _id: req.params.id });
    // console.log(blog); buradan mevcut blog bilgilerine ulaşabiliyorum
    const likeIndex = blog.likes.findIndex(
      (like) => like.username === req.user.username
    );

    if (likeIndex === -1) {
      blog.likes.push({ username: req.user.username });
    } else {
      blog.likes.splice(likeIndex, 1);
    }

    await blog.save();

    res.status(200).send({
      error: false,
      data: await Blog.findOne({ _id: req.params.id }),
    });
  },
};
