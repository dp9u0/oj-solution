/*
 * @lc app=leetcode id=2860 lang=javascript
 *
 * [2860] Happy Students
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countWays = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let ans = 0;
    for (let k = 0; k <= n; k++) {
        if (k === 0) {
            if (nums[0] > 0) ans++;
        } else if (k === n) {
            if (nums[n - 1] < n) ans++;
        } else {
            if (nums[k - 1] < k && nums[k] > k) ans++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countWays([1,1])); // 2
console.log(countWays([6,0,3,3,6,7,2,7])); // 3
console.log(countWays([0])); // 1 (k=1: select the only student)
console.log(countWays([1,2])); // 1 (k=0 only)
