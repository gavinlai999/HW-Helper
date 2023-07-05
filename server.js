const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "Window")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Window", "homescreen", "home.html", 'home.css'));
});

app.post("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Window", "createscreen", "create.html", 'create.css'));
});

app.post("/support", function(req, res) {
  res.sendFile(path.join(__dirname, "Window", "supportscreen", "support.html", 'support.css'));
});

const port = process.env.PORT || 10000;
app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
