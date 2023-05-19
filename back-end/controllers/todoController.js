const Todo = require("../models/todo.js");

exports.getAllTodos = async (req, res) => {
  console.log("req.userId:", req.userId);
  try {
    const todos = await Todo.find({ userId: req.userId });
    console.log("todos:", todos);
    res.json(todos);
  } catch (error) {
    console.error("Error getting todos:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { task } = req.body;

    const newTodo = await Todo.create({ task, userId: req.userId });

    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findOneAndDelete({
      _id: id,
      userId: req.userId,
    });

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ message: "Todo deleted", _id: id });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.markAsCompleted = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { completed: true, completedTime: Date.now() },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (error) {
    console.error("Error marking todo as completed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.markAsIncomplete = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { completed: false, completedTime: null },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (error) {
    console.error("Error marking todo as uncompleted:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
