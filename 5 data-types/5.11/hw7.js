'use strict'

function getSecondsToTomorrow() {
    let now = new Date();

    let tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tommorow - now;
    return Math.round(diff / 1000);
}

alert(getSecondsToTomorrow());