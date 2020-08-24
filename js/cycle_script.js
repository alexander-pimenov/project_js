"use strict";

//выбираем тип let, т.к. переменная меняться
//переменная меняться или нет.
let num = 50;

//Циклы
//while - пока это выполняется, это делается
while (num <= 55){
    console.log(num);
    num++;
}

//do - while
let num2 = 50;
do{
    console.log(num2);
    num2++;
}
while (num2 < 55);

//for
let num3 = 50;
for (let i = 1; i < 8; i++){
    console.log(i);
    console.log(num3);
    num3++;
}

//for + breake
//breake - прерывает цикл на этом этапе
let num4 = 50;
for (let i = 1; i < 8; i++){
    console.log(i);
    //проверка если i=6
    if (i===6){
        console.log("Выход из цикла по команде breake");
        break;
    }
    console.log(num4);
    num4++;
}

//for + continue
//continue - шагает на шаг вперед в цикле
let num5 = 50;
for (let i = 1; i < 8; i++){
    console.log(i);
    //проверка если i=6
    if (i===6){
        console.log("Перешагивание одной итерации в цикле по команде continue");
        continue;
    }
    console.log(num5);
    num5++;
}
