'use strict'

// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName); // obj - Объект, из которого мы получаем информацию. propertyName - Имя свойства.

let user = {
    name: "John"
};

let descriptor1 = Object.getOwnPropertyDescriptor(user, 'name');
alert(JSON.stringify(descriptor1, null, 2));
/* дескриптор свойства:
{
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
}
*/

// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.
Object.defineProperty(obj, propertyName, descriptor)

let user1 = {};
Object.defineProperty(user1, "name", {
    value: "John"
});
let descriptor2 = Object.getOwnPropertyDescriptor(user1, 'name');
alert(JSON.stringify(descriptor2, null, 2));
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

let user2 = {
    name: "John"
};
Object.defineProperty(user2, "name", {
    writable: false
});
user2.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'

let user3 = {
    name: "John",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3, "toString", {
    enumerable: false
});
// Теперь наше свойство toString пропало из цикла:
for (let key in user3) alert(key); // name

let user4 = {
    name: "John"
};
Object.defineProperty(user4, "name", {
    configurable: false
});
user4.name = "Pete"; // работает
delete user4.name; // Ошибка

let user5 = {
    name: "John"
};
Object.defineProperty(user5, "name", {
    writable: false,
    configurable: false
});
// теперь невозможно изменить user.name или его флаги
// всё это не будет работать:
user5.name = "Pete";
delete user5.name;
Object.defineProperty(user5, "name", { value: "Pete" });

// Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    surname: { value: "Smith", writable: false },
    // ...
});

// Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом Object.getOwnPropertyDescriptors(obj).
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.
Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
// А также есть методы для их проверки:
Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.
Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.