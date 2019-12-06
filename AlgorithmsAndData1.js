// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5];
// function check(arr1, arr2) {
//   const commonElements = arr1.filter(el => !arr2.includes(el));
//   return commonElements.join(", ");
// }
// console.log(check(arr1, arr2));

// solution with object:
// const arr3 = ["a", "b", "c", "c", "c"];
// const arr4 = ["d", "e", "f", "f", "f", "a"];
// // to transform array to object which counts appiernce of elements
// function transformToObj(arr) {
//   const myObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (myObj[arr[i]] === undefined) {
//       myObj[arr[i]] = 1;
//     } else {
//       myObj[arr[i]]++;
//     }
//   }
//   return myObj;
// }
// function compareObjs(arr3, arr4) {
//   const obj3 = transformToObj(arr3); // O(a)
//   const obj34 = transformToObj([...arr3, ...arr4]); // O(b)
//   for (let property in obj3) {
//     if (obj3[property] !== obj34[property]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(compareObjs(arr3, arr4));

// Solution with table:
// const arr3 = ["a", "b", "c", "c", "c", NaN];
// const arr4 = ["d", "e", "f", "f", "f", NaN];
// function toObj(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = true;
//     }
//   }
//   return obj;
// }
// function compare(arr3, arr4) {
//   console.log("paramiters.length: ", arguments.length);
//   const obj = toObj(arr3);
//   for (let i = 0; i < arr4.length; i++) {
//     if (obj[arr4[i]]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(compare(arr3, arr4));

// Google interview, find if there is a sum of ...
// const arr = [1, 1, 1, 2, 2, 2];
// const number = 5;
// function checkSum(arr, number) {
//   const set = new Set();
//   const { length } = arr;
//   for (let i = 0; i < length; i++) {
//     if (set.has(arr[i])) {
//       return true;
//     }
//     set.add(number - arr[i]);
//   }
//   // we have set of values we are looking for in arr
//   return false;
// }
// console.log("output: ", checkSum(arr, number));

// For in loop checks for properties(not values) in object, can I loop array as well ??
// var person = { fname: "John", lname: "Doe", age: 25 };
// var numbersArr = [1, 2, 3, 4, 5];
// for (let x in numbersArr) {
//   console.log(x);
// }

// reference type:
// const obj1 = { value: 1 };
// const obj2 = { value: 1 };
// const obj3 = obj1;
// console.log(obj1 == obj3);

// functions are overwritten by variables.
// var a = 1;
// function a() {
//   let b = a;
//   console.log("b: ", b);
// }
// a();

// class Player {
//   constructor(name, type) {
//     console.log("this: ", this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`hi my name is ${this.name} I am a ${this.type}`);
//   }
// }
// const me = new Player("Pawel", "kapitan");
// console.log("Player class: ", Player);
// me.introduce();

// // mergeSortedArrays
// function mergeSortedArrays(arr1, arr2) {
//   const mergedArr = [];
//   let arr1FirtsEl = arr1[0];
//   let arr2FirtsEl = arr2[0];

//   let i = 1;
//   let j = 1;

//   if (arr1.length == 0) {
//     return arr2;
//   }

//   if (arr2.length == 0) {
//     return arr1;
//   }

//   while (arr1FirtsEl || arr2FirtsEl) {
//     console.log("arr1FirtsEl, arr2FirtsEl", arr1FirtsEl, arr2FirtsEl);
//     if (!arr2FirtsEl || arr1FirtsEl < arr2FirtsEl) {
//       mergedArr.push(arr1FirtsEl);
//       arr1FirtsEl = arr1[i];
//       i++;
//     } else {
//       mergedArr.push(arr2FirtsEl);
//       arr2FirtsEl = arr2[j];
//       j++;
//     }
//   }

//   return mergedArr;
// }

// console.log(mergeSortedArrays([1, 2, 3], [1, 2, 3]));

