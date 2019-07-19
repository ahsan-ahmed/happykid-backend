const express = require("express");
const bodyParser = require("body-parser");
const stories = require("./routes/stories");
const { mongoose } = require("./config/mongoose");

const app = express();
const port = process.env.PORT || 5000;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("db connected!");
});

app.use(bodyParser.json());
app.use("/stories", stories);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
