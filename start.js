var http = require('http');
var express = require('express');
var app = express();
var portNo = 3000;

app.use('/', express.static(__dirname + '/public'));
app.listen(portNo, function() { 
    console.log('listening on port ' + portNo)
});