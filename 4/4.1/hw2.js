'use strict'

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

function isEmpty(schedule) {
    let keyCount = 0;
    for(let key in schedule){
        keyCount++;
    }
    return keyCount == 0 ? true : false
}