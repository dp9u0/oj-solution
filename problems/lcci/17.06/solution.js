/*
 * @lc app=leetcode.cn id=面试题 17.06 lang=javascript
 *
 * [面试题 17.06] 2出现的次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOf2sInRange = function(n) {
    // 逐位统计：p 为位权，high/cur/low 为该位的高位、当前位、低位
    let count = 0;
    for (let p = 1; p <= n; p *= 10) {
        const high = Math.floor(n / (p * 10));
        const cur = Math.floor(n / p) % 10;
        const low = n % p;
        if (cur > 2) {
            count += (high + 1) * p;
        } else if (cur === 2) {
            count += high * p + low + 1;
        } else {
            count += high * p;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numberOf2sInRange(2) === 1);
console.log(numberOf2sInRange(25) === 9);
console.log(numberOf2sInRange(0) === 0);
console.log(numberOf2sInRange(1) === 0);
console.log(numberOf2sInRange(100) === 20);
console.log(numberOf2sInRange(222) === 69);
console.log(numberOf2sInRange(999) === 300);
