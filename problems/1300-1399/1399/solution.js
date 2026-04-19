/*
 * @lc app=leetcode id=1399 lang=javascript
 *
 * [1399] Count Largest Group
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const count = new Array(37).fill(0);
    for (let i = 1; i <= n; i++) {
        let sum = 0, x = i;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        count[sum]++;
    }
    let maxSize = 0, result = 0;
    for (const c of count) {
        if (c > maxSize) {
            maxSize = c;
            result = 1;
        } else if (c === maxSize) {
            result++;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countLargestGroup(13)); // 4
console.log(countLargestGroup(2));  // 2
console.log(countLargestGroup(15)); // 6
