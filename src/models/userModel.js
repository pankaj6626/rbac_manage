const mongoose = require("mongoose");

const userSchema = new mongoose.Schema( // Note the capital "S" in Schema
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "manager", "user"],
    },
  },
  {
    timestamps: true, // This adds `createdAt` and `updatedAt` fields
  }
);

module.exports = mongoose.model("User", userSchema);
