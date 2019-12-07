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
reverseStringLoop("banana");
