const express = require("express");
const { addTask, displayTasks } = require("./../controller/todos");

const todosRouter = express.Router();

todosRouter.post("/todos", addTask);
todosRouter.get("/todos", displayTasks);




module.exports = todosRouter; 