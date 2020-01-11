
// 'this' key word with lambda functions
var bunny = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function () {
        console.log('outer this: ', this);
        this.tasks.forEach(function (task) {
            console.log('inner this: ', this)
            // console.log(this.name + " wants to " + task);
        }.bind(this));
    }
};
bunny.showTasks();

// var bunny = {
//     name: 'Usagi',
//     showName: () => {
//         console.log("simple test", this.name);
//     }
// };

// bunny.showName(); // Usagi

const store = {
    state: {
        todos: [
            { id: 1, text: '...', done: false },
            { id: 2, text: '...', done: false },
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            console.log(this)
            return this.getters.doneTodos.length
        }
    }
}
console.log(store.getters.doneTodosCount())

"04.01.2020"
// Ephemeron - https://www.diki.pl/slownik-angielskiego?q=ephemeron
// An ephemeron is a data structure that solves two related problems in garbage collected systems.
// On the one hand, an ephemeron provides a notification when some object is about to be collected.
// On the other hand, an ephemeron allows data to be associated with some object without creating a reference to that object that will prevent the object from being collected. 
// An ephemeron is a key-value pair, where the key is the object that the ephemeron guards, notifying the system when that object is collectable, and the value can be any data associated with the object such as a property list, and which may be empty.


// Garbage collection:
// Garbage collection is essentially the opposite of manual memory management.
// Garbage collection frees the programmer from manually dealing with memory deallocation.

"03.01.2020"
// Hoisting:
var fruit = 'grapes';
var food = function () {
    console.log("original fruit: ", fruit);
    var fruit = 'sushi';
    console.log("My food: ", fruit);
}
// food();

// a();
function a() {
    console.log('1')
}
function a() {
    console.log('2')
}


"02.01.2020"
// Object.defineProperty
const obj0201 = {};
Object.defineProperty(obj0201, 'myProperty', { value: 43 });
// Decorators:
// composition:
function doSomething(name) {
    console.log('hello, ', name);
    return 666;
}
function loggingDecorator(wrapped) {
    return function () {
        console.log('Starting Logging');
        const result = wrapped.apply(this, arguments);
        console.log('Finished logging');
        return result;
    }
}
const wrapped = loggingDecorator(doSomething);
// const result = wrapped('Pawel');

'use strict';
function say(name) {
    console.log("My name is", name)
}
function sayMyName() {
    say.apply(null, arguments);
}
// sayMyName('Pawel')



"31.12.2019"
// Dependency Injection
// injcetor implementation: 
var injector = {
    dependencies: {},
    register: function (key, value) {
        this.dependencies[key] = value;
    },
    resolve: function (deps, func, scope) {
        //...
    }
}

// 1.3. Setter Injection:
// 1.2. First way Constructor Injection:
// class EmailService {
//     send(title, message) {
//         console.log('Sending mail...', title, message)
//     }
// }
// class App {
//     static $inject = ['EmailService'];
//     constructor(emailService) {
//         this.emailService = emailService;
//     }
//     sendEmail(title, message) {
//         this.emailService.send(title, message);
//     }
// }
// const emailService = new EmailService()
// const myApp = new App(emailService);
// myApp.sendEmail("ping", "pong");

// 1.1. WRONG way:
// class EmailService {
//     send(title, message) {
//         console.log('Sending mail...', title, message)
//     }
// }
// class App {
//     constructor() {
//         this.emailService = new EmailService();
//     }
//     sendEmail(title, message) {
//         this.emailService.send(title, message);
//     }

// }
// const app = new App();
// app.sendEmail('Dear boss', 'This is my work submission');



"20.12.2019"
// Promises: Composition
//...

// Promises: Promise.resolve(value) and Promise.reject() are shortcuts to manually create  an alredy resolved ar rejected promise. 

// const myResolvedPromise = Promise.resolve('Success')
// myResolvedPromise.then((v) => v + '!').then(v2 => console.log(v2))

// const pr1 = Promise.resolve(Promise.resolve(Promise.resolve(21)));
// const pr2 = pr1.then(v => console.log(v));

// console.log(pr1, pr2)


// Promises: simulate servers response with Promises:
// const serverDataResponse = () => ({
//     data: [{ name: "Pawel" }, { name: "Ania" }, { name: "Adam" }, { name: "Lilia" }],
// })
// const fetchMock = (time) => new Promise((resolve, reject) => {
//     if (Math.random() > 0.1) {
//         setTimeout(resolve, time, serverDataResponse()); // third paramiter to settimeout is paramiter passed to resolve. you can use alse () => resolve(serverDataResponse()) as a first paramiter, ommiting third
//     } else {
//         setTimeout(() => reject({ 'Server error: ': 404 }), 500);
//     }
// })
// fetchMock(2000)
//     .then(r => {
//         return r;
//     })
//     .then((d) => console.log('data: ', d))
//     .catch(e => console.log(e));



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