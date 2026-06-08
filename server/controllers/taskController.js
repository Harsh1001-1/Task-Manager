const fs = require("fs");
const path = require("path");

const getTasks = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../data/tasks.json"
  );

  const tasks = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  res.json(tasks);
};

const createTask = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../data/tasks.json"
  );

  const tasks = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const newTask = {
  id: Date.now(),
  ...req.body,
};

tasks.push(newTask);

  fs.writeFileSync(
    filePath,
    JSON.stringify(tasks, null, 2)
  );

  res.json({
    message: "Task Added Successfully",
    task: newTask,
  });
};
const deleteTask = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../data/tasks.json"
  );

  const tasks = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const updatedTasks = tasks.filter(
    (task) =>
      task.id != req.params.id
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(updatedTasks, null, 2)
  );

  res.json({
    message: "Task Deleted Successfully",
  });
};
const updateTask = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../data/tasks.json"
  );

  const tasks = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const updatedTasks = tasks.map((task) =>
    task.id == req.params.id
      ? { ...task, ...req.body }
      : task
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(updatedTasks, null, 2)
  );

  res.json({
    message: "Task Updated Successfully",
  });
};
const toggleTask = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../data/tasks.json"
  );

  const tasks = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const updatedTasks = tasks.map((task) =>
    task.id == req.params.id
      ? {
          ...task,
          completed: !task.completed,
        }
      : task
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(updatedTasks, null, 2)
  );

  res.json({
    message: "Task Status Toggled",
  });
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  toggleTask,
};