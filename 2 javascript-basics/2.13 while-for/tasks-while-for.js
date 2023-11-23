'use script';

// task 1 begin
for (let i = 2; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    alert(i);
}
// task 1 end

// task 2 begin
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}
// task 2 end

// task 3 begin
let num;

do {
    num = prompt("Введите число больше 100?", 0);
  } while (num <= 100 && num);
// task 3 end

// task 4 begin
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}
// task 4 end