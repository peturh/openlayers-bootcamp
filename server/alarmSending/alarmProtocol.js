
function sendAlarm(event, coordinates, socket) {
    var buffer = event + "/" + coordinates.latitude + "/" + coordinates.longitude;
    console.log("Connected, sending: " + buffer);
    socket.emit('signal', buffer);
}


exports.sendAlarm = sendAlarm;
