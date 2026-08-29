/*
 * @lc app=leetcode id=3917 lang=javascript
 *
 * [3917] Score of an Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
  const n = nums.length;
  let suffixOdd = 0;
  let suffixEven = 0;
  for (const v of nums) {
    if (v % 2 === 0) suffixEven++;
    else suffixOdd++;
  }
  const res = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0) {
      suffixEven--;
      res[i] = suffixOdd;
    } else {
      suffixOdd--;
      res[i] = suffixEven;
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countOppositeParity([1, 2, 3, 4])) === JSON.stringify([2, 1, 1, 0]));
console.log(JSON.stringify(countOppositeParity([1])) === JSON.stringify([0]));
console.log(JSON.stringify(countOppositeParity([2, 4])) === JSON.stringify([0, 0]));
console.log(JSON.stringify(countOppositeParity([1, 3, 5])) === JSON.stringify([0, 0, 0]));
console.log(JSON.stringify(countOppositeParity([2, 1])) === JSON.stringify([1, 0]));
