'use strict'

// ### task 1 begin
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert(new A() == new B()); // true
// ### task 1 end

// ### task 2 begin
function Calculator() {
    this.read = function () {
        this.a = +prompt('A?', 0);
        this.b = +prompt('B?', 0);
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
// ### task 2 end

// ### task 3 begin
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt('Сколько нужно добавить?', 0);
    }
}

let accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
alert(accumulator.value); // выведет сумму этих значений
// ### task 3 end