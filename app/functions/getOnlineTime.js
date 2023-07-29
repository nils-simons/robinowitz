const fs = require('fs');


function getOnlineTime(io, socket) {
    socket.on('getOnlineTime', (d) => {
        console.log(d);
        var config = fs.readFileSync('config.json');
        var config = JSON.parse(config);
        io.emit('getOnlineTime', config.maxOnlineTime);
    });
}

exports.getOnlineTime = getOnlineTime;
