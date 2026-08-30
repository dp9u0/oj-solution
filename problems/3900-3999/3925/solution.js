/*
 * @lc app=leetcode id=3925 lang=javascript
 *
 * [3925] Concatenate Array With Reverse
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    const n = nums.length;
    const ans = [...nums];
    for (let i = n - 1; i >= 0; i--) {
        ans.push(nums[i]);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(concatWithReverse([1, 2, 3])) === JSON.stringify([1, 2, 3, 3, 2, 1]));
console.log(JSON.stringify(concatWithReverse([1])) === JSON.stringify([1, 1]));
console.log(JSON.stringify(concatWithReverse([5, 4, 3, 2, 1])) === JSON.stringify([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]));
console.log(JSON.stringify(concatWithReverse([7, 7, 7])) === JSON.stringify([7, 7, 7, 7, 7, 7]));
console.log(JSON.stringify(concatWithReverse([100, 1, 50])) === JSON.stringify([100, 1, 50, 50, 1, 100]));
