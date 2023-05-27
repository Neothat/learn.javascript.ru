'use strict'

alert(checkSpam('buy ViAgRA now') == true);
alert(checkSpam('free xxxxx') == true);
alert(checkSpam("innocent rabbit") == false);

function checkSpam (string) {
    return string.toLowerCase().includes('viagra') || string.toLowerCase().includes('xxx')
}