const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
PORT = 4700

const { exec } = require('child_process');
const os = require('os');
const fs = require('fs');


// console.log(String(os.uptime() / 3600) + " Seconds");


app.use(express.static('public/'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/favicon.ico');
});

const showMsg = require('./functions/showMsg');
const shutdown = require('./functions/shutdown');
const setOnlineTime = require('./functions/setOnlineTime');
const getOnlineTime = require('./functions/getOnlineTime');

io.on('connection', (socket) => {
    showMsg.showMsg(io, socket);
    shutdown.shutdown(io, socket);
    setOnlineTime.setOnlineTime(io, socket);
    getOnlineTime.getOnlineTime(io, socket);
});


server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});


setInterval((e) => {
    var config = fs.readFileSync('config.json');
    var config = JSON.parse(config);

    if (todayDate !== config.todayDate) {
        config['todayOnlineTime'] = 0;
        config['todayDate'] = todayDate;
        fs.writeFileSync('config.json', JSON.stringify(config));
    } else {
        config['todayOnlineTime'] = config.todayOnlineTime + 1;
        fs.writeFileSync('config.json', JSON.stringify(config));
    }

    if (config.maxOnlineTime < (config.todayOnlineTime/60)) {
        exec('shutdown /s');
    }
}, 1000*60)