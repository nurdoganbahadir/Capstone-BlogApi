"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(User);

    res.status(200).send({
      error: false,
      count: data.length,
      details: await res.getModelListDetails(User),
      data: data,
    });
  },

  create: async (req, res) => {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        req?.body?.password
      )
    )
      throw new BadRequestError(
        "Password must be at least 8 characters long and contain at least one special character and  at least one uppercase character"
      );

    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await User.findOne({ _id: req.params.id }),
    });
  },

  deleteUser: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: true,
      message: "Something went wrong, data might be deleted already.",
    });
  },
};
