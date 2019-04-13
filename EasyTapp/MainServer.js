var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
require('./routes')(app);

app.listen(3001);

console.log("EasyTapp listening on port 3001...");