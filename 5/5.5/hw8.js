'use strict'

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

// Как мы помним, есть две функции со стрелками: без тела value => expr и с телом value => {...}.
// Здесь JavaScript будет трактовать { как начало тела функции, а не начало объекта. 
// Чтобы обойти это, нужно заключить их в «нормальные» скобки:

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);