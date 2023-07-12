'use strict'

if (true) {
    var test = true; // используем var вместо let
}
alert(test); // true, переменная существует вне блока if

if (true) {
    let test = true; // используем let
}
alert(test); // Error: test is not defined

for (var i = 0; i < 10; i++) {
    // ...
}
alert(i); // 10, переменная i доступна вне цикла, т.к. является глобальной переменной

function sayHi() {
    if (true) {
        var phrase = "Привет";
    }
    alert(phrase); // срабатывает и выводит "Привет"
}
sayHi();
alert(phrase); // Ошибка: phrase не определена (видна в консоли разработчика)

// let user;
// let user; // SyntaxError: 'user' has already been declared
var user1 = "Pete";
var user1; // ничего не делает, переменная объявлена раньше
// ...нет ошибки
alert(user1); // Pete
var user1 = "Pete";
var user1 = "John";
alert(user1); // John

// Объявления переменных var обрабатываются в начале выполнения функции (или запуска скрипта, если переменная является глобальной).
function sayHi() {
    phrase = "Привет";
    alert(phrase);
    var phrase;
}
sayHi();
// Технически полностью эквивалентен следующему (объявление переменной var phrase перемещено в начало функции):
function sayHi() {
    var phrase;
    phrase = "Привет";
    alert(phrase);
}
sayHi();
// И даже коду ниже (как вы помните, блочная область видимости игнорируется):
function sayHi() {
    phrase = "Привет"; // (*)
    if (false) {
        var phrase;
    }
    alert(phrase);
}
sayHi();

// Объявления переменных «всплывают», но присваивания значений – нет.
function sayHi() {
    var phrase; // объявление переменной срабатывает вначале...
    alert(phrase); // undefined
    phrase = "Привет"; // ...присвоение - в момент, когда исполнится данная строка кода.
}
sayHi();