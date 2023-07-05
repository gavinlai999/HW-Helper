const express = require("express");
const path = require("path");

const app = express();
const rootDirectory = process.cwd();

app.use(express.static(path.join(rootDirectory, "Windows")));

app.get("/", function(req, res) {
  res.sendFile(path.join(rootDirectory, "Windows", "homescreen", "home.html"));
});

app.post("/", function(req, res) {
  res.sendFile(path.join(rootDirectory, "Windows", "createscreen", "create.html"));
});

app.post("/support", function(req, res) {
  res.sendFile(path.join(rootDirectory, "Windows", "supportscreen", "support.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
