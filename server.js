const express = require("express"); 
// instantiates Express
const app = express();
// for serving files in the public folder, such as CSS files
app.use(express.static("./Window/homescreen"));
// server responds when the client sends a GET request for the / endpoint
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/Window/homescreen/home.html");
});
app.post("/", function(req,res) {
     res.sendFile(__dirname + "/Window/homescreen/home.html");
});


app.listen(process.env.PORT || 3000, function() {
    console.log(`Server is running on port ${process.env.PORT}.`);
});