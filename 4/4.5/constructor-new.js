'use strict'

function User(name) {
    // this = {};  (неявно)
    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;
    // return this;  (неявно)
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false

// создаём функцию и сразу же вызываем её с помощью new
let user2 = new function () {
    this.name = "John";
    this.isAdmin = false;
    // ...другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
};
// такой конструктор не может быть вызван снова, так как он нигде не сохраняется

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