/*
 * @lc app=leetcode.cn id=4092 lang=javascript
 *
 * [4092] 二进制位得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var calculateScore = function(a, b) {
    const pc = x => {
        let c = 0;
        while (x) { x &= x - 1; c++; }
        return c;
    };
    const s1 = pc(a), s2 = pc(b);
    return s1 >= s2 ? s1 * s2 : Math.floor(s2 / s1);
};
// @lc code=end

// TEST:
console.log(calculateScore(14, 6) === 6);
console.log(calculateScore(5, 15) === 2);
console.log(calculateScore(10, 12) === 4);
console.log(calculateScore(1, 1) === 1); // 1*1
console.log(calculateScore(7, 128) === 3); // s1=3 < s2=1? 否 → 3*1... s2=1, s1>=s2 → 3
