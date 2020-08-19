"use strict";
//JavaScript - это про ощение с людьми
//Рассмотрим вывод сообщений в браузере, 
//а не только в консоле

//Вывод сообщения в модальном окне о чем то важном.
//для каждого браузера это окно свое.
// alert('Hello');

//Спросим пользователя о чем то и получим от него ответ.
//Используем команду confirm()
//И тот результат, который мы получим в результате действия
//true или false
//в браузере, запишется в переменную result
// const result = confirm("Are you here?");

// console.log(result);

//Но иногда нам от польователя нам нужен конкретный ответ,
//который он напечатает.
//Используем команду prompt()
//Вторая часть используется для подстановки дефолтного ответа 
//(placeholder) или просто пустые кавычки.
// const answer = prompt("Вам есть 18?", "Введите в этом поле Ваш возраст.");
//выведем данные полученные от пользователя в консоль:
// console.log(answer);

//проверим тип выводимых данных:
// console.log(typeof(answer));
//Всегда получаем ответ типа String.

//Но можно использовать динамическую типизацию, чтобы привести ответ пользователя
//к типу number:
// const answer2 = +prompt("Вам есть 18?", "Введите в этом поле Ваш возраст.");
// console.log(typeof(answer2));

//Теперь ответы запишем в массив данных:
const answers = [];
answers[0] = confirm("Пользователь, вы здесь?");
answers[1] = prompt("Как ваше имя?", "");
answers[2] = prompt("Как ваша фамилия?", "");
answers[3] = prompt("Сколько вам лет?", "");

//Теперь вместо ответа в консоль console.log()
//используем ответ на странице с помощью команды document.write()
//Эта команда полностью убирает содержимое сайта и выводит сообщение.
//Используют для тестов. Она устаревшая.
document.write(answers);

//Посмотрим какой тип данных имеет массив
const answers2 = [];
console.log(typeof(answers2));

//Внимание!!!
//Официально признанная ошибка о типе данных NULL
console.log(typeof(null));