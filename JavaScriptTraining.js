'use strict';

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