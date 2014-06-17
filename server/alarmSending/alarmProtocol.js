
function sendAlarm(event, coordinates, socket) {
    var buffer = {event: event, coordinates: coordinates};
    console.log("Sending:" + JSON.stringify(buffer));
    socket.emit('signal', buffer);
}


exports.sendAlarm = sendAlarm;
