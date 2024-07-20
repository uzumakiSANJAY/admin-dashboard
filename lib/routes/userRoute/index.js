"use strict";

const express = require("express");
const router = express.Router();

const userController = require("../../controllers/userController");

// const {
//   handleValidationErrors,
// } = require("../../middleware/validationMiddleware/rahaUserValidation");

router.post("/register", userController.registerUser);
// router.post("/login", userController.authUser);

module.exports = router;
