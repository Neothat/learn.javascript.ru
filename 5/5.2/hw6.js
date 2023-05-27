'use strict'

// Simple and wrong decision

// function randomInteger(min, max) {
//     let rand = min + Math.random() * (max - min);
//     return Math.round(rand);
// }

function randomInteger1(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


function randomInteger2(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert(randomInteger2(1, 5));
alert(randomInteger2(1, 5));
alert(randomInteger(21, 5));

