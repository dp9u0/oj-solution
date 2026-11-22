/*
 * @lc app=leetcode.cn id=2489 lang=javascript
 *
 * [2489] 固定比率的子字符串数
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var fixedRatio = function(s, num1, num2) {
    const sum = num1 + num2;
    const map = new Map();
    let zeros = 0, ans = 0;
    for (let i = 0; i <= s.length; i++) {
        const key = zeros * sum - i * num1;
        const c = map.get(key) || 0;
        ans += c;
        map.set(key, c + 1);
        if (i < s.length && s[i] === '0') zeros++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(fixedRatio("0110011", 1, 2)); // 4
console.log(fixedRatio("10101", 3, 1)); // 0
console.log(fixedRatio("0", 1, 1)); // 0 (0:1 ratio needs 1 zero and 1 one)
console.log(fixedRatio("01", 1, 1)); // 1
console.log(fixedRatio("0011", 1, 1)); // 2 ("01" at 1..2 and "0011")
