/*
 * @lc app=leetcode.cn id=2992 lang=javascript
 *
 * [2992] 自整除排列的数量
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var selfDivisiblePermutationCount = function(n) {
    const gcd = (a, b) => { while (b) { const t = a % b; a = b; b = t; } return a; };
    let count = 0;
    const used = new Array(n + 1).fill(false);
    const dfs = (pos) => {
        if (pos > n) { count++; return; }
        for (let v = 1; v <= n; v++) {
            if (!used[v] && gcd(v, pos) === 1) {
                used[v] = true;
                dfs(pos + 1);
                used[v] = false;
            }
        }
    };
    dfs(1);
    return count;
};
// @lc code=end

// TEST:
console.log(selfDivisiblePermutationCount(1)); // 1
console.log(selfDivisiblePermutationCount(2)); // 1
console.log(selfDivisiblePermutationCount(3)); // 3
console.log(selfDivisiblePermutationCount(4)); // 4
console.log(selfDivisiblePermutationCount(12)); // 3600
