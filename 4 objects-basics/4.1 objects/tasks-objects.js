'use strict'

// ### task 1 begin
let user = new Object();
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
// ### task 1 end

// ### task 2 begin
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(schedule) {
    let keyCount = 0;
    for (let key in schedule) {
        keyCount++;
    }
    return keyCount == 0 ? true : false
}
// ### task 2 end

// ### task 4 begin
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let emptySalaries = {};
alert(sumSalaries(salaries));
alert(sumSalaries(emptySalaries));

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary in salaries) {
        sum += salaries[salary]
    }
    return sum
}
// ### task 4 end

// ### task 5 begin
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(menu) {
    for (let prop in menu) {
        if (typeof (menu[prop]) == 'number') {
            menu[prop] *= 2;
        }
    }
}

for (let prop in menu) {
    alert(menu[prop]);
}
// ### task 5 end