var socket = io();


if (!localStorage.isLoggedIn && !window.location.pathname.includes('login')) {
    window.location.href = '/login'
}