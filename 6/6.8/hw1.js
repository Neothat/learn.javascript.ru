'use strict'

function printNumbers(from, to) {
    let timerId = setInterval(() => { if (from <= to) alert(from++) }, 1000);
}

function printNumbersV2(from, to) {
    let delay = 1000;
    let timerId = setTimeout(function request() {
        if (from <= to) alert(from++);
        timerId = setTimeout(request, delay);
    }, delay);
}

printNumbers(1, 10)
printNumbersV2(5, 10)