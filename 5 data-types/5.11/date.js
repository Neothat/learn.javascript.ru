'use strict'

let now = new Date();
alert(now); // показывает текущие дату и время

// 0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert(Jan01_1970);
// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);

let date = new Date("2017-01-26");
alert(date);
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода
// Так что в результате можно получить
// Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// или
// Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)

// текущая дата
let date1 = new Date();
// час в вашем текущем часовом поясе
alert(date1.getHours());
// час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
alert(date1.getUTCHours());

// Автоисправление
let date2 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date2); // ...1st Feb 2013!

// Этот приём можно использовать для измерения времени:
let start = new Date(); // начинаем отсчёт времени
// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end = new Date(); // заканчиваем отсчёт времени
alert(`Цикл отработал за ${end - start} миллисекунд`);

// Существует особый метод Date.now(), возвращающий текущую метку времени.
// Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date. Так что этот способ работает быстрее и не нагружает сборщик мусора.
let start1 = Date.now(); // количество миллисекунд с 1 января 1970 года
// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}
let end1 = Date.now(); // заканчиваем отсчёт времени
alert(`Цикл отработал за ${end1 - start1} миллисекунд`); // вычитаются числа, а не даты

//Метод getTime() работает ощутимо быстрее! Всё потому, что не производится преобразование типов, и интерпретаторам такое намного легче оптимизировать.
function diffSubtract(date1, date2) {
    return date2 - date1;
}
function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
}
function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
}
alert('Время diffSubtract: ' + bench(diffSubtract) + 'мс');
alert('Время diffGetTime: ' + bench(diffGetTime) + 'мс');

// Разбор строки с датой
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(ms); // 1327611110417 (таймстамп)
let date3 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
alert(date3);