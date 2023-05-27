'use strict'

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseListV1(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}
printReverseListV1(list);

function printReverseListV2(list) {
    if (list.next) {
        printReverseListV2(list.next);
    }
    alert(list.value);
}
printReverseListV2(list);