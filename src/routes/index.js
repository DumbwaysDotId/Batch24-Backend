const { Router } = require("express");
const { createProduct, getProducts } = require("../controllers/product");
const {
  getTodos,
  postTodo,
  deleteTodo,
  putTodo,
} = require("../controllers/todos");

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  createProfile,
} = require("../controllers/user");

const router = Router();

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/user/:id/profile", createProfile);

router.post("/product", createProduct);
router.get("/products", getProducts);

router.get("/todos", getTodos);
router.post("/todo", postTodo);
router.delete("/todo/:id", deleteTodo);
router.put("/todo/:id", putTodo);

module.exports = router;
