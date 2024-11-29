const mongoose = require('mongoose');
require("dotenv").config();
const dbConnect = async () => {
  try {
    const uri = process.env.CONNECTION_STRING; // Ensure this is set in your environment

    await mongoose.connect(uri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = dbConnect;
