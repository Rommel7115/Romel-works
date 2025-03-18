document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simple validation: check if username and password are filled
    if (username && password) {
        // You can replace this with actual login logic, such as API calls
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Please enter both username and password.';
        messageElement.style.color = 'red';
    }
});
