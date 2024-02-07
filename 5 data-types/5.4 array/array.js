'use strict'

// ### Объявление
let firstEmptyArray = new Array();
let secondEmptyArray = [];

let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits[0]); // Яблоко
alert(fruits[1]); // Апельсин
alert(fruits[2]); // Слива

// Мы можем заменить элемент:
fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
// …Или добавить новый к существующему массиву:
fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]

alert(fruits.length); // 3
alert(fruits); // Яблоко, Апельсин, Слива

// разные типы значений
let differentTypesArray = ['Яблоко', { name: 'Джон' }, true, function () { alert('привет'); }];
// получить элемент с индексом 1 (объект) и затем показать его свойство
alert(differentTypesArray[1].name); // Джон
// получить элемент с индексом 3 (функция) и выполнить её
differentTypesArray[3](); // привет

let fruits = [
    "Яблоко",
    "Апельсин",
    "Слива",
];
// «Висячая запятая» упрощает процесс добавления / удаления элементов, так как все строки становятся идентичными.
// ###

// ### Получение последних элементов при помощи «at»
alert(fruits.at(-1)); // Слива
// ###

// ### Методы pop/push, shift/unshift
alert(fruits.pop()); // удаляем "Груша" и выводим его
alert(fruits); // Яблоко, Апельсин

fruits.push("Груша");
alert(fruits); // Яблоко, Апельсин, Груша

alert(fruits.shift()); // удаляем Яблоко и выводим его
alert(fruits); // Апельсин, Груша

fruits.unshift('Яблоко');
alert(fruits); // Яблоко, Апельсин, Груша

let fruits = ["Яблоко"];
fruits.push("Апельсин", "Груша");
fruits.unshift("Ананас", "Лимон");
// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
alert(fruits);
// ###

// ### Внутреннее устройство массива
// Копирование по ссылке
let fruits = ["Банан"]
let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
alert(arr === fruits); // true
arr.push("Груша"); // массив меняется по ссылке
alert(fruits); // Банан, Груша - теперь два элемента
// ###

// ### Перебор элементов
for (let i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}

// проходит по значениям
for (let fruit of fruits) {
    alert(fruit);
}
// ###

// ### Немного о «length»
let fruits = [];
fruits[123] = "Яблоко";
alert(fruits.length); // 124

let numericArray = [1, 2, 3, 4, 5];

numericArray.length = 2; // укорачиваем до двух элементов
alert(numericArray); // [1, 2]

numericArray.length = 5; // возвращаем length как было
alert(numericArray[3]); // undefined: значения не восстановились

// Таким образом, самый простой способ очистить массив – это arr.length = 0;
// ###

// ### new Array()
let newArray = new Array("Яблоко", "Груша", "и тд");

let twoElementArray = new Array(2); // создастся ли массив [2]?
alert(twoElementArray[0]); // undefined! нет элементов.
alert(twoElementArray.length); // length 2
// ###

// ### Многомерные массивы
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

alert(matrix[1][1]); // 5, центральный элемент
// ###

// ### toString
let anotherNumericArray = [1, 2, 3];

alert(anotherNumericArray); // 1,2,3
alert(String(anotherNumericArray) === '1,2,3'); // true

alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"
// ###