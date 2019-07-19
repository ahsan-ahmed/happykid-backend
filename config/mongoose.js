/////mongoose is now configured

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://smartkids:user123@ds251877.mlab.com:51877/smartkids", {
  useNewUrlParser: true
});

module.exports = { mongoose };
