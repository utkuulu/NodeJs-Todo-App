const Photo = require("../models/todo");

exports.getIndexPage = (req, res) => {
  res.render("index");
};
