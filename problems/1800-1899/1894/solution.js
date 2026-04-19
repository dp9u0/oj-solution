/*
 * @lc app=leetcode id=1894 lang=javascript
 *
 * [1894] Find the Student that Will Replace the Chalk
 */

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const sum = chalk.reduce((a, b) => a + b, 0);
    k %= sum;

    for (let i = 0; i < chalk.length; i++) {
        if (k < chalk[i]) return i;
        k -= chalk[i];
    }

    return -1;
};
// @lc code=end

// TEST:
console.log(chalkReplacer([5,1,5], 22)); // 0
console.log(chalkReplacer([3,4,1,2], 25)); // 1
console.log(chalkReplacer([1], 1)); // 0
console.log(chalkReplacer([1,2], 4)); // 1
