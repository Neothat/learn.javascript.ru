'use strict';

let login = prompt('Логин', '');

if (login === null || login === '') {
    alert("Отмененно");
} else if (login === "Админ") {
    let password = prompt('Пароль', '');

    if (password === null || password === '') {
        alert("Отмененно");
    } else if (password === "Я Главный") {
        alert("Здравствуйте");
    } else {
        alert("Неверный пароль");
    }
} else {
    alert("Я вас не знаю");
}