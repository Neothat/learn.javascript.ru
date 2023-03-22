'use strict'

let fruits = ["Яблоко", "Апельсин", "Слива"];
alert(fruits[0]); // Яблоко
alert(fruits[1]); // Апельсин
alert(fruits[2]); // Слива

// разные типы значений
let arr = ['Яблоко', { name: 'Джон' }, true, function () { alert('привет'); }];
// получить элемент с индексом 1 (объект) и затем показать его свойство
alert(arr[1].name); // Джон
// получить элемент с индексом 3 (функция) и выполнить её
arr[3](); // привет

let fruits2 = ["Apple", "Orange", "Plum"];
// то же самое, что и fruits[fruits.length-1]
alert(fruits2.at(-1)); // Plum

let fruits3 = ["Яблоко", "Апельсин", "Груша"];
alert(fruits3.pop()); // удаляем "Груша" и выводим его
alert(fruits3); // Яблоко, Апельсин
fruits3.push("Груша");
alert(fruits3); // Яблоко, Апельсин, Груша
alert(fruits3.shift()); // удаляем Яблоко и выводим его
alert(fruits3); // Апельсин, Груша
fruits3.unshift('Яблоко');
alert(fruits3); // Яблоко, Апельсин, Груша

let fruits4 = ["Яблоко"];
fruits4.push("Апельсин", "Груша");
fruits4.unshift("Ананас", "Лимон");
// ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
alert(fruits4);

let fruits5 = ["Банан"]
let arr1 = fruits5; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
alert(arr1 === fruits5); // true
arr1.push("Груша"); // массив меняется по ссылке
alert(fruits5); // Банан, Груша - теперь два элемента

let arr2 = [1, 2, 3, 4, 5];
arr2.length = 2; // укорачиваем до двух элементов
alert(arr2); // [1, 2]
arr2.length = 5; // возвращаем length как было
alert(arr2[3]); // undefined: значения не восстановились
// самый простой способ очистить массив – это arr.length = 0


alert([] + 1); // "1"
alert([1] + 1); // "11"
alert([1, 2] + 1); // "1,21"
alert("" + 1); // "1"
alert("1" + 1); // "11"
alert("1,2" + 1); // "1,21"

