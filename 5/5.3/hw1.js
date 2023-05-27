'use strict'

alert(ucFirst("вася") == "Вася");

function ucFirst (string) {
    if (!string) return str;
    return string.at(0).toUpperCase() + string.slice(1);
}

