'use strict'

// Существует ещё один вариант объявления функции. Он используется крайне редко, но иногда другого решения не найти.
let func = new Function([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');
alert(sum(1, 2)); // 3

let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

let str // = ... код, полученный с сервера динамически ...
let func1 = new Function(str);
func1();

// Когда функция создаётся с использованием new Function, в её [[Environment]] записывается ссылка не на внешнее лексическое окружение, в котором она была создана, а на глобальное. Поэтому такая функция имеет доступ только к глобальным переменным
function getFunc() {
    let value = "test";
    let func = new Function('alert(value)');
    return func;
}
getFunc()(); // ошибка: value не определено

function getFunc() {
    let value = "test";
    let func = function () { alert(value); };
    return func;
}
getFunc()(); // "test", из лексического окружения функции getFunc