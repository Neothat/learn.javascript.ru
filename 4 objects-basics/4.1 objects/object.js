'use strict';

// ### Объекты
let user1 = new Object(); // синтаксис "конструктор объекта"
let user2 = {}; // синтаксис "литерал объекта"
// ###

// ### Литералы и свойства
let user3 = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};
user3.isAdmin = true; // значения можно добавлять на лету
delete user3.age; // удалять значения можно то же на лету
alert(user3.name);
alert(user3.age);
alert(user3.isAdmin);

let user4 = {
  name: "John",
  age: 30,
  "likes birds": true  // имя свойства из нескольких слов должно быть в кавычках
};

const user5 = {
  name: "John"
};
user5.name = "Pete"; // (*)
alert(user5.name); // Pete
// ###

// ### Квадратные скобки
let user6 = {};
// присваивание значения свойству
user6["likes birds"] = true;
// получение значения свойства
alert(user6["likes birds"]); // true
// удаление свойства
delete user6["likes birds"];
// ###

// ### Свойство из переменной
function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age   // то же самое, что и age: age
    // ...
  };
}
let user7 = makeUser("John", 30);
alert(user7.name); // John
// ###

// ### Проверка существования свойства, оператор «in»
let user8 = { name: "John", age: 30 };
alert("age" in user8); // true, user.age существует
alert("blabla" in user8); // false, user.blabla не существует
let key = "age";
alert(key in user8); // true, имя свойства было взято из переменной key
// ###

// ### Цикл "for..in"
let user9 = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user9) {
  // ключи
  alert(key);  // name, age, isAdmin
  // значения ключей
  alert(user9[key]); // John, 30, true
}
// ###