export function calculate(event) {
    event.preventDefault();
    const operation = event.target.textContent;
    const number1 = parseFloat(document.querySelector('.first').value);
    const number2 = parseFloat(document.querySelector('.second').value);
    const resultElement = document.querySelector('.calculator-result');

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = 'Введіть числа';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number2 === 0 ? 0 : number1 / number2;
            break;
        default:
            resultElement.textContent = 'Помилка';
            return;
    }
    result = result.toFixed(2);
    resultElement.textContent = `${result}`;
}