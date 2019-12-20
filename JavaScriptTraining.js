'use strict';

"20.12.2019"
// simulate servers response with Promises:
const serverDataResponse = () => ({
    data: [{ name: "Pawel" }, { name: "Ania" }, { name: "Adam" }, { name: "Lilia" }],
})

const fetchMock = (time) => new Promise((resolve, reject) => {
    if (Math.random() > 0.1) {
        setTimeout(resolve, time, serverDataResponse()); // third paramiter to settimeout is paramiter passed to resolve. you can use alse () => resolve(serverDataResponse()) as a first paramiter, ommiting third
    } else {
        setTimeout(() => reject({ 'Server error: ': 404 }), 500);
    }
})
fetchMock(2000)
    .then(r => {
        return r;
    })
    .then((d) => console.log('data: ', d))
    .catch(e => console.log(e));



// function executeWhenPromiseResolved() {
//     console.log("time is up");
// }
// // Promises:
// const wait = (time) => new Promise(resolve => {
//     setTimeout(() => resolve({ data: [] }), time);
// });
// wait(3000)
//     .then(executeWhenPromiseResolved)
//     .catch((e) => console.log(e))


"19.12.2019"
// Promisses
// function onSuccess(v) {
//     console.log(v, "this was a great success");
// }
// function onFail() {
//     console.log("this was epic fail ;-(");
// }
// new Promise((resolve, reject) => {
//     // if (false) {
//     setTimeout(() => {
//         resolve("OK");
//     }, 1000)
//     // }
//     // reject('Rejected !!');
// }).then(onSuccess, onFail).then(() => console.log("I am done"));
// myPromise.then(onSuccess, onFail);

"18.12.2019"
// 1.5. Static methods in the class.  
//  Static methods are called without instantiating their class and cannot be called through a class instance.
//  Static methods are often used to create utility functions for an application.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance; //undefined
p2.distance; //undefined
// console.log(Point.distance({ x: 2, y: 2 }, { x: 2, y: 4 }));
//

//
// 1.4. Abstract classes:
// TypeScript allows us to define an abstract class using keyword abstract.
// Abstract classes are mainly for inheritance where other classes may derive from them. 
// We cannot create an instance of an abstract class.
//

//
// 1.3. Extending classes
class Animal {
    vaira;
    gara;
    constructor(legsNumber) {
        this.legs = legsNumber
        this.vaira = 'cp 90';
        this.gara = 'cxxxx40';
    }
    legsCount() {
        console.log('I have ', this.legs, 'legs');
    }
    eat() {
        console.log('All animals eat...');
    }
    sleep() {
        console.log('All animals sleep');
    }
}
class Byrd extends Animal {
    constructor(legsNo) {
        super(legsNo)
    }
    fly() {
        console.log('I am flying Animal');
    }
}
// const myByrd = new Byrd(2);
// console.log('myByrd: ', myByrd);
// myByrd.fly()
// myByrd.eat()
// myByrd.sleep()
// myByrd.legsCount()
//

// 1.2. Class expression:
var Foo = class Home { }
const myHome = new Foo;
//


// 1.1. Class statement (declaration):
// Classes setters ang getters:
class Car {
    // class body is executed in strict mode
    constructor() {
        this.currentSpeed = 0;
    }
    console() {
        // name of the class is 
        console.log('Hello class', Car.name);
    }
    get speed() {
        console.log("current speed is", this.currentSpeed)
    }
    set speed(value) {
        console.log("spped set to ", value);
        this.currentSpeed = value;
    }
}
const myCar = new Car();
// myCar.speed
// myCar.speed = 10;
// myCar.speed
// myCar.speed = 11;
// myCar.speed
// myCar.console()
//