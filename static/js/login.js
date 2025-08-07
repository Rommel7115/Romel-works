$(document).ready(function() {
$('button').click(function() {
    const username = $ ('#username').val();
    const password = $ ('#password').val();

    $.ajax({
        url: '/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({username,password}),
        success: function(response) {
            $('#message').hide();
            alert('Login successful!');
        },
        error:function() {
            $('#message').show();
        }
    })
});
});