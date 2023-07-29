const fs = require('fs');

function setOnlineTime(io, socket) {
    socket.on('setOnlineTime', (d) => {
        console.log(d);
        var config = fs.readFileSync('config.json');
        var config = JSON.parse(config);
        config['maxOnlineTime'] = d
        let data = JSON.stringify(config);
        fs.writeFileSync('config.json', data);
    });
}


exports.setOnlineTime = setOnlineTime;