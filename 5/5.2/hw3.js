'use strict'

function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    return (num === null || num === '') ? null : +num;
}

alert(`Число: ${readNumber()}`);