"use strict";

function isPalindrome(numberAsString){
    let characters = numberAsString.split('');
    let isPalindrome = true;

    for (let index = 0; index < characters.length; index++){
        const element = characters[index];

        if (element !== characters[characters.length - 1 - index]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

// console.log(isPalindrome("123")); //false
console.log(isPalindrome("111")); //true