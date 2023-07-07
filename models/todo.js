const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["NotStarted", "Continues", "Finished"],
    default: "NotStarted",
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
