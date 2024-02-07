'use strict'

// ### Кавычки
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
    return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList1 = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList1); // список гостей, состоящий из нескольких строк
// ###

// ### Спецсимволы
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList2); // список гостей, состоящий из нескольких строк

// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";
// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;
alert(str1 == str2); // true

alert('I\'m the Walrus!'); // I'm the Walrus!
alert(`I'm the Walrus!`); // I'm the Walrus!

alert(`The backslash: \\`); // The backslash: \
// ###

// ### Длина строки
// str.length — это числовое свойство, а не функция, добавлять скобки не нужно.
alert(`My\n`.length); // 3
// ###

// ### Доступ к символам
let str = `Hello`;

// получаем первый символ
alert(str[0]); // H
alert(str.at(0)); // H

// получаем последний символ
alert(str[str.length - 1]); // o
alert(str.at(-1)); // o

alert(str[-2]); // undefined
alert(str.at(-2)); // l

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
}
// ###

// ### Строки неизменяемы
let stringHi = 'Hi';

stringHi[0] = 'h'; // ошибка
alert(stringHi[0]); // не работает

str = 'h' + str[1]; // заменяем строку
alert(str); // hi
// ###

// ### Изменение регистра
alert('Interface'.toUpperCase()); // INTERFACE
alert('Interface'.toLowerCase()); // interface
alert('Interface'[0].toLowerCase()); // 'i'
// ###

// ### Поиск подстроки
let sourceString = 'Widget with id';

alert(sourceString.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
alert(sourceString.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру
alert(sourceString.indexOf("id")); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
alert(sourceString.indexOf('id', 2)) // 12

// Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле.
let position = 0
while (true) {
    let foundPosition = sourceString.indexOf("id", position);
    if (foundPosition == -1) break;
    alert(`Найдено тут: ${foundPosition}`);
    position = foundPosition + 1; // продолжаем со следующей позиции
}

// Более короткий алгоритм
let positionVar2 = -1;
while ((positionVar2 = sourceString.indexOf("id", positionVar2 + 1)) != -1) {
    alert(positionVar2);
}

alert(sourceString.lastIndexOf('id')) // 12

// Мы ищем подстроку "Widget", и она здесь есть, прямо на позиции 0. 
// Но alert не показывается, т. к. str.indexOf("Widget") возвращает 0, и if решает, что тест не пройден.
if (sourceString.indexOf("Widget")) {
    alert("Совпадение есть"); // не работает
}

// Поэтому надо делать проверку на -1:
if (sourceString.indexOf("Widget") != -1) {
    alert("Совпадение есть"); // теперь работает
}
// ###

// ### includes, startsWith, endsWith
alert("Widget with id".includes("Widget")); // true
alert("Hello".includes("Bye")); // false

alert("Midget".includes("id")); // true
alert("Midget".includes("id", 3)); // false, поиск начат с позиции 3

alert("Widget".startsWith("Wid")); // true, "Wid" — начало "Widget"
alert("Widget".endsWith("get")); // true, "get" — окончание "Widget"
// ###

// ### Получение подстроки
let string = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert(string.slice(0, 5));
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert(string.slice(0, 1));
// Если аргумент end отсутствует, slice возвращает символы до конца строки:
alert(str.slice(2)); // ringify, с позиции 2 и до конца
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
alert(str.slice(-4, -1)); // gif

// для substring эти два примера — одинаковы
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"
// …но не для slice:
alert(str.slice(2, 6)); // "ring" (то же самое)
alert(str.slice(6, 2)); // "" (пустая строка)

// ring, получаем 4 символа, начиная с позиции 2
alert(str.substr(2, 4));
// gi, получаем 2 символа, начиная с позиции 4 с конца строки
alert(str.substr(-4, 2));
// ###

// ### Сравнение строк
// Строчные буквы больше заглавных:
alert('a' > 'Z'); // true

// Буквы, имеющие диакритические знаки, идут «не по порядку»:
alert('Österreich' > 'Zealand'); // true

// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90

alert(String.fromCodePoint(90)); // Z

let targetString = '';
for (let i = 65; i <= 220; i++) {
    targetString += String.fromCodePoint(i);
}
alert(targetString);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
// ###