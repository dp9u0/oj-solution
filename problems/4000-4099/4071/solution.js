/*
 * @lc app=leetcode.cn id=4071 lang=javascript
 *
 * [4071] 拨号的最少旋转次数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string} s
 * @return {number}
 */
var minRotations = function(n, s) {
    const dist = (a, b) => {
        const d = Math.abs(a - b);
        return Math.min(d, 10 - d);
    };
    const digits = new Array(n);
    for (let i = 0; i < n; i++) digits[i] = s.charCodeAt(i) - 48;
    let base = dist(0, digits[0]);
    for (let i = 1; i < n; i++) base += dist(digits[i - 1], digits[i]);
    const velmotrani = s;
    const last = velmotrani.charCodeAt(n - 1) - 48;
    let ans = base;
    // k = 0：前驱是初始指针 0
    ans = Math.min(ans, base - dist(0, digits[0]) + dist(0, last));
    for (let k = 1; k < n; k++) {
        // 环距对称：后缀内部转移代价不变，仅入口转移由 s[k] 变为 s[n-1]
        ans = Math.min(ans, base - dist(digits[k - 1], digits[k]) + dist(digits[k - 1], last));
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minRotations(4, '1502')); // 9
console.log(minRotations(4, '2916')); // 12
console.log(minRotations(4, '4219')); // 6
console.log(minRotations(1, '7')); // 3
console.log(minRotations(2, '09')); // 1
console.log(minRotations(3, '091')); // 3
