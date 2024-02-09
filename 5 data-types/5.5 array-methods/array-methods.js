'use strict'

// ### splice
// Метод arr.splice умеет: добавлять, удалять и заменять элементы. arr.splice(start[, deleteCount, elem1, ..., elemN])
let firstArray = ["Я", "изучаю", "JavaScript"];
firstArray.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
alert(firstArray); // осталось ["Я", "JavaScript"]

let secondArray = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
secondArray.splice(0, 3, "Давай", "танцевать");
alert(secondArray) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

let thirdArray = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 2 первых элемента
let removed = thirdArray.splice(0, 2);
alert(removed); // "Я", "изучаю" <-- массив из удалённых элементов

let fifthArray = ["Я", "изучаю", "JavaScript"];
// с индекса 2 удалить 0 элементов и вставить "сложный", "язык"
fifthArray.splice(2, 0, "сложный", "язык");
alert(fifthArray); // "Я", "изучаю", "сложный", "язык", "JavaScript"

// Отрицательные индексы разрешены
let sixthArray = [1, 2, 5];
// начиная с индекса -1 (перед последним элементом) удалить 0 элементов, и затем вставить числа 3 и 4
sixth.splice(-1, 0, 3, 4);
alert(sixth); // 1,2,3,4,5
// ###

// ### slice
let sliceArray = ["t", "e", "s", "t"];
alert(sliceArray.slice(1, 3)); // e,s (копирует с 1 до 3)
alert(sliceArray.slice(-2)); // s,t (копирует с -2 до конца)
// Можно вызвать slice без аргументов: arr.slice() создаёт копию arr
// ###

// ### concat
let concatArray = [1, 2];
// создать массив из: arr и [3,4]
alert(concatArray.concat([3, 4])); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert(concatArray.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert(concatArray.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

let arrayLike = {
    0: "что-то",
    length: 1
};
alert(concatArray.concat(arrayLike)); // 1,2,[object Object]

arrayLike = {
    0: "что-то",
    1: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};
alert(concatArray.concat(arrayLike)); // 1,2,что-то,ещё
// ###

// ### Перебор: forEach
["Бильбо", "Гэндальф", "Назгул"].forEach(alert);

["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    alert(`У ${item} индекс ${index} в ${array}`);
});
// ###

// ### indexOf/lastIndexOf и includes
let arrayForSearch = [1, 0, false];
alert(arrayForSearch.indexOf(0)); // 1
alert(arrayForSearch.indexOf(false)); // 2
alert(arrayForSearch.indexOf(null)); // -1
alert(arrayForSearch.includes(1)); // true

let fruits = ['Яблоко', 'Апельсин', 'Яблоко'];
alert(fruits.indexOf('Яблоко')); // 0 (первый 'Яблоко')
alert(fruits.lastIndexOf('Яблоко')); // 2 (последний 'Яблоко')

const arrayWithNan = [NaN];
alert(arrayWithNan.indexOf(NaN)); // -1 (неверно, должен быть 0)
alert(arrayWithNan.includes(NaN));// true (верно)
// ###

// ### find и findIndex/findLastIndex
let result = arr.find(function (item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
});

let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];
let user = users.find(item => item.id == 1);
alert(user.name); // Вася

users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" },
    { id: 4, name: "Вася" }
];
// Найти индекс первого Васи
alert(users.findIndex(user => user.name == 'Вася')); // 0
// Найти индекс последнего Васи
alert(users.findLastIndex(user => user.name == 'Вася')); // 3
// ###

// ### filter
users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2
// ###

// ### map
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6
// ###

// ### sort(fn)
let arrayForSort = [1, 2, 15];
// метод сортирует содержимое arr
arrayForSort.sort();
alert(arrayForSort);  // 1, 15, 2
// По умолчанию элементы сортируются как строки.

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arrayForSort.sort(compareNumeric);
alert(arrayForSort);  // 1, 2, 15

arrayForSort.sort(function (a, b) { return a - b; });
alert(arrayForSort);  // 1, 2, 15

arrayForSort.sort((a, b) => a - b);

let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert(countries.sort((a, b) => a > b ? 1 : -1)); // Andorra, Vietnam, Österreich (неправильно)
alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (правильно)
// ###

// ### reverse
let reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
alert(reverseArray); // 5,4,3,2,1
// ###

// ### split и join
let names = 'Вася, Петя, Маша';
let delimNames = names.split(', ');
for (let name of delimNames) {
    alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}

names = 'Вася, Петя, Маша, Саша'.split(', ', 2);
alert(names); // Вася, Петя

let symbols = "тест";
alert(symbols.split('')); // т,е,с,т

let namesArray = ['Вася', 'Петя', 'Маша'];
names = arr.join(';'); // объединить массив в строку через ;
alert(names); // Вася;Петя;Маша
// ###

// ### reduce/reduceRight
let numberArray = [1, 2, 3, 4, 5];
let sumResult = numberArray.reduce((sum, current) => sum + current, 0);
alert(sumResult); // 15
// ###

// ### Array.isArray
alert(typeof {}); // object
alert(typeof []); // тоже object

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
// ###

// ### Большинство методов поддерживают «thisArg»
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let persons = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 }
];

// найти пользователей, для которых army.canJoin возвращает true
let soldiers = persons.filter(army.canJoin, army); // thisArg -- необязательный последний аргумент

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
// ###