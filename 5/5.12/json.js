'use strict'

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
let json = JSON.stringify(student);
alert(typeof json); // мы получили строку!
alert(json);
/* выведет объект в формате JSON:
{
"name": "John",
"age": 30,
"isAdmin": false,
"courses": ["html", "css", "js"],
"wife": null
}
*/

let user = {
    sayHi() { // будет пропущено
        alert("Hello");
    },
    [Symbol("id")]: 123, // также будет пропущено
    something: undefined // как и это - пропущено
};
alert(JSON.stringify(user)); // {} (пустой объект)
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
alert(JSON.stringify(meetup));
/* вся структура преобразована в строку:
{
"title":"Conference",
"room":{"number":23,"participants":["john","ann"]},
}
*/

let room = {
    number: 23
};
let meetup1 = {
    title: "Conference",
    participants: ["john", "ann"]
};
meetup1.place = room;       // meetup ссылается на room
room.occupiedBy = meetup1; // room ссылается на meetup
JSON.stringify(meetup1); // Ошибка: Преобразование цикличной структуры в JSON

let room1 = {
    number1: 23
};
let meetup2 = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup ссылается на room
};
room1.occupiedBy = meetup2; // room ссылается на meetup
alert(JSON.stringify(meetup2, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));
/* пары ключ:значение, которые приходят в replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

let user1 = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};
alert(JSON.stringify(user1, null, 2));
/* отступ в 2 пробела:
{
"name": "John",
"age": 25,
"roles": {
  "isAdmin": false,
  "isEditor": true
}
}
*/
/* для JSON.stringify(user1, null, 4) результат содержит больше отступов:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/

let room2 = {
    number: 23,
    toJSON() {
        return this.number;
    }
};
let meetup3 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};
alert(JSON.stringify(meetup3));
alert(JSON.stringify(room));
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

// строковый массив
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert(numbers[1]); // 1
let user2 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user2 = JSON.parse(user2);
alert(user2.friends[1]); // 1

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
let meetup4 = JSON.parse(str, function (key, value) {
    if (key == 'date') return new Date(value);
    return value;
});
alert(meetup4.date.getDate()); // 30
alert(schedule.meetups[1].date.getDate()); // 18