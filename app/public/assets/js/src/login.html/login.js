let PASSWD = '4700'


document.getElementById('btn-login').addEventListener('click', () => {
    var val = document.getElementById('input-login').value
    if (val == PASSWD) {
        localStorage.isLoggedIn = true
        window.location.href = '/'
    } else {
        alert('Wrong Password')
    }
})