const express = require("express");
const { addTask, displayTasks } = require("./../controller/todos");

const todosRouter = express.Router();

todosRouter.post("/", addTask);
todosRouter.get("/", displayTasks);

module.exports = todosRouter;
