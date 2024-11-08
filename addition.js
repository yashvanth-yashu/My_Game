let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations yashu";
let errorMessage = "Try again yashu";

function restartButton() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
}
restartButton();

function checkButton() {
    let firstElement = parseInt(firstNumberElement.textContent);
    let secondElement = parseInt(secondNumberElement.textContent);
    let sum = firstElement + secondElement;
    let user = parseInt(userInputElement.value);
    if (user === sum) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.color = "white";
        gameResultElement.style.backgroundColor = "green";

    } else {
        gameResultElement.textContent = errorMessage;
        gameResultElement.style.color = "white";
        gameResultElement.style.backgroundColor = "red";
    }
}