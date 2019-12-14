"use strict";

// 5. Populate MATRIX spin. 
function createMatrix(n) {
    return Array.from({ length: n }, () => new Array(n).fill(null))
}
function populateMatrixSpin(n) {
    const matrix = createMatrix(n);
    let itemsTotal = n * n;
    let itemsPending = 0;

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    let m = 0;

    console.log('itemsPending >= itemsTotal', itemsPending, itemsTotal)
    while (true) {
        if (itemsPending >= itemsTotal) {
            return matrix;
        }
        for (let i = startColumn; i <= endColumn; i++) {
            if (itemsPending >= itemsTotal) {
                return matrix;
            }
            matrix[startRow][i] = counter;
            counter++;
            itemsPending++;
        };
        startRow++;
        if (itemsPending >= itemsTotal) {
            return matrix;
        }
        for (let i = startRow; i <= endRow; i++) {
            if (itemsPending >= itemsTotal) {
                return matrix;
            }
            matrix[i][endColumn] = counter;
            counter++
            itemsPending++;
        };
        endColumn--
        if (itemsPending >= itemsTotal) {
            return matrix;
        }
        for (let i = endColumn; i >= startColumn; i--) {
            if (itemsPending >= itemsTotal) {
                return matrix;
            }
            matrix[endRow][i] = counter;
            counter++;
            itemsPending++;
        }
        endRow--;
        if (itemsPending >= itemsTotal) {
            return matrix;
        }
        for (let i = endRow; i >= startRow; i--) {
            if (itemsPending >= itemsTotal) {
                return matrix;
            }
            matrix[i][startColumn] = counter;
            counter++
            itemsPending++;
        }
        startColumn++;

    }

}

console.log(populateMatrixSpin(5))



//
// 4. Check if strings are anagrams
// Has string A the same chracters (dont care about non alphabetical characters) + numbers as has sting B ? (Anagram).
// Does given string have any repeated characters in it ?
// helper function:
function addToMap(str, map) {
    for (let char of str) {
        map[char] = map[char] + 1 || 1;
    }
}
// helper function:
function compareMaps(mapA, mapB) {
    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
        return false;
    }
    for (let prop in mapA) {
        if (mapA[prop] !== mapB[prop]) {
            return false;
        }
    }
    return true;
}
function removeNonAlphabetical(characters) {
    const re = /[^\w+]/g;
    const letters = characters.replace(re, '');
    return letters;
}

// main function, starts here:
function defineIfAnagram(A, B) {
    if (A == B) {
        return true;
    }
    const mapA = {};
    const mapB = {};
    // get rid of non alphabetical characters:
    const strA = removeNonAlphabetical(A).toLowerCase();
    const strB = removeNonAlphabetical(B).toLowerCase();
    addToMap(strA, mapA);
    addToMap(strB, mapB);
    return compareMaps(mapA, mapB);
}
// console.log(defineIfAnagram("rail! safety!@ ^", "fairy tales"));
//

// 3. Reverse Integer 
// 51 -> 15
// -987 -> -789
// -1 -> -1
function reverseInteger(num) {
    const sign = Math.sign(num);
    return parseInt((sign * num + '').split('').reverse().join('')) * sign;
}
// console.log(reverseInteger(-15));


// 2.2. Palindromes with every function
function isPalindrome2(str) {
    function compareChar(element, index, arr) {
        return element == arr[arr.length - 1 - index]
    }
    return str.split('').every(compareChar)
}
// console.log(isPalindrome2('bb'));
//
// 2.1 Palindromes with for of loop
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
