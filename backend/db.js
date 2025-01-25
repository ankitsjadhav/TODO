const mongoose = require("mongoose");

const todoschema = mongoose.schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoschema);

module.exports = {
  todo,
};
