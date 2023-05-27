'use strict'

function sumToV1(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
alert(sumToV1(100));

function sumToV2(n) {
    if (n == 1) return 1;
    return n + sumToV2(n - 1);
}
alert(sumToV2(100));

function sumToV3(n) {
    return n * (n + 1) / 2;
}
alert(sumToV3(100));