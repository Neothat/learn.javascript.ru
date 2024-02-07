'use strict'

let map = new Map();

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
alert(map.get(1)); // "num1"
alert(map.get("1")); // "str1"
alert(map.size); // 3

// Map может использовать объекты в качестве ключей
let john = { name: "John" };
// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();
// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123

// Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку:
map.set("1", "str1")
    .set(1, "num1")
    .set(true, "bool1");

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
]);
// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // огурец, помидор, лук
}
// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}
// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    alert(entry); // огурец,500 (и так далее)
}

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // огурец: 500 и так далее
});

// массив пар [ключ, значение]
let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
alert(map1.get('1')); // str1

// Можно переводить объекты в Map и обратно
let obj = {
    name: "John",
    age: 30
};
let map2 = new Map(Object.entries(obj));
alert(map2.get('name')); // John

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
// prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2

let set = new Set();
let john1 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// считаем гостей, некоторые приходят несколько раз
set.add(john1);
set.add(pete);
set.add(mary);
set.add(john1);
set.add(mary);
// set хранит только 3 уникальных значения
alert(set.size); // 3
for (let user of set) {
    alert(user.name); // John (потом Pete и Mary)
}

let set1 = new Set(["апельсин", "яблоко", "банан"]);
for (let value of set1) alert(value);
// то же самое с forEach:
set1.forEach((value, valueAgain, set) => { // valueAgain сделано для совместимости с объектом Map, в котором колбэк forEach имеет 3 аргумента
    alert(value);
});