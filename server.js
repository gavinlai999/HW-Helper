const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "Windows")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Windows", "homescreen", "home.html"));
});

app.post("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Windows", "createscreen", "create.html"));
});

app.post("/support", function(req, res) {
  res.sendFile(path.join(__dirname, "Windows", "supportscreen", "support.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
