'use strict'

function getSecondsToday() {
    let now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        second = now.getSeconds();
    return hours * 3600 + minutes * 60 + second;
}

// function getSecondsToday() {
//     let now = new Date();

//     // создаём объект с текущими днём/месяцем/годом
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     let diff = now - today; // разница в миллисекундах
//     return Math.round(diff / 1000); // получаем секунды
// }

alert(getSecondsToday());