// -> Hash Table implememted in JavaScript:
// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }
//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     const hash = this._hash(key);
//     if (!this.data[hash]) {
//       this.data[hash] = [];
//     }
//     this.data[hash].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     const hash = this._hash(key);
//     const bucket = this.data[hash];
//     let values = [];
//     if (bucket) {
//       for (let i = 0; i < bucket.length; i++) {
//         if (bucket[i][0] === key) {
//           values.push(bucket[i][1]);
//         }
//       }
//       return values;
//     }
//     return undefined;
//   }

//   keys() {
//     const keys = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         for (let j = 0; j < this.data[i].length; j++) {
//           keys.push(this.data[i][j][0]);
//         }
//       }
//     }
//     return keys;
//   }
// }

// const shoppingBasket = new HashTable(100);

// shoppingBasket.set("pomidory", 10);
// shoppingBasket.set("pomidory", 11);
// shoppingBasket.set("pomidory", 112);
// console.log(shoppingBasket.get("pomidory"));
// console.log(shoppingBasket.data);
// console.log(shoppingBasket.keys());

// -> find first recurring element
// return 1;

// function findRecurringElementNaive(input) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

// console.log(findRecurringElementNaive(arr));
// const arr = [1, 2, 2, 1, 3]; // return 1
// function findRecurringElement(arr) {
//   const hashTable = {};
//   let i = 0;
//   for (i; i < arr.length; i++) {
//     if (hashTable[arr[i]] !== undefined) {
//       console.log("hashTable: ", hashTable);
//       return arr[i];
//     } else {
//       hashTable[arr[i]] = true;
//     }
//   }
//   return undefined;
// }
// console.log("OUTPUT: ", findRecurringElement(arr));

