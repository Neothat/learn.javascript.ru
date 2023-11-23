'use strict';

alert(1 || 0); // 1
alert(true || 'no matter what'); // true

alert(null || 1); // 1 (первое истинное значение)
alert(null || 0 || 1); // 1 (первое истинное значение)
alert(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)


// Если первый операнд истинный,
// И возвращает последний:
alert(1 && 0); // 0
alert(1 && 5); // 5
alert(1 && 5 && 7); // 7

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert(null && 5); // null
alert(0 && "no matter what"); // 0


alert( !true ); // false
alert( !0 ); // true

alert( !!"non-empty string" ); // true
alert( !!null ); // false
