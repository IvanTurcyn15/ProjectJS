export function changeTheme() {
    const changeThemeSpan = document.querySelector(".theme-toggle-switch");
    const changeThemeIcon = document.querySelector(".theme-toggle-icon > use");

    if (changeThemeSpan.className === "theme-toggle-switch light-mode-switch") {
        changeThemeSpan.className = "theme-toggle-switch dark-mode-switch";
        changeThemeIcon.setAttribute("href", "./images/symbol-defs.svg#icon-moon");
    } else {
        changeThemeSpan.className = "theme-toggle-switch light-mode-switch";
        changeThemeIcon.setAttribute("href", "./images/symbol-defs.svg#icon-sun");
    }
}

export function dropdownOpen() {
    const dropdown = document.querySelector(".dropdown");

    if (dropdown.className === "dropdown close") {
        dropdown.className = "dropdown";
    } else {
        dropdown.className = "dropdown close";
    }
}