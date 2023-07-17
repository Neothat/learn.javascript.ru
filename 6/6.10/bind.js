'use strict'

// полный синтаксис будет представлен немного позже
let boundFunc = func.bind(context);

let user = {
    firstName: "Вася"
};
function func() {
    alert(this.firstName);
}
let funcUser = func.bind(user);
funcUser(); // Вася

let user1 = {
    firstName: "Вася"
};
function func(phrase) {
    alert(phrase + ', ' + this.firstName);
}
// привязка this к user
let funcUser1 = func.bind(user);
funcUser1("Привет"); // Привет, Вася (аргумент "Привет" передан, при этом this = user)

let user2 = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};
let sayHi = user2.sayHi.bind(user2); // (*)
sayHi(); // Привет, Вася!
setTimeout(sayHi, 1000); // Привет, Вася!

let user3 = {
    firstName: "Вася",
    say(phrase) {
        alert(`${phrase}, ${this.firstName}!`);
    }
};
let say = user3.say.bind(user3);
say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")

// Если у объекта много методов и мы планируем их активно передавать, то можно привязать контекст для них всех в цикле:
for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}

// Полный синтаксис bind:
// let bound = func.bind(context, [arg1], [arg2], ...);
function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);
alert(double(3)); // = mul(2, 3) = 6
alert(double(4)); // = mul(2, 4) = 8
alert(double(5)); // = mul(2, 5) = 10

function partial(func, ...argsBound) {
    return function (...args) { // (*)
        return func.call(this, ...argsBound, ...args);
    }
}
// использование:
let user4 = {
    firstName: "John",
    say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};
// добавляем частично применённый метод с фиксированным временем
user4.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
user4.sayNow("Hello");
  // Что-то вроде этого:
  // [10:00] John: Hello!