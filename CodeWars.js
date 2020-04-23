// Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
    const str = String(integer);
    let sum = 0;
    for (let char of str) {
        sum += +char;
    }
    return sum;
}

console.log(getSumOfDigits(123));
