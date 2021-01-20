/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0;
  return nums.map(n => sum += n)
};

// TEST:
console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1, 1]))
console.log(runningSum([3, 1, 2, 10, 1]))