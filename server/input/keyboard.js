
var listenerCallback;

function init() {
    var initialized = false;
    (function() {
        if (initialized) {
            return;
        }
        var stdin = process.openStdin();
        stdin.on('data', function(chunk) {
            listenerCallback(chunk);

        });
    }());
}

function listenOnInput(callback) {
    listenerCallback = callback;
    init();
}

exports.listenOnInput = listenOnInput;