// -> Write own LinkedLIst ?
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = new Node(value);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   showList() {
//     const list = [];
//     let currentNode = this.head;
//     for (let i = 0; i < this.length; i++) {
//       list.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return { list, length: this.length };
//   }
//   traverseList(index) {
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
//   insert(index, value) {
//     if (index == 0) {
//       return this.prepend(value);
//     }
//     if (index >= this.length) {
//       return this.append(value);
//     }

//     let newNode = new Node(value);
//     let leader = this.traverseList(index - 1);
//     let follower = leader.next;

//     leader.next = newNode;
//     newNode.next = follower;
//     this.length++;
//     return this
//   }
//   remove(index) {
//     if (index <= 0) {
//       this.head = this.head.next;
//       this.length--;
//       return this;
//     }
//     if (index >= this.length) {
//       index = this.length - 1;
//     }
//     let lider = this.traverseList(index - 1);
//     let unwantedNode = lider.next;
//     lider.next = unwantedNode.next;
//     this.length--;
//     return this;
//   }
//   revert() {
//     if (!this.head.next) {
//       return this.head;
//     }

//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;
//     first.next = null;

//     while (second) {
//       const third = second.next;
//       second.next = first;

//       first = second;
//       second = third;
//     }
//     this.head = first;
//     return this;
//   }
// }


// -> Write own DOUBLE LinkedLIst ?
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoubleLinkList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
//   showList() {
//     let items = [];
//     let currentNode = this.head;
//     for (let i = 1; i <= this.length; i++) {
//       items.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return items;
//   }
//   append(value) {
//     let newNode = new Node(value);
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(value) {
//     let newNode = new Node(value);
//     newNode.next = this.head;
//     this.head.prev = newNode;
//     this.head = newNode;
//     this.length++;
//   }

//   traverse(index) {
//     // returns node of index:
//     let currentNode = this.head;
//     let counter = 0;
//     while (counter < index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }

//   insert(value, index) {
//     if (typeof index !== 'number') {
//       throw new Error('wrong index format');
//     }
//     if (index <= 0) {
//       return this.prepend(value)
//     }
//     if (index > this.length - 1) {
//       return this.append(value);
//     }

//     let leader = this.traverse(index - 1);
//     let fallower = leader.next;

//     const newNode = new Node(value);

//     leader.next = newNode;
//     newNode.prev = leader;

//     newNode.next = fallower;
//     fallower.prev = newNode;

//     this.length++;
//   }

//   delete(index) {

//   }



// }
// let myDoubleLinkedList = new DoubleLinkList('a');
// myDoubleLinkedList.append('b');
// myDoubleLinkedList.append('c');
// myDoubleLinkedList.prepend('-1');
// myDoubleLinkedList.prepend('-2');
// myDoubleLinkedList.insert('xxx', -5);
// console.log('myDoubleLinkedList: ', myDoubleLinkedList.showList());

// Stacks LIFO: Stack implementation with 
// class Stack {
//   constructor(value) {
//     this.top = null;
//     this.bottom = null;
//     this.length = null
//   }
//   push(value) {

//   }
//   peek() {

//   }

//   pop() {

//   }
// }
// Queues FIFO: implement with methods: lookup, enqueue, dequque, peek
// why not to use array for queues - becouse of reindexing, so it is better use linked list.

// create tree:
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class Tree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;

//     } else {
//       let currentNode = this.root;
//       while (true) {
//         // rememeber to break out of loop by adding break or return.
//         if (value < currentNode.value) {
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this; // to stop looping;
//           } else {
//             currentNode = currentNode.left;
//           }
//         } else {
//           if (!currentNode.right) {
//             currentNode.right = newNode;
//             return this; //to stop looping;
//           } else {
//             currentNode = currentNode.right;
//           }
//         }
//       }
//     }
//     return this;
//   }
//   lookup(value) {
//     // check if item exists in a three. return true or false;
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root
//     while (currentNode) {
//       if (currentNode.value == value) {
//         return true;
//       } else {
//         if (value < currentNode.value) {
//           currentNode = currentNode.left;
//         } else {
//           currentNode = currentNode.right;
//         }
//       }

//     }
//     return false;
//   }
//   remove(value) {

//   }
// }

// const myTree = new Tree;
// myTree.insert(10);
// myTree.insert(5);
// myTree.insert(15);
// myTree.insert(25);
// myTree.insert(3);
// myTree.insert(11);
// myTree.insert(2);
// console.log("bang: ", myTree.lookup(1));
// console.log(JSON.stringify(myTree));

// -> implement graph:
// class Graph {
//   constructor() {
//     this.numberOfNodes = 0;
//     this.adjacentList = {
//       // 0: [1,3] // node zero has connection to 1 and 3
//     }
//   }
//   addVertex(node) {
//     this.adjacentList[node] = [];
//     this.numberOfNodes++;
//     return this.adjacentList;
//   }
//   addEdge(node1, node2) {
//     this.adjacentList[node1].push(node2)
//     this.adjacentList[node2].push(node1)
//     return this.adjacentList;
//   }
//   showConnections() {
//     const allNodes = Object.keys(this.adjacentList);
//     for (let node of allNodes) {
//       let nodeConnections = this.adjacentList[node];
//       let connections = "";
//       let vertex;
//       for (vertex of nodeConnections) {
//         connections += vertex + " ";
//       }
//       console.log(node + "-->" + connections);
//     }
//   }
// }

// const myGraph = new Graph();
// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1');
// myGraph.addEdge('3', '4');
// myGraph.addEdge('4', '2');
// myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '2');
// myGraph.addEdge('1', '0');
// myGraph.addEdge('0', '2');
// myGraph.addEdge('6', '5');
// myGraph.showConnections(); 


// Recursion
// function factorialRecursive(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorialRecursive(n - 1)

// }
// factorialRecursive(1);
// console.log(factorialRecursive(5));

// fibenachi
// function fib(n) {
//   // fibenach numbers are sum of two previous
//   if (n === 1) {
//     return 1
//   } else if (n === 2) {
//     return 1
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4))


// bubble sort:
// const arrayToSort = [53, 0, 345, 345, 345, 345, 345, 345323, 423, 2, 1241, 1235, 6, 7, 8, 5, 3];
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// Selection Sort
// find smallest
// 
// repeat 

