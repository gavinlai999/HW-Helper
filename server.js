const express = require("express");
const path = require("path");

const app = express();

app.use("/Window", express.static(path.join(__dirname, "Window"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".css")) {
        res.setHeader("Content-Type", "text/css");
      }
    }
  }));
  

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Window", "homescreen", "home.html"));
});

app.post("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Window", "createscreen", "create.html"));
});

app.post("/support", function(req, res) {
  res.sendFile(path.join(__dirname, "Window", "supportscreen", "support.html"));
});

const port = process.env.PORT || 10000;
app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});
