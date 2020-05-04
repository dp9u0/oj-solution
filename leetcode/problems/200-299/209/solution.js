/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let length = nums.length;
  if (s === 0 || length === 0) { return 0; }
  let p2 = 0, p1 = 0, sum = 0, min = length + 1;
  while (p1 < length) {
    sum += nums[p1++];
    while (sum >= s) {
      min = Math.min(min, p1 - p2);
      sum -= nums[p2++];
    }
  }
  return min === length + 1 ? 0 : min;
};


// TEST:
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))