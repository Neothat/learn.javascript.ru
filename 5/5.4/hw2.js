'use strict'

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классека';
alert(styles.shift());
alert.unshift('Реп', 'Регги');
