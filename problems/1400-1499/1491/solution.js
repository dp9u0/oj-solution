/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let sum = 0, mn = Infinity, mx = -Infinity;
    for (const s of salary) {
        sum += s;
        mn = Math.min(mn, s);
        mx = Math.max(mx, s);
    }
    return (sum - mn - mx) / (salary.length - 2);
};
// @lc code=end

// TEST:
console.log(average([4000,3000,1000,2000])); // 2500
console.log(average([1000,2000,3000])); // 2000
console.log(average([25000,48000,57000,86000,33000,10000,42000,30000,90000,44000])); // 41111.111...
