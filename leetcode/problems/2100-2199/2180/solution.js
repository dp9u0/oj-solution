/*
 * @lc app=leetcode id=2180 lang=javascript
 *
 * [2180] Count Integers With Even Digit Sum
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    const digitSum = (x) => {
        let s = 0;
        while (x > 0) {
            s += x % 10;
            x = Math.floor(x / 10);
        }
        return s;
    };
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (digitSum(i) % 2 === 0) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countEven(4));    // 2
console.log(countEven(30));   // 14
console.log(countEven(1));    // 0
console.log(countEven(10));   // 4 (2,4,6,8)
console.log(countEven(100));  // 49
console.log(countEven(1000)); // 499
