"use strict";
// -------------------------
// CAPSTONE BLOG API
// -------------------------

// REQUIRE
const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Login'
            #swagger.description = `Login with username & password`
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    username: '*String',
                    password: '*String'
                }
            }
            _swagger.ignore = true
            _swagger.deprecated = true
        */
    const { username, password } = req.body;

    if (username && password) {
      const user = await User.findOne({ username, password });
      console.log(user);
      console.log(password);
      
      if (user && user.isActive) {
        let tokenData = await Token.findOne({ userId: user._id });

        if (!tokenData) {
          const tokenKey = passwordEncrypt(user._id + Date.now());

          tokenData = await Token.create({ userId: user._id, token: tokenKey });
        }

        res.status(200).send({
          error: false,
          token: tokenData.token,
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Username and password is incorrect");
      }
    } else {
      res.errorStatusCode = 403;
      throw new Error("Please enter your username and password.");
    }
  },

  logout: async (req, res) => {
    /*
            #swagger.tags = ['Authentication']
            #swagger.summary = 'Logout'
        */

    const auth = req.headers?.authorization || null;
    const tokenKey = auth ? auth.split(" ") : null;

    if (tokenKey && tokenKey[0] === "Token") {
      data = await Token.deleteOne({ token: tokenKey[1] });
      message = "Token Deleted. Logout is success.";
    }

    res.send({
      error: false,
      message,
      data,
    });
  },
};
