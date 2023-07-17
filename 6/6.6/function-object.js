'use strict'

function sayHi() {
    alert("Hi");
}
alert(sayHi.name); // sayHi

let sayHi = function () {
    alert("Hi");
};
alert(sayHi.name); // sayHi (есть имя!)

function f(sayHi = function () { }) {
    alert(sayHi.name); // sayHi (работает!)
}
f();

let user = {
    sayHi() {
        // ...
    },
    sayBye: function () {
        // ...
    }
}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// функция объявлена внутри массива
let arr = [function () { }];
alert(arr[0].name); // <пустая строка>
// здесь отсутствует возможность определить имя, поэтому его нет

// свойство «length» содержит количество параметров функции в её объявлении
function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }
alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

function ask(question, ...handlers) {
    let isYes = confirm(question);
    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}
// для положительных ответов вызываются оба типа обработчиков
// для отрицательных - только второго типа
ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));

// Мы также можем добавить свои собственные свойства
function sayHi() {
    alert("Hi");
    // давайте посчитаем, сколько вызовов мы сделали
    sayHi.counter++;
}
sayHi.counter = 0; // начальное значение
sayHi(); // Hi
sayHi(); // Hi
alert(`Вызвана ${sayHi.counter} раза`); // Вызвана 2 раза

function makeCounter() {
    // вместо
    // let count = 0
    function counter() {
        return counter.count++;
    };
    counter.count = 0;
    return counter;
}
let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1

function makeCounter() {
    function counter() {
        return counter.count++;
    };
    counter.count = 0;
    return counter;
}
let counter1 = makeCounter();
counter1.count = 10;
alert(counter()); // 10

let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // использует func, чтобы снова вызвать себя же
    }
};
sayHi(); // Hello, Guest
// А вот так - не cработает:
func(); // Ошибка, func не определена (недоступна вне функции)

let sayHi = function (who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        sayHi("Guest"); // Ошибка: sayHi не является функцией
    }
};
let welcome = sayHi;
sayHi = null;
welcome(); // Ошибка, вложенный вызов sayHi больше не работает!
// Так происходит, потому что функция берёт sayHi из внешнего лексического окружения. Так как локальная переменная sayHi отсутствует, используется внешняя. И на момент вызова эта внешняя sayHi равна null.
// Необязательное имя, которое можно вставить в Function Expression, как раз и призвано решать такого рода проблемы.
let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // Теперь всё в порядке
    }
};
let welcome1 = sayHi;
sayHi = null;
welcome1(); // Hello, Guest (вложенный вызов работает)