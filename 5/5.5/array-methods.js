'use strict'

let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
alert(arr); // осталось ["Я", "JavaScript"]

let arr1 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr1.splice(0, 3, "Давай", "танцевать");
alert(arr1) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 2 первых элемента
let removed = arr2.splice(0, 2);
alert(removed); // "Я", "изучаю" <-- массив из удалённых элементов

let arr3 = ["Я", "изучаю", "JavaScript"];
// с индекса 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr3.splice(2, 0, "сложный", "язык");
alert(arr3); // "Я", "изучаю", "сложный", "язык", "JavaScript"

let arr4 = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr4.splice(-1, 0, 3, 4);
alert(arr4); // 1,2,3,4,5

let arr5 = ["t", "e", "s", "t"];
alert(arr5.slice(1, 3)); // e,s (копирует с 1 до 3)
alert(arr5.slice(-2)); // s,t (копирует с -2 до конца)

// Можно вызвать slice без аргументов: arr.slice() создаёт копию arr. 
// Это часто используют, чтобы создать копию массива для дальнейших преобразований, 
// которые не должны менять исходный массив.

let arr6 = [1, 2];
// создать массив из: arr и [3,4]
alert(arr6.concat([3, 4])); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert(arr6.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert(arr6.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Вызов alert для каждого элемента
["Бильбо", "Гэндальф", "Назгул"].forEach(alert);

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
});

let arr7 = [1, 0, false];
alert(arr7.indexOf(0)); // 1
alert(arr7.indexOf(false)); // 2
alert(arr7.indexOf(null)); // -1
alert(arr7.includes(1)); // true

let fruits = ['Яблоко', 'Апельсин', 'Яблоко']
alert(fruits.indexOf('Яблоко')); // 0 (первый 'Яблоко')
alert(fruits.lastIndexOf('Яблоко')); // 2 (последний 'Яблоко')

const arr8 = [NaN];
alert(arr8.indexOf(NaN)); // -1 (неверно, должен быть 0)
alert(arr8.includes(NaN));// true (верно)

let result = arr.find(function (item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
});
// item – очередной элемент.
// index – его индекс.
// array – сам массив.

let results = arr.filter(function (item, index, array) {
    // если `true` -- элемент добавляется к results и перебор продолжается
    // возвращается пустой массив в случае, если ничего не найдено
});

let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6

let arr9 = [1, 2, 15];
// метод сортирует содержимое arr
arr9.sort();
alert(arr9);  // 1, 15, 2

let arr10 = [1, 2, 15];
// метод сортирует содержимое arr
arr10.sort();
alert(arr10);  // 1, 15, 2

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arr10.sort(compareNumeric);
alert(arr10);  // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
    alert(a + " <> " + b);
    return a - b;
});

let names = 'Вася, Петя, Маша';
let arr11 = names.split(', ');
for (let name of arr11) {
    alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}

let arr12 = ['Вася', 'Петя', 'Маша'];
let str12 = arr12.join(';'); // объединить массив в строку через ;
alert(str12); // Вася;Петя;Маша

let arr13 = [1, 2, 3, 4, 5];
let result13 = arr13.reduce((sum, current) => sum + current, 0);
alert(result13); // 15

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true