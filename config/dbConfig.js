const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();

const connectDb = async () => {
  try {
    const uri = process.env.MONGO_URI;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(uri, options);
    console.log(`Connected to MongoDB Atlas at ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`Error connecting to MongoDB Atlas: ${error.message}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
