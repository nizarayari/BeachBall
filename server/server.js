const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require('http');
const router = require('./router');


app.use(bodyParser.json());
app.use(express.static('./src')); 
router(app);


const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listenning on: ', port);