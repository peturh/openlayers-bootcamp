

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require("fs");

var keyboard = require('./input/keyboard');
var alarmSender = require("./alarmSending/alarmSender");

var app = express();
var httpApp = http.Server(app);
var io = require('socket.io')(httpApp);

app.configure(function(){
   app.set('port', process.env.PORT || 9099);
   app.use(express.bodyParser());
   app.use(express.methodOverride());
   app.use(app.router);
   app.use(express.static(path.join(__dirname, '../webapp/src')));
});


httpApp.listen(app.get('port'), function(){
   console.log("Express server listening on port " + app.get('port'));

});

io.on('connection', function(socket) {
    var mySocket = socket;
    console.log("Hej hej");

    keyboard.listenOnInput(function(chunk) {
        alarmSender.sendEventForDevice(parseInt(chunk), 0, mySocket);
    });
});


