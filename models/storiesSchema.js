var mongoose = require("mongoose");

var Stories = mongoose.Schema({
  storyTitle: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  storyMoral: {
    type: String,
    require: true
  },
  timestamp: {
    type: String,
    require: true
  }
});
module.exports = mongoose.model("Stories", Stories);