// const selectionSort = (arr) => {
//   const length = arr.length;
//   let minVal;
//   let minValIndex;
//   for (let i = 0; i < length; i++) {
//     minVal = arr[i];
//     minValIndex = i;
//     for (let j = i; j < length; j++) {
//       if (minVal > arr[j]) {
//         minVal = arr[j];
//         minValIndex = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = minVal;
//     arr[minValIndex] = temp;

//   }
//   return arr;
// }
// console.log(selectionSort(arrayToSort));



const arrayToSort = [200, 3, 4, 0, 1, 100, 7];

// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[0]) {
//       arr.unshift(arr.splice(i, 1)[0]);
//     } else {
//       let checkedIndex = i;
//       while (arr[i] < arr[checkedIndex - 1]) {
//         checkedIndex--;
//       }
//       arr.splice(checkedIndex, 0, arr.splice(i, 1)[0]);
//     }
//   }
//   return arr;
// }

// console.log(insertionSort(arrayToSort));

// const arr1 = [[1, 2, 3, 4, 5, 6, 76], 2, 54, 5, 6, 7, 6, 4, 4, 3, 3, 23, 3, 5, 66, 7];

// function chanks(arr, size) {
//   const newArr = [];
//   while (arr.length > size - 1) {
//     newArr.push([...arr.splice(0, 5)]);
//     console.log("orginal arr: ", arr);
//   }
//   if (arr.length > 0) {
//     newArr.push(arr);
//   }
//   console.log(newArr);
// }
// chanks(arr1, 5)
// const mAr = [200, 3, 4, 0, 1, 100, 7];
// const newAr = [...mAr].reverse()
// console.log(mAr);
// console.log(newAr);


// BST Binary Search Tree
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.rightChild = null;
//     this.leftChild = null;
//   }
// }
// class BST {
//   constructor() {
//     this.root = null;
//   }
//   appent(value) {
//     if (this.root === null) {
//       this.root = new Node(value);
//       return this;
//     }
//     let parent = this.root;
//     while (parent) {
//       if (parent.value < value) {
//         if (parent.rightChild === null) {
//           parent.rightChild = new Node(value);
//           return this.root;
//         };
//         parent = parent.rightChild;
//       } else if (parent.value > value) {
//         if (parent.leftChild === null) {
//           parent.leftChild = new Node(value);
//           return this.root;
//         }
//         parent = parent.leftChild;
//       }
//     }
//   }
//   lookup(value) {
//     // return true if found
//     if (this.root === null) {
//       return false;
//     }
//     let parent = this.root;
//     while (parent !== null) {
//       if (parent.value === value) {
//         return true;
//       } else if (parent.value < value) {
//         if (parent.rightChild === null) {
//           return false;
//         } else {
//           parent = parent.rightChild;

//         }
//       } else {
//         if (parent.leftChild === null) {
//           return false;
//         } else {
//           parent = parent.leftChild;
//         }
//       }
//     }
//   }
//   remove(value) {
//     if (!this.lookup(value)) {
//       return false;
//     }

//   }
// }

// const myBST = new BST();
// myBST.appent(10);
// myBST.appent(5);
// myBST.appent(25);
// console.log(myBST.lookup(21))
// console.log(JSON.stringify(myBST));

// Number.prototype.add2 = function () {
//   console.log("this: ", this);
//   console.log("this: ", this.valueOf());
//   return this * 10;
// }

// var b = 2;

// var c = b.add2();
// console.log("c: ", c);

// var e = { number: 7 }
// console.log(e.valueOf());
// class Cat {
//   meth () {
//     console.log(this);
//   }
// }

// const myObj = new Cat();
// const meth2 = () => console.log(this);

// console.log(myObj.meth() === meth2());

// function Dog(name) {
//   this.name = name;
// }

// var fido = Dog('Fido');

// console.log(name); // 'Fido'

