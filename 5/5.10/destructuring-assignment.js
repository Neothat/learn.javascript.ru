'use strict'

// Деструктуризация массива

// у нас есть массив с именем и фамилией
let arr = ["Ilya", "Kantor"];
// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname] = arr;
alert(firstName); // Ilya
alert(surname);  // Kantor

// второй элемент не нужен
let [firstName1, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
alert(title); // Consul

// На самом деле мы можем использовать любой перебираемый объект, не только массивы:
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

// Object.entries(obj) и Map
let user = {
    name: "John",
    age: 30
};
// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, затем age:30
}

// Остаточные параметры ... Переменная rest является массивом из оставшихся элементов.
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

// prompt запустится только для surname
let [name = prompt('name?'), surname1 = prompt('surname?')] = ["Julius"];
alert(name);    // Julius (из массива)
alert(surname1); // результат prompt

// Деструктуризация объекта

let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title1, width, height } = options;
alert(title1);  // Menu
alert(width);  // 100
alert(height); // 200

// «что : куда идёт»
let options2 = {
    title: "Menu",
    width: 100,
    height: 200
};
// { sourceProperty: targetVariable }
let { width: w, height: h, title2 } = options2;
// width -> w
// height -> h
// title -> title
alert(title2);  // Menu
alert(w);      // 100
alert(h);      // 200

// Значения по умолчанию и Мы также можем совмещать : и =:
let options3 = {
    title: "Menu"
};
let { width1: w1 = 100, height1: h1 = 200, title3 } = options3;
alert(title3);  // Menu
alert(width1);  // 100
alert(height1); // 200

// Остаток объекта
let options4 = {
    title: "Menu",
    height: 200,
    width: 100
};
// title = свойство с именем title
// rest = объект с остальными свойствами
let { title4, ...rest1 } = options4;
// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest1.height);  // 200
alert(rest1.width);   // 100

// Вложенная деструктуризация
let options5 = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
// деструктуризация разбита на несколько строк для ясности
let {
    size: { // положим size сюда
        width2,
        height2
    },
    items: [item1, item2], // добавим элементы к items
    title5 = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options5;
alert(title5);  // Menu
alert(width2);  // 100
alert(height2); // 200
alert(item1);  // Cake
alert(item2);  // Donut