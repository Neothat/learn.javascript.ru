'use strict'

let str = `Hello`;

// получаем первый символ
alert(str[0]); // H
alert(str.at(0)); // H

// получаем последний символ
alert(str[str.length - 1]); // o
alert(str.at(-1));

// можно перебрать строку посимвольно
for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}

// трюк с побитовм НЕ
alert(~2); // -3, то же, что -(2+1)
alert(~1); // -2, то же, что -(1+1)
alert(~0); // -1, то же, что -(0+1)
alert(~-1); // 0, то же, что -(-1+1)

let str2 = "Widget";

if (~str2.indexOf("Widget")) {
    alert('Совпадение есть'); // работает
}

// более современные методы
alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false
alert("Midget".includes("id")); // true
alert("Midget".includes("id", 3)); // false, поиск начат с позиции 3

// подстрока
let str3 = "stringify";

// для substring эти два примера — одинаковы
alert(str3.substring(2, 6)); // "ring"
alert(str3.substring(6, 2)); // "ring"

// …но не для slice:
alert(str3.slice(2, 6)); // "ring" (то же самое)
alert(str3.slice(6, 2)); // "" (пустая строка)

let str4 = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
alert( str4.substr(2, 4) );
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert( str4.substr(-4, 2) );

// сравнение строк

// Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:
// Отрицательное число, если str меньше str2.
// Положительное число, если str больше str2.
// 0, если строки равны.
alert( 'Österreich'.localeCompare('Zealand') ); // -1