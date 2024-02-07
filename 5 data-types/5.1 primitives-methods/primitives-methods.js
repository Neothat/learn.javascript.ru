'use strict'

// ### Примитив как объект
// Каждый примитив имеет свой собственный «объект-обёртку», которые называются: 
// String, Number, Boolean, Symbol и BigInt. Таким образом, они имеют разный набор методов.

let str = "Привет";
alert(str.toUpperCase());

let num = 1.23456;
alert(num.toFixed(2)); // 1.23

let num2 = Number("123"); // превращает строку в число
// ###

// ### null/undefined не имеют методов
alert(null.test); // ошибка
// ###