"use strict";

//
// 0. Fiz buzz to warm up.
function fizBazz(number) {
    if (typeof number !== "number" || Object.is(number, NaN)) {
        console.log("This is not a numeric value.");
        return false;
    }
    if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
    return true;
}
// fizBazz();

//
// 1.1 Reverse a string - recursively.
function reverseString(str) {
    if (typeof str == "string") {
        let reversed = "";
        function reverse(str) {
            if (str.length == 0) {
                return;
            }
            reversed += str.slice(-1);
            reverse(str.slice(0, str.length - 1));
        }
        reverse(str);
        console.log("reversed: ", reversed);
        return reversed;
    } else {
        console.log("Argument is not a string");
        return false;
    }
}
// reverseString("apple");

//
// 1.2. Reverse string with for of loop.
function reverseStringLoop(str) {
    let reversed = "";
    for (let letter of str) {
        reversed = letter + reversed;
    }
    console.log("reversed: ", reversed);
    return reversed;
}
// reverseStringLoop("banana");

//
// 1.3. Reverse string with reduce.
function reverseStringWithReduce(str) {
    const reversedArr = str.split("").reduce((acc, char) => {
        acc = char + acc;
        return acc;
    }, "");
    console.log(reversedArr);
}
// reverseStringWithReduce("Orange");


//
// 2.2 Palindromes with for of loop
function isPalindrome(str) {
    if (typeof str !== 'string') {
        return 'not a string';
    }
    const toReverse = str.toLowerCase();
    let reversed = '';
    for (let char of toReverse) {
        reversed = char + reversed;
    }
    console.log(reversed);
    return reversed == toReverse;
}
// console.log(isPalindrome('Appa'));

//
// 2.2. Palindromes with every function
function isPalindrome2(str) {
    function compareChar(element, index, arr) {
        return element == arr[arr.length - 1 - index]
    }
    return str.split('').every(compareChar)
}
console.log(isPalindrome2('bb'));

