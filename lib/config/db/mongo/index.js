const mongoose = require("mongoose");

const { env } = require("../../server");
// dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_ATLAS_URI, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
