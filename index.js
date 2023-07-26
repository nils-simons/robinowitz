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

const showMsg = require('./app/showMsg');
const shutdown = require('./app/shutdown');
const setOnlineTime = require('./app/setOnlineTime');

io.on('connection', (socket) => {
    showMsg.showMsg(io, socket);
    shutdown.shutdown(io, socket);
    setOnlineTime.setOnlineTime(io, socket);
});


server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});


setInterval((e) => {
    var config = fs.readFileSync('config.json');
    var config = JSON.parse(config);

    console.log(String(os.uptime() / 3600) + " Seconds");

    if (config.maxOnlineTime < Number(os.uptime() / 3600)) {
        exec('shutdown /s');
    }
}, 1000*60)


// var dialog = require('dialog-node');


// dialog.info('Type some text', 'Some Title');