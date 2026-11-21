/*
 * @lc app=leetcode.cn id=2237 lang=javascript
 *
 * [2237] 计算街道上满足所需亮度的位置数量
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} lights
 * @param {number[]} requirement
 * @return {number}
 */
var meetRequirement = function(n, lights, requirement) {
    const diff = new Int32Array(n + 1);
    for (const [p, r] of lights) {
        const s = Math.max(0, p - r);
        const e = Math.min(n - 1, p + r);
        diff[s]++;
        diff[e + 1]--;
    }
    let count = 0, cur = 0;
    for (let i = 0; i < n; i++) {
        cur += diff[i];
        if (cur >= requirement[i]) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(meetRequirement(5, [[0,1],[2,1],[3,2]], [0,2,1,4,1])); // 4
console.log(meetRequirement(1, [[0,1]], [2])); // 0
console.log(meetRequirement(3, [[1,5]], [0,0,0])); // 3
console.log(meetRequirement(4, [[0,0],[3,0]], [1,0,0,1])); // 4 (0-req positions always pass)
console.log(meetRequirement(2, [], [0,0])); // 2 (no lights -> brightness 0 >= 0)
