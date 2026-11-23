/*
 * @lc app=leetcode.cn id=3141 lang=javascript
 *
 * [3141] 最大汉明距离
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number[]}
 */
var maxHammingDistances = function(nums, m) {
    const size = 1 << m;
    const dist = new Array(size).fill(-1);
    let queue = [];
    for (const v of nums) {
        if (dist[v] === -1) { dist[v] = 0; queue.push(v); }
    }
    while (queue.length) {
        const next = [];
        for (const u of queue) {
            for (let b = 0; b < m; b++) {
                const w = u ^ (1 << b);
                if (dist[w] === -1) { dist[w] = dist[u] + 1; next.push(w); }
            }
        }
        queue = next;
    }
    const mask = size - 1;
    return nums.map((v) => m - dist[(~v) & mask]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maxHammingDistances([9,12,9,11], 4))); // [2,3,2,3]
console.log(JSON.stringify(maxHammingDistances([3,4,6,10], 4))); // [3,3,2,3]
console.log(JSON.stringify(maxHammingDistances([0,1], 1))); // [1,1]
