// Fiz buzz to warm up.
function fizBazz(number) {
    if (typeof number !== 'number' || Object.is(number, NaN)) {
        console.log('This is not a numeric value.')
        return false;
    }
    if (number % 3 == 0) {
        console.log('Fizz')
    } else if (number % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(number);
    }
    return true;
}

fizBazz([]);

