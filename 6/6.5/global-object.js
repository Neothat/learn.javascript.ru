'use strict'

alert("Привет");
// это то же самое, что и
window.alert("Привет");

var gVar = 5;
alert(window.gVar); // 5 (становится свойством глобального объекта)
let gLet = 5;
alert(window.gLet); // undefined (не становится свойством глобального объекта)

// сделать информацию о текущем пользователе глобальной, для предоставления доступа всем скриптам
window.currentUser = {
    name: "John"
};
// где угодно в коде
alert(currentUser.name); // John
// или, если у нас есть локальная переменная с именем "currentUser",
// получим её из window явно (безопасно!)
alert(window.currentUser.name); // John

if (!window.Promise) {
    alert("Ваш браузер очень старый!");
}
if (!window.Promise) {
    // window.Promise = ... // собственная реализация современной возможности языка
}