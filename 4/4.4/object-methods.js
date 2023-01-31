'use strict'

let user = {
    name: "John",
    age: 30,
    sayHi() {
        // "this" - это "текущий объект".
        alert(this.name);
    }

};
user.sayHi(); // John

let user2 = { name: "John" };
let admin = { name: "Admin" };
function sayHi() {
    alert(this.name);
}
// используем одну и ту же функцию в двух объектах
user2.f = sayHi;
admin.f = sayHi;
// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user2.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)

let user3 = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName); // если мы ссылаемся на this внутри такой функции, то оно берётся из внешней «нормальной» функции.
        arrow();
    }
};
user3.sayHi(); // Ilya