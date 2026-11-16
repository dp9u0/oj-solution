/*
 * @lc app=leetcode.cn id=1134 lang=javascript
 *
 * [1134] 阿姆斯特朗数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function(n) {
    const digits = String(n).length;
    let sum = 0, rest = n;
    while (rest > 0) {
        const d = rest % 10;
        sum += d ** digits;
        rest = Math.floor(rest / 10);
    }
    return sum === n;
};
// @lc code=end

// TEST:
console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false
console.log(isArmstrong(1)); // true
console.log(isArmstrong(9474)); // true (9474 = 9^4+4^4+7^4+4^4)
console.log(isArmstrong(9475)); // false
