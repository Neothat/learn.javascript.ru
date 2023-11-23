'use strict';

// task #1 begin
let officialName = prompt('Какое "оффициальное" название JavaScript?', '');

if (officialName == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}
// task #1 end

// task #2 begin
let number = prompt('Введите любое число', '');

if (number == "0") {
    alert(0);
} else if (number > "0") {
    alert(1);
} else {
    alert(-1);
}
// task #2 end

// task #3 begin
let result = (a + b < 4) ? 'Мало' : 'Много';
// task #3 end

// task #4 begin
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
        (login == '') ? 'Нет логина' :
            '';
// task #3 end