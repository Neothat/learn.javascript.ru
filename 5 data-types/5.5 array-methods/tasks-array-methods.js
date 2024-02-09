'use strict'

// ### task 1 begin
alert(camelize("background-color") == 'backgroundColor');
alert(camelize("list-style-image") == 'listStyleImage');
alert(camelize("-webkit-transition") == 'WebkitTransition');

function camelize(string) {
    return string.split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
        .map(
            // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
            // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
// ### task 1 end

// ### task 2 begin
let arr2 = [5, 3, 8, 1];
let filtered = filterRange(arr2, 1, 4);
alert(filtered); // 3,1 (совпадающие значения)
alert(arr2); // 5,3,8,1 (без изменений)

function filterRange(array, minValue, maxValue) {
    return array.filter(value => value >= minValue && value <= maxValue);
}
// ### task 2 end

// ### task 3 begin
let arr3 = [5, 3, 8, 1, 3];
filterRangeInPlace(arr3, 1, 4); // удалены числа вне диапазона 1..4
alert(arr3); // [3, 1]

function filterRangeInPlace(array, minValue, maxValue) {
    for (let i = 0; i < arr3.length; i++) {
        let value = arr3[i];

        // удалить, если за пределами интервала
        if (value < minValue || value > maxValue) {
            arr3.splice(i, 1);
            i--;
        }
    }
}
// ### task 3 end

// ### task 4 begin
let array = [5, 2, 1, -10, 8];
array.sort((a, b) => b - a);
alert(array); // 8, 5, 2, 1, -10
// ### task 4 end

// ### task 5 begin
let arr = ["HTML", "JavaScript", "CSS"];

let sortedArray = copySorted(arr);

alert(sortedArray); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)

function copySorted (array) {
    let tempArray = [];
    return tempArray.concat(array).sort();
}
// ### task 5 end

// ### task 6 begin
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;
alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
// ### task 6 end

// ### task 7 begin
let vasya7 = { name: "Вася", age: 25 };
let petya7 = { name: "Петя", age: 30 };
let masha7 = { name: "Маша", age: 28 };

let users7 = [vasya7, petya7, masha7];

let names = users.map(item => item.name);;

alert(names);
// ### task 7 end

// ### task 8 begin
let vasya8 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya8 = { name: "Петя", surname: "Иванов", id: 2 };
let masha8 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya8, petya8, masha8];

// Как мы помним, есть две функции со стрелками: без тела value => expr и с телом value => {...}.
// Здесь JavaScript будет трактовать { как начало тела функции, а не начало объекта. 
// Чтобы обойти это, нужно заключить их в «нормальные» скобки:

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);
// ### task 8 end

// ### task 9 begin
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr9 = [vasya, petya, masha];

sortByAge(arr9);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя
// ### task 9 end

// ### task 10 begin
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

// 123: 166693
// 132: 166647
// 213: 166628
// 231: 167517
// 312: 166199
// 321: 166316
// ### task 10 end

// ### task 11 begin
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya11 = { name: "Вася", age: 25 };
let petya11 = { name: "Петя", age: 30 };
let masha11 = { name: "Маша", age: 29 };

let arr11 = [vasya, petya, masha];

alert(getAverageAge(arr11)); // 28
// ### task 11 end

// ### task 12 begin
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O

// Код работает, но в нём есть потенциальная проблема с производительностью.
// Метод result.includes(str) внутри себя обходит массив result и сравнивает каждый элемент с str, чтобы найти совпадение.
// ### task 12 end

// ### task 13 begin
let users13 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users13);

/*
// после вызова у нас должно получиться:
 
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}
// ### task 13 end