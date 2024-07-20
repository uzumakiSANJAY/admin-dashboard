"use strict";

const express = require("express");
const router = express.Router();
const validator = require("../validator/userValidator");

// routes
// user routes
var userRouter = require("./userRoute/index");
router.use("/user", validator.userRegisterValidator, userRouter);

module.exports = router;
