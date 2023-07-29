const { exec } = require('child_process');

function shutdown(io, socket) {
    socket.on('shutdown', () => {
        exec('shutdown /s');
    });
}


exports.shutdown = shutdown;