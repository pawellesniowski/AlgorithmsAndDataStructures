// #1. Two sum.
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 1.1. "brutal force" solution:
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(twoSum([3, 2, 4], 6));