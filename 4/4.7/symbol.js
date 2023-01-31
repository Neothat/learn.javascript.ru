'use strict'

// Создаём новый символ - id
let id = Symbol();

// Создаём символ id с описанием (именем) "id"
let id1 = Symbol("id");

let id2 = Symbol("id");
let id3 = Symbol("id");
alert(id2 == id3); // false

let id4 = Symbol("id");
alert(id4); // TypeError: Cannot convert a Symbol value to a string
alert(id4.toString()); // Symbol(id), теперь работает
alert(id4.description); // id

let user1 = {
    name: "Вася"
};
let id5 = Symbol("id");
user1[id5] = 1;
alert(user1[id5]); // мы можем получить доступ к данным по ключу-символу

let id6 = Symbol("id");
let user2 = {
    name: "Вася",
    [id6]: 123 // просто "id: 123" не сработает
};
for (let key in user2) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)
// хотя прямой доступ по символу работает
alert("Напрямую: " + user[id]);

let id7 = Symbol("id");
let user3 = {
    [id7]: 123
};
let clone = Object.assign({}, user3); // Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:
alert(clone[id7]); // 123

// читаем символ из глобального реестра и записываем его в переменную
let id8 = Symbol.for("id"); // если символа не существует, он будет создан
// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");
// проверяем -- это один и тот же символ
alert(id8 === idAgain); // true

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа
alert( localSymbol.description ); // name