/*
 * @lc app=leetcode.cn id=面试题 08.14 lang=javascript
 *
 * [面试题 08.14] 布尔运算
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} result
 * @return {number}
 */
var countEval = function(s, result) {
    const m = (s.length + 1) >> 1; // 操作数个数
    if (m === 1) return (s.charCodeAt(0) - 48) === result ? 1 : 0;
    // dp[i][j] = [值为0的方案数, 值为1的方案数]
    const dp = Array.from({ length: m }, () => Array.from({ length: m }, () => [0, 0]));
    for (let i = 0; i < m; i++) dp[i][i][s.charCodeAt(2 * i) - 48] = 1;
    // 枚举区间长度，运算符在 s 中位于 2k+1
    for (let len = 2; len <= m; len++) {
        for (let i = 0; i + len - 1 < m; i++) {
            const j = i + len - 1;
            for (let k = i; k < j; k++) {
                const op = s[2 * k + 1];
                const [l0, l1] = dp[i][k];
                const [r0, r1] = dp[k + 1][j];
                let w0, w1;
                if (op === '&') {
                    w1 = l1 * r1; w0 = l0 * r0 + l0 * r1 + l1 * r0;
                } else if (op === '|') {
                    w0 = l0 * r0; w1 = l1 * r1 + l0 * r1 + l1 * r0;
                } else {
                    w1 = l0 * r1 + l1 * r0; w0 = l0 * r0 + l1 * r1;
                }
                dp[i][j][0] += w0;
                dp[i][j][1] += w1;
            }
        }
    }
    return dp[0][m - 1][result];
};
// @lc code=end

// TEST:
console.log(countEval('1', 1) === 1);
console.log(countEval('1', 0) === 0);
console.log(countEval('0', 0) === 1);
console.log(countEval('1^0|0|1', 0) === 2);
console.log(countEval('1^0|0|1', 1) === 3); // 总括号化方案 Catalan(3)=5，减去结果为 0 的 2 种
console.log(countEval('0&0&0&1^1|0', 1) === 10);
console.log(countEval('1|1^0', 1) === 2);
