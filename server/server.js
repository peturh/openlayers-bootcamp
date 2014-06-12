

var express = require('express'),
   http = require('http'),
   path = require('path'),
   fs = require("fs");

var $express = require('express'),
   $http = require('http'),
   $path = require('path'),
   $util = require('util'),
   $fs = require("fs"),
 //  $mime = require('mime'),
   $url = require('url');


var app = $express();
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