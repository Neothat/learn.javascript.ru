'use strict'

function sumSalaries(salaries) {
    let sum = 0;
    for (const salary of Object.values(salaries)) {
        sum += salary;
    }
    return sum;
}
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// }
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert(sumSalaries(salaries)); // 650

function count(user) {
    return Object.keys(user).length;
}
let user = {
    name: 'John',
    age: 30
};
alert(count(user)); // 2