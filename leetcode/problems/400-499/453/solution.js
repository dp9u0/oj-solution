/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum - nums.length * Math.min(...nums)
};

/**
// TEST:

console.log(minMoves([1,2,3]));
*/