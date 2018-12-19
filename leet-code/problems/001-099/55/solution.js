/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let i = 0;
  for (let canReach = 0; i < nums.length && i <= canReach; ++i) {
    canReach = Math.max(i + nums[i], canReach);
  }
  return i === nums.length;
};


// TEST:

console.log(canJump([2, 3, 1, 1, 4]));

console.log(canJump([3, 2, 1, 0, 4]));