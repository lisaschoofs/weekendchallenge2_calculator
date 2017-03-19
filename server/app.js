var express = require('express');
var app = express();
var path = require('path');
var port = 5000;

app.use(express.static("server/public"));

//enables bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//post for object from client
app.post("/calculator", function(req, res) {
  // console.log(req.body);
  calculations(req.body);
  res.sendStatus(200);
});

function calculations( inputs ) {
// inputs.type
// inputs.x
// inputs.y

// do some sort of magical mathematical calculations here!
  switch(inputs.type) {
    case "addButton":
      console.log(parseInt(inputs.x) + parseInt(inputs.y));
      return (parseInt(inputs.x) + parseInt(inputs.y));

    case "subtractButton":
      console.log(parseInt(inputs.x) - parseInt(inputs.y));
      return (parseInt(inputs.x) - parseInt(inputs.y));

    case "multiplyButton":
      console.log(parseInt(inputs.x) * parseInt(inputs.y));
      return (parseInt(inputs.x) * parseInt(inputs.y));

    case "divideButton":
      console.log(parseInt(inputs.x) / parseInt(inputs.y));
      return (parseInt(inputs.x) / parseInt(inputs.y));

    } //ends switch
}//ends calculations function

//catch-all. if there isn't a match, send to index.html
app.get("/", function(req, res) {
  res.sendFile(path.resolve("server/public/views/index.html"));
});

//port listening
app.listen(port, function() {
  console.log("listening on port: ", port);
});
