// #1. Two sum.
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const map = new Map();
map.set(1, 'one')
map.set(1, 'another one');
console.log('map:', map);
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
console.log(twoSum3([0, 3, 3], 6));
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