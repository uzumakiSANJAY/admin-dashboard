const User = require("../../models/userModels/user");
// const nodemailer = require("nodemailer");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const dotenv = require("dotenv");
// const validateData = require("../../middleware/validationMiddleware/rahaUserValidation");
const { env } = require("../../config/server/");

const registerUser = async (req, res, next) => {
  try {
    console.log("first", req.body);
    return res.status(201).send({
      status: true,
      message: `Sent a verification email`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
};
