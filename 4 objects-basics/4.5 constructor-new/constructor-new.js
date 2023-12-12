'use strict'

// ### Функция-конструктор
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

let functionConstructorUser = new function () {
    this.name = "John";
    this.isAdmin = false;

    // ...другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
};
// ###

// ### Возврат значения из конструктора, return
function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  // <-- возвращает этот объект
}
alert(new BigUser().name);  // Godzilla, получили этот объект

function SmallUser() {
    this.name = "John";
    return; // <-- возвращает this
}
alert(new SmallUser().name);  // John
// ###

// ### Создание методов в конструкторе
function User(name) {
    this.name = name;
    this.sayHi = function () {
        alert("Меня зовут: " + this.name);
    };
}
let john = new User("John");
john.sayHi(); // Меня зовут: John
/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
// ###