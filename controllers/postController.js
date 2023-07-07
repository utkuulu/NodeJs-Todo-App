const todo = require("../models/todo");

exports.createTask = async (req, res) => {
  await todo.create({
    ...req.body,
  });
  res.redirect("/");
};

exports.getAllTask = async (req, res) => {
  const allTasks = await todo.find();
  res.render("index", {
    allTasks,
  });
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await todo.findByIdAndRemove(id);

  res.redirect("/");
};

exports.startStatus = async (req, res) => {
  const { id } = req.params;
  const task = await todo.findByIdAndUpdate(id);
  task.status = "Continues";
  await task.save();

  res.redirect("/");
};

exports.finishStatus = async (req, res) => {
  const { id } = req.params;
  const task = await todo.findByIdAndUpdate(id);
  task.status = "Finished";
  await task.save();

  res.redirect("/");
};
