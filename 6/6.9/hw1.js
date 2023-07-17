'use strict'

function work(a, b) {
    alert(a + b); // произвольная функция или метод
}

function spy(func) {
    let calls = new Map();
    return function () {
        let key = hash(arguments);
        if (calls.has(key)) {
            return calls.get(key);
        }

        let result = func.apply(this, arguments);

        calls.set(key, result);
        return result;
    };
}
function hash(args) {
    return args[0] + ',' + args[1];
}

// Вариант 2
// function spy(func) {

//     function wrapper(...args) {
//         // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//         wrapper.calls.push(args);
//         return func.apply(this, args);
//     }

//     wrapper.calls = [];

//     return wrapper;
// }

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert('call:' + args.join()); // "call:1,2", "call:4,5"
}