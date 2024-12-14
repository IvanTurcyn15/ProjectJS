// тут імпорти скріптів
import {changeTheme, dropdownOpen} from "./layout/header/header.js";
import {filter} from "./layout/header/filter.js";
import {checkYear} from "./games/year-checker.js";
import {guessNumber} from "./games/number-guesser.js";
import {calculate} from "./games/calculator.js";
import {calculateTime} from "./games/time-calculator.js";
import {findMaxNumber} from "./games/three-numbers.js";

// хедер
const changeThemeBtn = document.querySelector(".theme-toggle-button");
changeThemeBtn.addEventListener("click", changeTheme);

const openDropdown = document.querySelector(".open-dropdown");
openDropdown.addEventListener("click", dropdownOpen);

// фільтрація
const dropdownList = document.querySelector(".dropdown-list");
const interactive = document.querySelectorAll(".block");

dropdownList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        filter(event, interactive);
    }
});

// перевірка року
const formYear = document.querySelector(".year-form");
formYear.addEventListener("submit", checkYear);

// вгадай число
const numberForm = document.querySelector(".number-form");
numberForm.addEventListener("submit", guessNumber);

// калькульятор
const calculatorOperations = document.querySelector(".calculator-operations");
calculatorOperations.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        calculate(event);
    }
});

// калькулятор часу
const timeForm = document.querySelector(".time-form");
timeForm.addEventListener("submit", calculateTime);

// вгадай три
document.querySelectorAll('.three-numbers-input').forEach(input => {
    input.addEventListener('input', findMaxNumber);
});