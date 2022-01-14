$(document).ready(function () {
    $('#loginBtn').click(function (e) {
        e.preventDefault()
        var username = $('#username').val()
        var password = $('#password').val()
    
        if (username && password) {
            window.localStorage.setItem('auth', JSON.stringify({username}))
            window.location.replace('mainpaper.html')
        }
    })
})