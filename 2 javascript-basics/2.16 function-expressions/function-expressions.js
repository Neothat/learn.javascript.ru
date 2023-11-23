'use strict'

// ### Function Expression
function sayHi() { // Function Declaration (Объявление Функции):
    alert("Привет");
}



let sayHi = function () { // Function Expression (Функциональное Выражение)
    alert("Привет");
};
// ###

// ### Функция – это значение
function sayHi() {
    alert("Привет");
}
alert(sayHi); // выведет код функции



function sayHi() {   // (1) создаём
    alert("Привет");
}

let func = sayHi;    // (2) копируем
func(); // Привет     // (3) вызываем копию (работает)!
sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)
// ###

// ### Функции-«колбэки»
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("Вы согласны.");
}

function showCancel() {
    alert("Вы отменили выполнение.");
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
// ###