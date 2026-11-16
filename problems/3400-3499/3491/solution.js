/*
 * @lc app=leetcode.cn id=3491 lang=javascript
 *
 * [3491] 电话号码前缀
 */

// @lc code=start
/**
 * @param {string[]} numbers
 * @return {boolean}
 */
var phonePrefix = function(numbers) {
    const sorted = [...numbers].sort();
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i].startsWith(sorted[i - 1])) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(phonePrefix(["1", "2", "4", "3"])); // true
console.log(phonePrefix(["001", "007", "15", "00153"])); // false
console.log(phonePrefix(["1", "12"])); // false
console.log(phonePrefix(["9", "8"])); // true
console.log(phonePrefix(["1", "1"])); // false (duplicate is a prefix)
console.log(phonePrefix(["12345", "123"])); // false
console.log(phonePrefix(["10", "01"])); // true
