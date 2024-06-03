// TODO (step0) import mongoose
const mongoose = require("mongoose");

// TODO (step0) define your Story schema
const StorySchema = new mongoose.Schema({
  creator_name: String,
  content: String,
});

// TODO (step0) create and export the model for the Story schema
module.exports = mongoose.model("story", StorySchema);
