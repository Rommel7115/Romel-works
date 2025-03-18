let secretNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    let message = document.getElementById('message');
if (userGuess === "") {
    message.innerText = "please enter a number";
} else if (isNaN(userGuess)) {
    message.innerText = "please enter a valid number";
} else {
    userGuess = parseInt(userGuess);
if (userGuess < secretNumber) {
    message.innerText = "The number is low. Try again!";
} else if (userGuess > secretNumber) {
    message.innerText = "The number is higher. Try again!";
} else {
    message.innerText = "Congratulations! you guessed the correct number!";
} 
}
}