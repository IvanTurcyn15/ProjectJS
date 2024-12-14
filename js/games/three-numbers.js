export function findMaxNumber() {
    const number1 = document.querySelector('.first-num').value;
    const number2 = document.querySelector('.second-num').value;
    const number3 = document.querySelector('.third-num').value;
    const resultElement = document.querySelector('.three-numbers-result');
    if (number1 === '' || number2 === '' || number3 === '') {
        resultElement.textContent = 'Введіть усі числа';
        return;
    }
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const num3 = parseFloat(number3);
    const maxNumber = Math.max(num1, num2, num3);
    resultElement.textContent = `Найбільше число, яке ви ввели - (${maxNumber})`;
}
