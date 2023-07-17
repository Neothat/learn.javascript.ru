'use strict'

function powFor(x, n) {
    let result = 1;
    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
alert(powFor(2, 3)); // 8

function powRecursion(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * powRecursion(x, n - 1);
    }
}
alert(powRecursion(2, 3)); // 8

function powRecursionV2(x, n) {
    return (n == 1) ? x : (x * powRecursionV2(x, n - 1));
}

// Любая рекурсия может быть переделана в цикл. Как правило, вариант с циклом будет эффективнее.

let company = { 
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

// Функция для подсчёта суммы зарплат
// Случай (1), когда мы получили массив, является базой рекурсии, тривиальным случаем.
// Случай (2), при получении объекта, является шагом рекурсии.
function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}
alert(sumSalaries(company)); // 6700