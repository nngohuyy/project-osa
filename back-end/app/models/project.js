const mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  url: { type: String, required: true },
});

var Project = new mongoose.model("Project", ProjectSchema);
module.exports = Project;
