const express = require("express");
const path = require("path");

// Instantiate Express
const app = express();

// Serve files in the public folder, including CSS files
app.use(express.static(path.join(__dirname, "Windows")));

// Server responds when the client sends a GET request for the / endpoint
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Windows", "home.html"));
});

app.post("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Windows", "create.html"));
});

app.post("/support", function(req, res) {
  res.sendFile(path.join(__dirname, "Windows", "support.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server is running on port ${port}.`);
});