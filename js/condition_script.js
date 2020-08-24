'use strict';

if(4 == '4'){
    console.log('Ok!');
}else{
    console.log('Error');
}

if(4 == 9){
    console.log('Ok!');
}else{
    console.log('Error');
}

const num = 50;

if (num<49) {
    console.log('Error');
}else if(num>100){
    console.log('Много');
}else{
    console.log('Ok!');
}

//Тернарный оператор
const num2 = 50;
(num2 === 50) ? console.log('Ok!') : console.log('Error');


//switch-case
//Эта конструкция идет на строгое сравнение!!!
//в параметре switch(num3) указываем то что проверяем.
const num3 = 50;
switch (num3) {
    case 49: console.log('Неверно');
    break;
    case 100: console.log('Неверно');
    break;
    case 50: console.log('В точку!');
    break;
    default: console.log('Не в этот раз');
    break;
}

//Удалить последние цифры

let str = '1553';
console.log(Number(str.substring(0, str.length - 1))); //155
console.log(Number(str.substring(0, str.length - 2))); //15
console.log(Number(str.substring(0, str.length - 3))); //1

console.log(1553 / 10 | 0); //155
console.log(1553 / 100 | 0); //15
console.log(1553 / 1000 | 0); //1

//Обрезание массива
//С НАЧАЛА
//1-й вариант
let array = [0,1,2,3,4,5,6,7,8,9];
array.length = 4;
console.log(array); //[ 0, 1, 2, 3 ]

//2-й вариант
let array2 = [0,1,2,3,4,5,6,7,8,9];
array2 = array2.slice(0,4);
console.log(array2); //[ 0, 1, 2, 3 ]

//С КОНЦА
let array3 = [0,1,2,3,4,5,6,7,8,9];
console.log(array3.slice(-1)); //[ 9 ]
console.log(array3.slice(-2)); //[ 8, 9 ]
console.log(array3.slice(-3)); //[ 7, 8, 9 ]
console.log(array3.slice(-4)); //[ 6, 7, 8, 9 ]
