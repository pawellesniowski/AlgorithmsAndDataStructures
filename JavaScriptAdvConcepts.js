// Iterables
// Objects are not iterables by design,
//  to iterate them we add method Symbol.iterator
// let range = {
//     from: 0,
//     to: 25
// };
// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,
//         next() {
//             if (this.current <= this.last) {
//                 return {
//                     done: false,
//                     value: this.current++,
//                 }
//             }
//             return { done: true }
//         }
//     }
// }
// const myArr = Array.from(range);
// console.log('myArr: ', myArr);
// const myObjIterator = range[Symbol.iterator]();
// console.log(myObjIterator.next().value);
// console.log(myObjIterator.next().value);
// console.log(myObjIterator.next().value);
// console.log(myObjIterator.next().value);
// console.log(myObjIterator.next().value);


// Calling an iterator explicitly, instead for of loop
// let myString = 'Hello world';
// let iterator = myString[Symbol.iterator]()

// while (true) {
//     const { done, value } = iterator.next();
//     if (done) break;
//     console.log(value);
// }

// // Generator functions:
// function* myGeneratorFn() {
//     console.log('start');
//     yield 1;
//     console.log('after first yield');
//     yield 2;
//     console.log('after sec yield');
//     yield 3;
//     console.log('after third yield');
//     console.log('after third yield 22');
// }

// console.log("bang: ", Array.from(myGeneratorFn()));

// We can use generator function for iteration by providing it as Symbol.iterotor
// let range2 = {
//     from: 1,
//     to: 5,
//     *[Symbol.iterator]() {
//         for (let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// }
// const range2GeneratorObject = range2[Symbol.iterator]();


// generators composition:
// function* innerGenerator(i) {
//     for (let j = i; j < i + 1; j = j + 0.1) yield j.toFixed(1);
// }

// function* streamOfNumbers(start, end) {
//     for (let i = start; i <= end; i++) yield* innerGenerator(i);
// }
// const streamOfNumbers1 = streamOfNumbers(1, 5);

// for (let i of streamOfNumbers(1, 4)) {
//     console.log('iteration: ', i);
// }

// twa way comunication with generator function:
// function* twoWayFunction() {
//     let answer = yield "questiorn: Waht is 1+1?"
//     yield answer ? `the answer is: ${answer}` : "brak odpowiedzi";
//     yield answer;
// }

// const generator = twoWayFunction();
// console.log(generator.next());
// console.log(generator.next(2));
// setTimeout(() => console.log(generator.next()), 1000)

// async iterators and generators
// regular iterable object looks like this:
// const range3 = {
//     from: 1,
//     to: 10,
//     [Symbol.iterator]() {
//         return { // returns iterator object
//             current: this.from,
//             last: this.to,
//             next() {
//                 if (this.current <= this.last) {
//                     return {
//                         done: false,
//                         value: this.current++,
//                     }
//                 }
//                 return {
//                     done: true,
//                 }
//             }
//         }
//     }
// }
// for (let value of range3) {
//     console.log(value);
// }

// IN ORDER TO MAKE OBJECT ITERABLE ASYNCHRONOUSLY
// 1. USE Symblol.asynIterator
// 2. next() should be async function and return promise
// 3. iterateing requires use for await(let itenm of myIterableObj){...} 
// const range = {
//     from: 1,
//     to: 10,
//     [Symbol.asyncIterator]() {
//         return { // returns iterator object
//             current: this.from,
//             last: this.to,
//             async next() {
//                 await new Promise(resolve => setTimeout(resolve, 1000))
//                 // it is waiting 1 second before going to return anything:
//                 //...
//                 if (this.current <= this.last) return { done: false, value: this.current++ }
//                 return { done: true }
//             }
//         }
//     }
// };

// (async () => {
//     for await (let value of range) {
//         console.log(value);
//     }
// })();

// async function return promises by design
// async function rob() { 
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return 1;
// };
// const aa = rob();
// aa.then((v) => console.log('o ja piernicze!', v))

// ASYNC GENERATORS
// make thi function generate one number a second:
// async function* myGenerator() {
//     for (let i = 1; i <= 3; i++) {
//         await new Promise(resolve => setTimeout(resolve, 1200));
//         yield i;
//     }
// };
// const output = myGenerator().next();
// (async () => {
//     for await (let i of myGenerator()) {
//         console.log(i);
//     }
// })();


// Async iterables
// to make object iterable we can return object with next method on it, OR return generator (we get it when call generator function*)
// example one: 
// function returning iterator (object with next() on it);
// const objWithIterator = {
//     from: 1,
//     to: 3,
//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,
//             next() {
//                 if (this.current <= this.last) {
//                     return {
//                         value: this.current++,
//                         done: false,
//                     }
//                 }
//                 return { done: true };
//             }
//         }
//     }
// };
// for (let num of objWithIterator) {
//     console.log(num)
// }
// example two
// returning generator from generator function on the object:
// const objWithGenerator = {
//     from: 6,
//     to: 9,
//     *[Symbol.iterator]() {
//         for (let i = this.from; i <= this.to; i++) {
//             yield i;
//         }
//     }
// }
// for (let num of objWithGenerator) {
//     console.log(num)
// }
// example 3,
// async generator, we add async key work and like for async generators we use Symbol.asyncIterator
// const objWithAsyncGenerator = {
//     from: 6,
//     to: 9,
//     async *[Symbol.asyncIterator]() {
//         for (let i = this.from; i <= this.to; i++) {
//             await new Promise(resolve => setTimeout(resolve, 1000))
//             yield i;
//         }
//     }
// };
// (async () => {
//     for await (let i of objWithAsyncGenerator) {
//         console.log(i);
//     }
// })();

// home work create function to fetch commits in chanks:
