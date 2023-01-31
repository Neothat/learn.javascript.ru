'use strict'

let a = {};
let b = a; // копирование по ссылке
alert(a == b); // true, обе переменные ссылаются на один и тот же объект
alert(a === b); // true

let c = {};
let d = {}; // два независимых объекта
alert(c == d); // false
alert(c === d); // false

let user = {
    name: "John",
    age: 30
};

let clone = {}; // новый пустой объект
// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}
// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные
alert(user.name); // все ещё John в первоначальном объекте

let user2 = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
// теперь user = { name: "John", canView: true, canEdit: true }

let user3 = { name: "John" };
Object.assign(user, { name: "Pete" });
alert(user.name); // теперь user = { name: "Pete" }

let user4 = {
    name: "John",
    age: 30
};
let clone = Object.assign({}, user); // простое клонирование