/*
 * @lc app=leetcode id=1524 lang=javascript
 *
 * [1524] Number of Sub-arrays With Odd Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    const MOD = 1e9 + 7;
    let ans = 0, sum = 0, even = 1, odd = 0;
    for (const x of arr) {
        sum += x;
        if (sum % 2 === 0) {
            ans = (ans + odd) % MOD;
            even++;
        } else {
            ans = (ans + even) % MOD;
            odd++;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numOfSubarrays([1,3,5]));          // 4
console.log(numOfSubarrays([2,4,6]));          // 0
console.log(numOfSubarrays([1,2,3,4,5,6,7])); // 16
