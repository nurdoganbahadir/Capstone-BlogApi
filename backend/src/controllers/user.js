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
      data: data,
    });
  },


};
