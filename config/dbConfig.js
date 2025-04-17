const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    const uri = "mongodb://localhost:27017/student";

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(uri, options);
    console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`.bgRed);
    process.exit(1); 
  }
};

module.exports = connectDb;
