const mongoose = require("mongoose");



const someSchema = new mongoose.Schema({
  task: { type: String, required: true },
  date: { type: Date, default: new Date() },
  isDeleted: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
});



module.exports = mongoose.model("todos", someSchema);