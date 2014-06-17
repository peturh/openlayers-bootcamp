
function listenOnInput(callback) {
    var stdin = process.openStdin();
    stdin.on('data', function(chunk) {
        console.log("Got chunk: " + chunk);
        callback(chunk);

    });
}

exports.listenOnInput = listenOnInput;
