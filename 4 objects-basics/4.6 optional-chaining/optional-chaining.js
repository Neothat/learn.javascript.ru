'use strict'

let user = {};
alert(user.address ? user.address.street : undefined);

let user2 = {}; // пользователь без адреса
alert(user?.address?.street); // undefined (без ошибки)

let userAdmin = {
    admin() {
        alert("Я админ");
    }
};
let userGuest = {};
userAdmin.admin?.(); // Я админ
userGuest.admin?.(); // ничего не произойдет (такого метода нет)

let key = "firstName";
let userA = {
    firstName: "John"
};
let userB = null;
alert(user1?.[key]); // John
alert(user2?.[key]); // undefined

delete user?.name; // удаляет user.name если пользователь существует