'use strict'

// ### task 1 begin
let calculator = {

    a: 0,
    b: 0,

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
// ### task 1 end

// ### task 2 begin
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();
// ### task 2 end