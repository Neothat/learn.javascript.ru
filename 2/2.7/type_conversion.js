let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);

alert( "6" / "2" );

let str = "123";
alert(typeof str);
num = Number(str);
alert(typeof num);

let age = Number("Любая строка вместо числа");
alert(age);  //NaN

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("0") ); // true

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false
alert( Boolean(" ") ); // true