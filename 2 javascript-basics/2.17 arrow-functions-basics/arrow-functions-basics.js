'use strict'

// ### Стрелочные функции, основы
let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3



let double = n => n * 2;
// примерно тоже что и: let double = function(n) { return n * 2 }
alert(double(3)); // 6



let sayHi = () => alert("Hello!");
sayHi();
// ###

// ### Многострочные стрелочные функции
let sum1 = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
};

alert(sum1(1, 2)); // 3
// ###