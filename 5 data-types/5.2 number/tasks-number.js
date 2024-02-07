'use strct'

// ### task 1 begin
let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');

alert((a + b).toFixed(2));
// ### task 1 end

// ### task 2 begin
alert(1.35.toFixed(1)); // 1.4
alert(6.35.toFixed(1)); // 6.3 ???

alert(6.35.toFixed(20)); // 6.34999999999999964473
alert(1.35.toFixed(20)); // 1.35000000000000008882

alert(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4
// ### task 2 end

// ### task 3 begin
function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    return (num === null || num === '') ? null : +num;
}

alert(`Число: ${readNumber()}`);
// ### task 3 end

// ### task 4 begin
// let i = 0;
// while (i != 10) {
//     i += 0.2;
// }

let i = 0;
while (i < 11) {
    i += 0.2;
    if (i > 9.8 && i < 10.2) alert(i);
}
// ### task 4 end

// ### task 5 begin
function random(min, max) {
    return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
// ### task 5 end

// ### task 6 begin
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
// ### task 6 end