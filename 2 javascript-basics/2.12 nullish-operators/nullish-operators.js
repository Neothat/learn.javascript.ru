'use strict';

let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер


// оператор || не различает false, 0, пустую строку "" и null/undefined
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0