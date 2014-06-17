

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require("fs");
var io = require('socket.io')(http);

var keyboard = require('./input/keyboard');
var alarmSender = require("./alarmSending/alarmSender");

var app = express();
app.configure(function(){
   app.set('port', process.env.PORT || 9099);
   app.use(express.bodyParser());
   app.use(express.methodOverride());
   app.use(app.router);
   app.use(express.static(path.join(__dirname, '../webapp/src')));
});


http.createServer(app).listen(app.get('port'), function(){
   console.log("Express server listening on port " + app.get('port'));

});

var mySocket;
io.on('connection', function(socket) {
    mySocket = socket;
    console.log("Hej hej");
});


keyboard.listenOnInput(function(chunk) {
    alarmSender.sendEventForDevice(parseInt(chunk), 0, mySocket);
});
