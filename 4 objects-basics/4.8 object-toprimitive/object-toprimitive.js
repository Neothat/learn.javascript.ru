'use strict'

obj[Symbol.toPrimitive] = function (hint) {
    // вот код для преобразования этого объекта в примитив
    // он должен вернуть примитивное значение
    // hint = чему-то из "string", "number", "default"
};

let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

let user1 = { name: "John" };
alert(user1); // [object Object]
alert(user1.valueOf() === user); // true

let user2 = {
    name: "John",
    money: 1000,
    // для хинта равного "string"
    toString() {
        return `{name: "${this.name}"}`;
    },
    // для хинта равного "number" или "default"
    valueOf() {
        return this.money;
    }
};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

let obj = {
    // toString обрабатывает все преобразования в случае отсутствия других методов
    toString() {
        return "2";
    }
};
alert(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом

let obj1 = {
    toString() {
        return "2";
    }
};
alert(obj1 + 2); // 22 ("2" + 2), преобразование к примитиву вернуло строку => конкатенация