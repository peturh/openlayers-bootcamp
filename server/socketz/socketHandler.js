var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

function init(callback) {
    io.on('connection', function(socket) {

    });
}
