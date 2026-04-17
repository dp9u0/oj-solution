/*
 * @lc app=leetcode id=2798 lang=javascript
 *
 * [2798] Number of Employees Who Met the Target
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.filter(h => h >= target).length;
};
// @lc code=end

// TEST:
console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2)); // 3
console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2], 6)); // 0
console.log(numberOfEmployeesWhoMetTarget([1,2,3,4,5], 1)); // 5
console.log(numberOfEmployeesWhoMetTarget([0,0,0], 0)); // 3
console.log(numberOfEmployeesWhoMetTarget([10], 5)); // 1
console.log(numberOfEmployeesWhoMetTarget([3,3,3], 3)); // 3
