'use strict'

// ### task 1 begin
alert(ucFirst("вася") == "Вася");

function ucFirst(string) {
    if (!string) return str;
    return string.at(0).toUpperCase() + string.slice(1);
}
// ### task 1 end

// ### task 2 begin
alert(checkSpam('buy ViAgRA now') == true);
alert(checkSpam('free xxxxx') == true);
alert(checkSpam("innocent rabbit") == false);

function checkSpam(string) {
    return string.toLowerCase().includes('viagra') || string.toLowerCase().includes('xxx')
}
// ### task 2 end

// ### task 3 begin
alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
alert(truncate("Всем привет!", 20));

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}
// ### task 3 end

// ### task 4 begin
alert(extractCurrencyValue('$120') === 120); // true

function extractCurrencyValue(str) {
    return +str.slice(1);
}
// ### task 4 end