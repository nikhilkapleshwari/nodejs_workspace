var express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var _dirname='C:/NodeJS_WorkSpace/PortFolio';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//app.use(express.static(_dirname+'/dist/MyApp'));
app.use(express.static(_dirname+'/dist/Portfolio'));

//require('./routes')(app);
app.all('*',(req,res)=>{
res.status(200).sendFile(_dirname+'/dist/Portfolio/index.html');
});

app.listen(8089);

console.log("EasyTapp listening on port 8089...");
