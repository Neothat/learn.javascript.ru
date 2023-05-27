'use strict'

function fibV1(n) {
    return n <= 1 ? n : fibV1(n - 1) + fibV1(n - 2);
}

alert(fibV1(3)); // 2
alert(fibV1(7)); // 13
// fibV1(77); // вычисляется очень долго

function fibV2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fibV2(3)); // 2
alert(fibV2(7)); // 13
alert(fibV2(77)); // 5527939700884757