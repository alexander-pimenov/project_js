"use strict";

//конкатенация
console.log('arr' + " - object");
console.log(5 + " - object");

//А если ипользовать динамическое приведение типа к числу, то
//получим 9
console.log(5 + +"4");

//Инкремент и декремент
let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

//постфиксная запись
let incr2 = 10,
    decr2 = 10;

console.log(incr2++);
console.log(decr2--);

//префиксная запись
let incr3 = 10,
    decr3 = 10;

console.log(++incr3);
console.log(--decr3);

//деление с остатком
console.log(5%2);

//сравниваем == по значению
console.log(2*4 == 8);
console.log(2*4 == '8');

//Строое сравнение
//сравниваем === по типу данных и по значению
console.log(2*4 === 8);
console.log(2*4 === '8');

//Логические операторы И (&&) и ИЛИ (||)
const isChecked = true,
        isClose = false;

console.log(isChecked && isClose);

//Логические операторы И (&&) и ИЛИ (||)
const isChecked2 = true,
        isClose2 = true;

console.log(isChecked2 || isClose2);

//Оператор отрицания
const isChecked3 = false,
        isClose3 = false;

console.log(isChecked3 || !isClose3);

console.log(2 + 2 * 2 != 8);

console.log(2 + 2 * 2 !== '6');
