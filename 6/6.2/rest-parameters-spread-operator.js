'use strict'

function sumAll(...args) { // args — имя массива
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6

function showName(firstName, lastName, ...titles) {
    alert(firstName + ' ' + lastName); // Юлий Цезарь
    // Оставшиеся параметры пойдут в массив
    // titles = ["Консул", "Император"]
    alert(titles[0]); // Консул
    alert(titles[1]); // Император
    alert(titles.length); // 2
}
showName("Юлий", "Цезарь", "Консул", "Император");

// Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.
function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
    // Объект arguments можно перебирать
    // for (let arg of arguments) alert(arg);
}
// Вывод: 2, Юлий, Цезарь
showName("Юлий", "Цезарь");
// Вывод: 1, Илья, undefined (второго аргумента нет)
showName("Илья");

// Math.max ожидает получить список чисел, а не один массив.
let arr = [3, 5, 1];
alert(Math.max(arr)); // NaN

let arr3 = [3, 5, 1];
alert(Math.max(...arr3)); // 5 (оператор "раскрывает" массив в список аргументов)

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert(Math.max(...arr1, ...arr2)); // 8

let arr4 = [1, -2, 3, 4];
let arr5 = [8, 3, -8, 1];
alert(Math.max(1, ...arr4, 2, ...arr5, 25)); // 25

let str = "Привет";
alert([...str]); // П,р,и,в,е,т