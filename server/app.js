var express = require('express');
var app = express();
var path = require('path');
var port = 5000;

app.use(express.static("server/public"));
//




//
app.get("/", function(req, res) {
  res.sendFile(path.resolve("server/public/views/index.html"));
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
  console.log("listening on port: ", port);
});
