document.getElementById('btn-shutdown').addEventListener('click', (e) => {
    socket.emit('shutdown')
    alert('PC wurde herunterfahren!')
})