'use strict'

// ### Объявление функции
function showMessage() {
    alert('Всем привет!');
}

showMessage();
showMessage();
// ###

// ### Локальные переменные
function showMessage() {
    let message = "Привет, я JavaScript!"; // локальная переменная
    alert(message);
}

showMessage(); // Привет, я JavaScript!
alert(message); // <-- будет ошибка, т.к. переменная видна только внутри функции
// ###

// ### Внешние переменные
let userName = 'Вася';

function showMessage() {
    userName = "Петя"; // (1) изменяем значение внешней переменной
    let message = 'Привет, ' + userName;
    alert(message);
}

alert(userName); // Вася перед вызовом функции
showMessage();
alert(userName); // Петя, значение внешней переменной было изменено функцией



let userName1 = 'Вася';

function showMessage() {
    let userName1 = "Петя"; // объявляем локальную переменную
    let message = 'Привет, ' + userName1; // Петя
    alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName1
showMessage();

alert(userName1); // Вася, не изменилась, функция не трогала внешнюю переменную
// ###

// ### Параметры
function showMessage(from, text) { // параметры: from, text
    alert(from + ': ' + text);
}

showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)



function showMessage(from, text) {
    from = '*' + from + '*'; // немного украсим "from"
    alert(from + ': ' + text);
}

let from = "Аня";
showMessage(from, "Привет"); // *Аня*: Привет

// значение "from" осталось прежним, функция изменила значение локальной переменной
alert(from); // Аня
// ###

// ### Значения по умолчанию
showMessage("Аня"); // text === undefined.



function showMessage(from, text = "текст не добавлен") {
    alert(from + ": " + text);
}

showMessage("Аня"); // Аня: текст не добавлен



function showMessage(from, text = anotherFunction()) {
    // anotherFunction() выполнится только если не передан text
    // результатом будет значение text
}
// ###

// ### Возврат значения
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result); // 3



function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('А родители разрешили?');
    }
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
    alert('Доступ получен');
} else {
    alert('Доступ закрыт');
}



function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    alert("Вам показывается кино"); // (*)
    // ...
}
// ###