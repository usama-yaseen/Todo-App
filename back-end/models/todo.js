const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  completedTime: { type: Date, default: null },
  creationTime: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
