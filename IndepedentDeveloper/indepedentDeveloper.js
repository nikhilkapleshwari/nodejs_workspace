var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/easyTapp', function(req, res) {
    res.redirect('http://139.59.59.19:3001/');
  });

app.listen(8559);

console.log("EasyTapp listening on port 8559...");