// const a1 = {
//   b: [2222],
//   c: [3, [1]],
//   a: { a: 223 },
// };
// const a2 = {
//   a: { a: 223 },
//   b: [2222],
//   c: [3, [1]],
// };

// function compareRec(o1, o2) {
//   console.log('o1, o2', o1, o2)
//   if (Object.keys(o1).length !== Object.keys(o2).length) {
//     return false;
//   }
//   if (Array.isArray(o1) !== Array.isArray(o2)) {
//     return false;
//   }
//   if (typeof o1 === 'object' && typeof o2 === 'object') {
//     for (let propertie in o1) {
//       if (typeof o1[propertie] !== 'object') {
//         if (o1[propertie] !== o2[propertie]) {
//           return false;
//         }
//       } else {
//         return compareRec(o1[propertie], o2[propertie]);
//       }
//     }
//   } else if (o1 !== o2) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(compareRec(a1, a2));


// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.bottom = null;
//     this.top = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     let newNode = new Node(value)
//     if (this.length == 0) {
//       this.top = newNode;
//       this.bottom = this.top;
//     } else {
//       let oldTop = this.top;
//       this.top = newNode;
//       this.top.next = oldTop
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (this.length === 0) {
//       return false;
//     }
//     if (this.top === this.bottom) {
//       this.top = null;
//       this.bottom = null;
//       this.length = 0;
//       return this;
//     }
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
// }
// const myStack = new Stack();
// myStack.push('Pawel');
// myStack.push('Ania');
// myStack.push('Lilia');
// myStack.push('Adam');
// console.log(myStack);
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack);

// BINARY SERCH TREE
// IMPLEMENT BREADTH FIRSTS SEARCH

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  appent(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    }
    let parent = this.root;
    while (parent) {

      if (parent.value < value) {
        if (parent.rightChild === null) {
          parent.rightChild = new Node(value);
          return this.root;
        };
        parent = parent.rightChild;
      } else if (parent.value > value) {
        if (parent.leftChild === null) {
          parent.leftChild = new Node(value);
          return this.root;
        }
        parent = parent.leftChild;
      }
    }
  }
  lookup(value) {
    // return true if found
    if (this.root === null) {
      return false;
    }
    let parent = this.root;
    while (parent !== null) {
      if (parent.value === value) {
        return true;
      } else if (parent.value < value) {
        if (parent.rightChild === null) {
          return false;
        } else {
          parent = parent.rightChild;

        }
      } else {
        if (parent.leftChild === null) {
          return false;
        } else {
          parent = parent.leftChild;
        }
      }
    }
  }
  remove(value) {
    if (!this.lookup(value)) {
      return false;
    }

  }
  breadthFirstSearch() {
    if (this.root === null) {
      return;
    }
    let currentNode = this.root;
    let list = []; // here goes values
    let queue = [];
    queue.push(currentNode)
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.leftChild) {
        queue.push(currentNode.leftChild);
      }
      if (currentNode.rightChild) {
        queue.push(currentNode.rightChild);
      }
    }
    return list;
  }
  breadthFirstSearchRecursive(queue = [this.root], list = []) {
    // 1. create base case. 
    if (this.root === null) {
      return;
    }

    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.leftChild !== null) {
      queue.push(currentNode.leftChild);
    }
    if (currentNode.rightChild !== null) {
      queue.push(currentNode.rightChild);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }
  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, [])
  }
  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, []);
  }
  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, []);
  }

  validateBST() {
    let currentNode = this.root;
    const queue = []
    queue.push(currentNode);

    while (queue.length > 0) {

      currentNode = queue.shift();

      if (currentNode.leftChild !== null && currentNode.value < currentNode.leftChild.value) {
        return false;
      }
      if (currentNode.rightChild.value !== null && currentNode.value > currentNode.rightChild.value) {
        return false;
      }

      if (currentNode.leftChild !== null) {
        queue.push(currentNode.leftChild);
      }
      if (currentNode.rightChild !== null) {
        queue.push(currentNode.rightChild);
      }


    }
    return true;
  } // end

}

