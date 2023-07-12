'use strict'

// данный код вызывает sayHi() спустя одну секунду
function sayHi() {
    alert('Привет');
}
setTimeout(sayHi, 1000);

function sayHi(phrase, who) {
    alert(phrase + ', ' + who);
}
setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон

// спользование строк не рекомендуется. Вместо этого используйте функции. Например, так:
setTimeout(() => alert('Привет'), 1000);

// Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.
let timerIdTest = setTimeout();
clearTimeout(timerIdTest);

let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера
clearTimeout(timerId);
alert(timerId); // тот же идентификатор (не принимает значение null после отмены)

// Следующий пример выводит сообщение каждые 2 секунды. Через 5 секунд вывод прекращается:
// повторить с интервалом 2 секунды
let timerId1 = setInterval(() => alert('tick'), 2000);
// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId1); alert('stop'); }, 5000);

// Есть два способа запускать что-то регулярно.
// Один из них setInterval. Другим является вложенный setTimeout. Например:
/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId2 = setTimeout(function tick() {
    alert('tick');
    timerId2 = setTimeout(tick, 2000); // (*)
}, 2000);

// Например, необходимо написать сервис, который отправляет запрос для получения данных на сервер каждые 5 секунд, но если сервер перегружен, то необходимо увеличить интервал запросов до 10, 20, 40 секунд… Вот псевдокод:
let delay = 5000;
let timerId3 = setTimeout(function request() {
//   ...отправить запрос...

  if (/*ошибка запроса из - за перегрузки сервера*/ true) {
    // увеличить интервал для следующего запроса
    delay *= 2;
}
timerId3 = setTimeout(request, delay);
}, delay);