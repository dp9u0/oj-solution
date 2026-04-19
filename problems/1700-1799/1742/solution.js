/*
 * @lc app=leetcode id=1742 lang=javascript
 *
 * [1742] Maximum Number of Balls in a Box
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let cnt = new Array(46).fill(0);
    let max = 0;
    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = 0, n = i;
        while (n > 0) { sum += n % 10; n = Math.floor(n / 10); }
        cnt[sum]++;
        if (cnt[sum] > max) max = cnt[sum];
    }
    return max;
};
// @lc code=end

// TEST:
console.log(countBalls(1, 10)); // 2
console.log(countBalls(5, 15)); // 2
console.log(countBalls(19, 28)); // 2
