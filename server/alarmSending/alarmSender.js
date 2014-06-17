var alarmProtocol = require('./alarmProtocol');

var events = [
    'ok',
    'open door',
    'close door',
    'break down door',
    'fire',
    'locked',
    'unlocked'
];

var devices = [
    {latitude: 55.5708457, longitude: 12.0180405},
    {latitude: 34.5708457, longitude: 13.0180405},
    {latitude: 52.5708457, longitude: 14.0180405},
    {latitude: 51.5708457, longitude: 15.0180405},
    {latitude: 15.5708457, longitude: 16.0180405},
];

function sendEventForDevice(eventIndex, deviceIndex, socket) {
    alarmProtocol.sendAlarm(events[eventIndex], devices[deviceIndex], socket);
}

exports.sendEventForDevice = sendEventForDevice;
