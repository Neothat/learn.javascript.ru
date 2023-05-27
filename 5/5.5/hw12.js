'use strict'

function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O

// Код работает, но в нём есть потенциальная проблема с производительностью.
// Метод result.includes(str) внутри себя обходит массив result и сравнивает каждый элемент с str, чтобы найти совпадение.