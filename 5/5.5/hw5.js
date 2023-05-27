'use strict'

let arr = ["HTML", "JavaScript", "CSS"];

let sortedArray = copySorted(arr);

alert(sortedArray); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)

function copySorted (array) {
    let tempArray = [];
    return tempArray.concat(array).sort();
}