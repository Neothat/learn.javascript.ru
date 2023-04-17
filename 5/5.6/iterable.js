'use strict'

let range = {
    from: 1,
    to: 5
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {

    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,

        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
            // 4. он должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// теперь работает!
for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
}

//////////////////

// Если использовать range как итератор, то его методы будут иметь следующий вид:
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
}

///////////////////

for (let char of "test") {
    // срабатывает 4 раза: по одному для каждого символа
    alert(char); // t, затем e, затем s, затем t
}

///////////////////
//  Array.from принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)