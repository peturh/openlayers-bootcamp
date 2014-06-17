
function sendAlarm(event, coordinates, socket) {
    var buffer = {event: event, coordinates: coordinates};
//    var buffer = event + "/" + coordinates.latitude + "/" + coordinates.longitude;
    console.log("Connected, sending: " + buffer);
    socket.emit('signal', buffer);
}


exports.sendAlarm = sendAlarm;
