export function guessNumber(event) {
    event.preventDefault();
    const computerNumber = Math.floor(Math.random() * 10) + 1;
    const userInput = parseInt(document.querySelector(".number-input").value);
    const resultElement = document.querySelector(".number-result");

    if (userInput < 1 || userInput > 10 || isNaN(userInput)) {
        resultElement.textContent = "Введіть число в діапазоні від 1 до 10!";
        resultElement.style.color = "rgba(153, 0, 0, 1)";
    } else if (userInput === computerNumber) {
        resultElement.textContent = `Вітаю, ви вгадали число (${computerNumber})`;
        resultElement.style.color = "rgba(3, 153, 0, 1)";
    } else {
        resultElement.textContent = `Ви програли, комп'ютер загадав (${computerNumber})`;
        resultElement.style.color = "rgba(153, 0, 0, 1)";
    }
}