'use strict';

function makePow(a, b) {
    for (; b > 1; b--) {
        a *= a;
    }
    return a;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(makePow(x, n));
}