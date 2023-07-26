document.getElementById('btn-online-time').addEventListener('click', (e) => {
    var num = document.getElementById('input-time').value
    socket.emit('setOnlineTime', parseInt(num))
    alert('Zeit wurde gesetzt.')
})