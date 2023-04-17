'use strict'

let arr = [5, 3, 8, 1, 3];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert(arr); // [3, 1]

function filterRangeInPlace(array, minValue, maxValue) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        // удалить, если за пределами интервала
        if (value < minValue || value > maxValue) {
            arr.splice(i, 1);
            i--;
        }
    }
}