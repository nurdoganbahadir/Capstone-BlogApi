"use strict";

const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      validate: [
        (email) => email.includes("@") && email.includes("."), // ValidationCheck
        "Email type is incorrect.", // If false Message.
      ],
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    isActive: {
      type: boolean,
      default: true,
    },
    isStaff: {
      type: boolean,
      default: false,
    },
    isAdmin: {
      type: boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
