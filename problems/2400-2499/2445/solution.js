/*
 * @lc app=leetcode.cn id=2445 lang=javascript
 *
 * [2445] 值为 1 的节点数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} queries
 * @return {number}
 */
var numberOfNodes = function(n, queries) {
    const cnt = new Int32Array(n + 1);
    for (const q of queries) cnt[q]++;
    let ones = 0;
    const T = new Int32Array(n + 1);
    for (let v = 1; v <= n; v++) {
        T[v] = cnt[v] + (v >= 2 ? T[v >> 1] : 0);
        if (T[v] & 1) ones++;
    }
    return ones;
};
// @lc code=end

// TEST:
console.log(numberOfNodes(5, [1,2,5])); // 3
console.log(numberOfNodes(3, [2,3,3])); // 1
console.log(numberOfNodes(1, [1,1])); // 0
console.log(numberOfNodes(7, [1])); // 7 (all flipped)
console.log(numberOfNodes(4, [])); // 0
