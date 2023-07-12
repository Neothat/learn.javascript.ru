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

function printListV1(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }

}
printListV1(list);

function printListV2(list) {
    alert(list.value); // выводим текущий элемент
    if (list.next) {
        printListV2(list.next); // делаем то же самое для остальной части списка
    }
}
printListV2(list);