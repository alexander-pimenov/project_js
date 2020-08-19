"use strictc"; 

//Тип данных ЧИСЛО
let number = 4.6;

console.log(4/0); //Infinity
console.log(-4/0); //-Infinity

console.log('str'+10); //str10 - автоматическая конкатенация

console.log('str'*10); //NaN - not a number - не число!

//Тип данных СТРОКА 
//в классическом JavaScript абсолютно нет никакой рахницы какие 
//кавычки использовать: двойные - " " одинарные - ' ' косые - ` `
const person1 = "Alex";
const person2 = 'Alex';
const person3 = `Alex`;

//ЛОГИЧЕСКИЙ тип данных  
const boot = true;
const bool2 = false;

//Тип данных   NULL когда чего то не существует.
//console.log(somthing);

//Тип данных   UNDEFINED
let und;
console.log(und); //ReferenceError: und is not defined

//Тип данных Symbol - на практике почти не используется

//Тип BigInt - используется только с огромными числоми более, 
//чем 2 в 53 степени

//Тип данных Объект
//Это коплексный тип данных.
//Объект - это коллекция данных.
//Внутри {} содержаться данные, к-рые называются свойствами объекта
//и какие то действия, к-рые называются методы.
const obj = {
    //укажем свойсва объекта:
    name: "John",
    age: 25,
    isMarried: false
};

//Чтобы вызвать свойство объекта воспользуемс . или []
console.log(obj.age);
// console.log(obj['name']);

//Массив
//В нем элементы лежат сторго по порядку, и поместить в него можно
//любой тип данных: строки, числа, объекты, другие массивы и даже всё 
//одновременно!!!
let arr = ['plam.png',{
    name: "John",
    age: 25,
    isMarried: false
}, {}, 'orange.jpg', 6, 'apple.bmp', []];
// let arr = ['p;am.png', 'orange.jpg', 'apple.bmp'];

//В массиве как бы ключа нет, как в обычном объекте:
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }; - но эелементы в массиве лежат по порядку и это значение,
//как бы и есть ключ!

//вывод элементов массива:
console.log(arr[0]);
console.log(arr[1]);

