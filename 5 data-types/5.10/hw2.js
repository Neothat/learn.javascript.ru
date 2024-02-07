'use strict'

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(topSalary(salaries));

function topSalary(salaries) {
    let highestSalary = 0,
        nameHighestPaidEmployee = null

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > highestSalary) {
            highestSalary = salary;
            nameHighestPaidEmployee = name;
        }
    }
    return nameHighestPaidEmployee;
}