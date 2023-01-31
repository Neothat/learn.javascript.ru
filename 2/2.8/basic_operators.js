'use strict'

alert(2 + 2 + '1' + 2 + 2);

// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0

let a = 1,
b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0