require('dotenv').config()
let express = require('express');
let app = express();

//app.get("/", function(req, res) {
    //res.send("Hello Express");
  //});
  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
    let message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    res.send({
        message
    });
});
 module.exports = app;
