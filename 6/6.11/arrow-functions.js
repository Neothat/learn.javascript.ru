'use strict'

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList() {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        );
    }
};
group.showList();

// Если бы мы использовали «обычную» функцию, была бы ошибка:
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined
            alert(this.title + ': ' + student)
        });
    }
};
group1.showList();

// Существует тонкая разница между стрелочной функцией => и обычной функцией, вызванной с .bind(this):

// .bind(this) создаёт «связанную версию» функции.
// Стрелка => ничего не привязывает. У функции просто нет this. При получении значения this – оно, как обычная переменная, берётся из внешнего лексического окружения.

function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}
function sayHi(who) {
    alert('Hello, ' + who);
}
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды

// То же самое без стрелочной функции выглядело бы так:
function defer(f, ms) {
    return function (...args) {
        let ctx = this;
        setTimeout(function () {
            return f.apply(ctx, args);
        }, ms);
    };
}