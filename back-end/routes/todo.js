const express = require("express");
const todoController = require("../controllers/todoController");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

router.use(authMiddleware.authenticate);

router.get("/", todoController.getAllTodos);
router.post("/", todoController.createTodo);
router.delete("/:id", todoController.deleteTodo);
router.put("/markComplete/:id", todoController.markAsCompleted);
router.put("/markIncomplete/:id", todoController.markAsIncomplete);

module.exports = router;
