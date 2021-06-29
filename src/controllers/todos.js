const todos = require("../data/dummyData");

exports.getTodos = async (req, res) => {
  res.status(200).send({
    status: "success",
    message: "resource has successfully get",
    data: todos,
  });
};

exports.postTodo = (req, res) => {
  console.log(req.body);

  todos.push({
    id: 4,
    ...req.body,
  });
  res.status(201).send({
    status: "success",
    message: "resource has successfully created",
    data: todos,
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  const newTodos = todos.filter((todo) => todo.id !== parseInt(id));

  res.send({
    status: "success",
    message: "resource has successfully delete",
    data: newTodos,
  });
};

exports.putTodo = (req, res) => {
  const body = req.body;
  console.log(body);
  const { id } = req.params;
  const newTodos = todos.map((todo) => {
    if (todo.id == id) {
      return {
        ...todo,
        ...body,
      };
    }
    return todo;
  });
  res.send({
    status: "success",
    message: "resource has successfully get",
    data: newTodos,
  });
};

exports.template = (req, res) => {
  res.send({
    status: "success",
    message: "resource has successfully get",
    data: "",
  });
};
