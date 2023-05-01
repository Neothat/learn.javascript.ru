'use strict'

// 📁 cache.js
let cache = new WeakMap();
// вычисляем и запоминаем результат
function process(obj) {
    if (!cache.has(obj)) {
        let result = /* вычисляем результат для объекта */ obj;
        cache.set(obj, result);
    }
    return cache.get(obj);
}
// 📁 main.js
let obj = {/* какой-то объект */ };
let result1 = process(obj);
let result2 = process(obj);
// ...позже, когда объект больше не нужен:
obj = null;
// Нет возможности получить cache.size, так как это WeakMap,
// но он равен 0 или скоро будет равен 0
// Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются


let visitedSet = new WeakSet();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова
// visitedSet сейчас содержит двух пользователей
// проверим, заходил ли John?
alert(visitedSet.has(john)); // true
// проверим, заходила ли Mary?
alert(visitedSet.has(mary)); // false
john = null;
// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)