function traverseInOrder(node, list) {
  if (node.leftChild) {
    traverseInOrder(node.leftChild, list);
  }
  list.push(node.value);
  if (node.rightChild) {
    traverseInOrder(node.rightChild, list);
  }
  return list;
}
function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.leftChild) {
    traversePreOrder(node.leftChild, list);
  }
  if (node.rightChild) {
    traversePreOrder(node.rightChild, list);
  }
  return list;
}
function traversePostOrder(node, list) {
  if (node.leftChild) {
    traversePostOrder(node.leftChild, list);
  }
  if (node.rightChild) {
    traversePostOrder(node.rightChild, list);
  }
  list.push(node.value);
  return list;
}



const myBST = new BST();
myBST.appent(10);
myBST.appent(5);
myBST.appent(15);
// myBST.appent(25);
// myBST.appent(33);
// myBST.appent(1);
// console.log("myBST.validateBST(): ", myBST.validateBST());

// console.log('myBST', myBST);

// FACTORIAL n! = 1 * 2 * 3 * ... * n , minimum 1.

class Factorial {
  constructor() {
    this.cash = {};
  }
  factorialRecursive(number) {
    if (number < 1) {
      return 1;
    }
    if (this.cash[number]) {
      return this.cash[number]
    }
    this.cash[number] = number * this.factorialRecursive(number - 1);
    return this.cash[number]; // O (n)
  }
}

const myFaktorial = new Factorial();
// console.log("myFaktorial: ", myFaktorial.factorialRecursive(3));

const cash = { '1': 1, '2': 2 };
function factorialIterative(number) {
  if (cash[number]) {
    return cash[number];
  }
  for (let i = 3; i <= number; i++) { // O (n)
    cash[i] = i * cash[i - 1];
  }
  return cash[number];
}
// console.log(factorialIterative(5));


// Fibennaci sequence: 0, 1, 1, 2, 3, 4, 5, 8, 13, 21, 34, 55 ....
class Fibenachi {
  constructor() {
    this.cash = [0, 1];
  }
  fibenachiIterable(index) {
    if (this.cash[index]) {
      return this.cash[index];
    }
    for (let i = this.cash.length; i < index + 1; i++) {
      this.cash.push(this.cash[i - 2] + this.cash[i - 1]);
    }
    console.log('this.cash: ', this.cash);
    return this.cash[index];
  }
}
const fib = new Fibenachi();

// console.log(fib.fibenachiIterable(6))
// console.log(fib.fibenachiIterable(7))
// console.log(fib.fibenachiIterable(8))


function fibenachiReqursive(n) {
  if (n < 2) {
    return n;
  }
  return fibenachiReqursive(n - 2) + fibenachiReqursive(n - 1);
}
// console.log("bang: ", fibenachiReqursive(0))

// function reverseStringRecursive(str, rev = '') {
//   if (str.length === rev.length) {
//     return rev;
//   }
//   rev = rev + str[str.length - 1 - rev.length];
//   return reverseStringRecursive(str, rev);
// }

function reverseStringRecursive(str) {
  if (str.length === 0) {
    return '';
  }
  return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

// console.log(reverseStringRecursive('ab'));

const unsortedArr = [43, 82, 6, 1, 9, 90, 0, 44, 3];
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length === 1) {
    return arr[0];
  }

}

// console.log(quickSort(unsortedArr));


//
var lengthOfLongestSubstring = function (s) {
  const subStrings = [[]];
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (subStrings[index].includes(s[i])) {
      index++;
      subStrings.push([s[i]])
    } else {
      subStrings[index].push(s[i]);
    }
  }

  console.log('subStrings: ', subStrings)
  let longestSubstring = subStrings[0].length;
  for (let j = 1; j < subStrings.length; j++) {
    if (subStrings[j].length > longestSubstring) {
      longestSubstring = subStrings[j].length;
    }
  }
  return longestSubstring;
};

console.log(lengthOfLongestSubstring("dvdf"));