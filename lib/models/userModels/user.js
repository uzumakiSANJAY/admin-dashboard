"use strict";

const mongoose = require("mongoose");
const moment = require("moment-timezone");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: "String", required: true },
  email: { type: "String", unique: true, required: true },
  phone: { type: "String", unique: true, required: true },
  gender: {
    type: "String",
    enum: ["Male", "Female"],
  },
  blood_group: { type: "String" },
  dob: { type: "String", required: true },
  martial_status: { type: "String", required: true },
  state: { type: "String", unique: true, required: true },
  city: { type: "String", unique: true, required: true },
  pincode: { type: "String", unique: true, required: true },
  aadhar_no: { type: "String", unique: true, required: true },

  password: { type: "String", required: true },
  pic: {
    type: "String",
    // required: true,
    default:
      "https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png",
  },
  is_admin: { type: Boolean, default: false },
  is_active: { type: Boolean, default: true },
  created_at: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").format(),
    required: true,
  },
  updated_at: {
    type: Date,
    default: () => moment().tz("Asia/Kolkata").format(),
    required: true,
  },
  timestamp: {
    type: Number,
    default: () => moment().tz("Asia/Kolkata").valueOf(),
    required: true,
  },
});

module.exports = {
  userSchema,
};
