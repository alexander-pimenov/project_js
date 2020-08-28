/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. 
Если стоит в позиции false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза 
отвечать на вопрос "Ваш любимый жанр под номером ${номер по порядку}". 
Каждый ответ записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код берем из предыдущего домашнего задания
//Теперь это переменная объявленная глобально и в функции
//start() будем ее менять.
let numberOfFilms;

//создадим функцию и поместим в нее инициализирующий вопрос, с которого
//начинаем нашу программу и добавим проверку
//+prompt() - превращает строку в числовой тип данных
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    //будем использовать цикл для проверки.
    //пока пользователь вводит пустую строку, т.е. просто жмет ОК без
    //ввода данных или ОТМЕНА (null) или ввел НЕ ЧИСЛО, то повторяем
    //вопрос пользователю
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

//вызовем функцию start()
start();

//Своеобразная база данных
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], //массив
    privat: false //true
};

//цикл for() из task_2 хотим вызывать по требованию, поэтому 
//создадим функцию, которая будет его оборачивать
function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        //Проверка на то, что пользователь не нажал кнопку ОТМЕНА
        //т.е. в переменную 'a' не попадает значение null
        //и 'b' тоже не null, и в 'a' не сохранили пустую строку '',
        //и в 'b' тоже не сохранили пустую строку
        //и длина названия фильма не более 50 символов
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
            //если всё ввел пользователь верно, то данные сохраняем в базу
            personalMovieDB.movies[a] = b;
            //и в консоль выведем 'done', т.е. выполнилось всё правильно
            console.log('Done');
        } else {
            console.log('Error');
            //Если условие не выполнилось, то нам нужно вернуться на одно повторение назад
            //то воспользуемся оператором декремента
            //т.е. зададим снова вопросы пользователю
            i--;
        }
    }
}

//вызовем функцию
rememberMyFilms();

//также создадим функцию обернув задание из task_2
//определяющее уровень просмотренности фильмов
function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else {
        //Если пользователь нажмет ОК, или ОТМЕНА то в ответ попадет 0,
        //А если ввести буквы вместо цифр, то получим сообщение об ошибке.
        console.log("Произошла ошибка");
    }
}

//вызываем функцию
detectPersonalLevel();

//создадим ф-цию showMyDB()
//передадим в аргумент некоторую переменную hidden
//она будет равнна personalMovieDB.privat:false
//т.е. если наша БД не скрыта, т.е. не privat:true, то
//покажем ее в консоли
function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

//3 задание
function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //то что пользователь ответил, запишем в БД
        //запись в массив genres[] по индексу с 0
        personalMovieDB.genres[i - 1] = genre;
        //или можно записать в одну строку:
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();