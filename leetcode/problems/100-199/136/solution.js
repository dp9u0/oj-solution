/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    result ^= nums[i];
  }
  return result;
};

/**
// TEST:

let nums;

nums = [2,2,1,1,3];
console.log(singleNumber(nums));
*/