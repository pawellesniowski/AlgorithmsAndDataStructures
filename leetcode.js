// #2. (Medium) Add Two Numbers
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function traverse(list) {
    let str = '';
    let currentNode = list;
    while (currentNode) {
        str = currentNode.val + str;
        currentNode = currentNode.next;
    }
    return +str;
}

function generateLinkedListFromNumber(num) {
    let str = num.toString();
    let newLinkedLst = null;
    let currentNode = newLinkedLst;
    for (let i = str.length - 1; i >= 0; i--) {
        currentNode = new
            currentNode = currentNode.next;
    }
    return newLinkedLst;
}

var addTwoNumbers = function (l1, l2) {
    // l1: 2->4->3
    // l2: 5-> 6-> 4
    // output: 7 -> 0 -> 8
    // first read values from lined lists:
    // agrigate values from linked list:
    const l1Num = traverse(l1);
    const l2Num = traverse(l2);
    const sum = l1Num + l2Num;
    console.log(sum);

    // create linked list from sum
    generateLinkedListFromNumber(sum)

    // and return linked list

};

const l1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } }
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } }
addTwoNumbers(l1, l2);


// #1. Two sum.
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
const map = new Map();
map.set(1, 'one')
map.set(1, 'another one');
// console.log('map:', map);
// 1.3. one pass: creating has table and look it up in one for loop
function twoSum3(nums, target) {
    const hashMap = new Map();
    for (let index in nums) {

        const searchValue = target - nums[index]

        if (hashMap.get(searchValue)) {
            return [+hashMap.get(searchValue), +index];
        }

        hashMap.set(nums[index], index);

    }
}
// console.log(twoSum3([0, 3, 3], 6));
// 1.2. lets use hash maps to improve time complexity and use two loops but not nested.
function twoSum2(nums, target) {
    const myMap = new Map();
    for (let key in nums) {
        myMap.set(nums[key], key);
    }
    for (let index in nums) {
        const indexInNums = myMap.get(target - nums[index]);
        if (indexInNums !== undefined && indexInNums !== index) {
            return [+index, +indexInNums];
        }
    }
}
// console.log(twoSum2([3, 3], 6));

// 1.1. "brute force" solution:
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
// console.log(twoSum([3, 2, 4], 6));