'use strict';
app.factory('receiveSignal', function (socketFactory) {
      var socket = socketFactory();
      return socket;
});