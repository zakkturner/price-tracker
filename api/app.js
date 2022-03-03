const express = require("express");
const app = express();
const port = 3002;
const path = require("path");

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "build")));

const dataController = require("./datacontroller");

app.get("/", (req, res) => {
  res.send("Hello World! Develop");
});

app.get("/api/data", dataController.getJsonData);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
