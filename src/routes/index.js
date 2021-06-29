const { Router } = require("express");
const {
  getTodos,
  postTodo,
  deleteTodo,
  putTodo,
} = require("../controllers/todos");

const route = Router();

route.get("/todos", getTodos);
route.post("/todo", postTodo);
route.delete("/todo/:id", deleteTodo);
route.put("/todo/:id", putTodo);

module.exports = route;
