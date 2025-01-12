"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

const Category = require("../models/categories");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Category);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Category),
      data,
    });
  },

  create: async (req, res) => {
    const data = await Category.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Category.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Category.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Category.findOne({ _id: req.params.id }),
    });
  },

  deleteCategory: async (req, res) => {
    const data = await Category.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: true,
      message: "Something went wrong, data might be deleted already.",
    });
  },
};
