const bodyParser = require('body-parser');
require('dotenv').config()
let express = require('express');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/submit', (req, res) => {
    // Access the data from the form (req.body contains the parsed data)
    const name = req.body.name;  // Extract data from the body
    const age = req.body.age;
  
    // Respond with the received data
    res.json({
      message: `Received name: ${name} and age: ${age}`,
    });
  });
  app.post("/name", (req, res) => {
    const { first, last } = req.body; // Extract the data from the request body
    if (first && last) {
      res.json({ name: `${first} ${last}` });  // Respond with the full name
    } else {
      res.status(400).json({ error: 'Please provide both first and last name.' });  // Return error if either is missing
    }
  });
app.use(function(req, res, next) {
    console.log(`${req.method} /${req.path} - ${req.ip}`)
    next();
});
app.get("/now", function(req, res, next) {
    req.time = new Date().toString()
    next();
},
function(req, res) {
    res.json({ time: req.time })

});
app.get("/:word/echo", function(req, res, next) {
    next();
},
function(req, res) {
    res.json({ echo: req.params.word })
});
app.get("/name", function(req, res) {
    const { first, last } = req.query;
    if (first && last) {
        res.json({ name: `${first} ${last}` })
    } else {
        res.status(400).json({ error: 'Please provide both first and last name.' });
    }});
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
