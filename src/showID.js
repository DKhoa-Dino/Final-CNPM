$(document).ready(function () {
    if (localStorage.getItem('auth')) {
        var user = JSON.parse(localStorage.getItem('auth'))
        $('#user').html(`<div class="d-flex justify-content-end align-items-center h-100">Hello ${user.username}<div>`).show()

        $('#logout').show()
        $('#logout').click(function () {
            localStorage.removeItem('auth')
            location.reload()
        })
    }
})