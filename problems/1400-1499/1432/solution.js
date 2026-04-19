/*
 * @lc app=leetcode id=1432 lang=javascript
 *
 * [1432] Max Difference You Can Get From Changing an Integer
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    const s = String(num);
    const digits = new Set(s);
    let maxA = num, minB = num;
    for (const x of digits) {
        for (let y = 0; y <= 9; y++) {
            const t = s.replaceAll(x, String(y));
            if (t[0] === '0') continue;
            const v = Number(t);
            if (v > maxA) maxA = v;
            if (v < minB) minB = v;
        }
    }
    return maxA - minB;
};
// @lc code=end

// TEST:
console.log(maxDiff(555)); // 888
console.log(maxDiff(9)); // 8
console.log(maxDiff(123456)); // 820000
console.log(maxDiff(111)); // 888
console.log(maxDiff(1101057)); // 8808050
