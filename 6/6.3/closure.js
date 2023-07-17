'use strict'

//В глобальном лексическом окружении есть name: "John".
// На строке (*) глобальная переменная изменяется, теперь name: "Pete".
// Момент, когда выполняется функция sayHi() и берёт переменную name извне. Теперь из глобального лексического окружения, где переменная уже равна "Pete".
let name = "John";
function sayHi() {
    alert("Hi, " + name);
}
name = "Pete"; // (*)
sayHi(); // Pete

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter1 = makeCounter();
let counter2 = makeCounter();
alert(counter1()); // 0
alert(counter1()); // 1
alert(counter2()); // 0 (независимо)