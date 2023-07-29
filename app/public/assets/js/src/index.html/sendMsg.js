document.getElementById('btn-send-msg').addEventListener('click', (e) => {
    var msg = document.getElementById('textarea-msg').value
    socket.emit('showMsg', msg)
    alert('Nachricht wurde gesendet!')
})