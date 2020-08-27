"use strict";
/**
 * Методы и свойства у строк и чисел.
 * Методы - это вспомогательные функции,
 * а свойства - это вспомогательные значения.
 * 
 * Свойства пишутся через точку.
 * Методы будут вызываться при помощи круглых скобок.
 * https://learn.javascript.ru/string
 * https://learn.javascript.ru/number
 */

//свойство строки - её длина
const str = "test";
console.log(str.length);
//Можем посмотреть символ строки по его индексу в строке:
console.log(str[2]); //s

//свойство массива - кол-во элементов в нем
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); //5

//Метод изменения регистра:
const str2 = "TesT2";
console.log(str2.toLocaleUpperCase()); //TEST2
console.log(str2.toLocaleLowerCase()); //test2
console.log(str2); //TesT2 - ЫTRING НЕ ИЗМЕНЯЕМЫЙ!!!

//Поиск подстроки
const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //индекс начала этой подстроки 5
console.log(fruit.indexOf("q")); //-1 говорит о том, что нет такого символа здесь

//slice() - метод с помощью которого возвращаем часть строки:
//два аргумента: start - начало, finish - конец, но не включая его
const logg = "Hello world!";
console.log(logg.slice(1, 6)); //вернул - ello
console.log(logg.slice(6, 10)); //worl
console.log(logg.slice(6)); //получили строку до конца - world!

//slice() - поддерживает отрицательные параметры, т.е. считаем
//позицию сппава:
const logg2 = "Hello my world!";
console.log(logg2.slice(-5, -1)); //orld

//substring() - метод похож на метод slice()
//два аргумента: start - начало, finish - конец, но не включая его
//но substring() не поддерживает отрицательные значения
const logg3 = "Hello my diar world!";
console.log(logg3.substr(2, 5)); //llo m
console.log(logg3.substr()); //Hello my diar world!

//substr() - метод возвращающий часть строки
//два аргумента: start - начало, length - сколько символов вырезать
const logg4 = "Hello my love world!";
console.log(logg4.substr(1, 8));

//Примеры работы с числами
//метод Math
const num = 12.2;
//Округление
console.log(Math.round(num));