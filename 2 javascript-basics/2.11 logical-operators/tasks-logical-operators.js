'use strict';

// task 1 begin
let age1 = prompt('Введите возраст', '');

if(age1 >= 14 || age1 <= 90) {
    alert(true);
}
// task 1 end

// task 2 begin
let age2 = prompt('Введите возраст', '');

if(age2 < 14 || age2 > 90) {
    alert(true);
}

if(!(age2 >= 14 || age2 <= 90)) {
    alert(true);
}
// task 2 end

// task 3 begin
// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 || 0) alert( 'first' );

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (-1 && 0) alert( 'second' );

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
// task 3 end