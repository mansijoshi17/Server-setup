const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');


//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({type : '*/*'}));
router(app);



//Server Setup
const Port = process.env.PORT || 3090; 
const Server = http.createServer(app);
Server.listen(Port);
console.log('server on', Port);