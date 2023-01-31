'use strict'

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let emptySalaries = {};
alert(sumSalaries(salaries));
alert(sumSalaries(emptySalaries));

function sumSalaries (salaries) {
    let sum = 0;
    for(let salary in salaries) {
        sum += salaries[salary]
    }
    return sum
}