var dialog = require('dialog-node');


function showMsg(io, socket) {
    socket.on('showMsg', (msg) => {
        dialog.info(msg, '👀');
    });
}


exports.showMsg = showMsg;