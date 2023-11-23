'use strict'

// ### Пример
let a = 2 + 2

switch (a) {
    case 3:
        alert('Маловато!');
        break;
    case 4:
        alert('В точку!');
        break;
    case 5:
        alert('Перебор');
        break;
    default:
        alert("Нет таких значений");
}
// ###

// ### Группировака case
let b = 3;

switch (b) {
    case 4:
        alert('Правильно!');
        break;
    case 3: // (*) группируем оба case
    case 5:
        alert('Неправильно!');
        alert("Может вам посетить урок математики?");
        break;
    default:
        alert('Результат выглядит странновато. Честно.');
}
// ###

// ### Тип имеет значение
let arg = prompt("Введите число?");
switch (arg) { // проверка на равенство всегда строгая
    case '0':
    case '1':
        alert('Один или ноль');
        break;

    case '2':
        alert('Два');
        break;

    case 3:
        alert('Никогда не выполнится!');
        break;
    default:
        alert('Неизвестное значение');
}
// ###