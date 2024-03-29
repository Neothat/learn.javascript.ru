'use strict'

// Чтобы вторые скобки заработали, первые – должны вернуть функцию.
function sum(a) {

    return function (b) {
        return a + b; // берёт "a" из внешнего лексического окружения
    };

}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)); // 4