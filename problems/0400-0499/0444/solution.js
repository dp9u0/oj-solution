/*
 * @lc app=leetcode.cn id=444 lang=javascript
 *
 * [444] 序列重建
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} sequences
 * @return {boolean}
 */
var sequenceReconstruction = function(nums, sequences) {
    const n = nums.length;
    const adj = Array.from({ length: n + 1 }, () => []);
    const indeg = new Array(n + 1).fill(0);
    for (const seq of sequences) {
        for (let i = 1; i < seq.length; i++) {
            adj[seq[i - 1]].push(seq[i]);
            indeg[seq[i]]++;
        }
    }

    const queue = [];
    for (let v = 1; v <= n; v++) {
        if (indeg[v] === 0) queue.push(v);
    }

    const order = [];
    while (queue.length) {
        // two zero-indegree nodes -> at least two valid orders
        if (queue.length > 1) return false;
        const u = queue.shift();
        order.push(u);
        for (const v of adj[u]) {
            if (--indeg[v] === 0) queue.push(v);
        }
    }
    return order.length === n && order.every((v, i) => v === nums[i]);
};
// @lc code=end

// TEST:
console.log(sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3]])); // false
console.log(sequenceReconstruction([1, 2, 3], [[1, 2]])); // false
console.log(sequenceReconstruction([1, 2, 3], [[1, 2], [1, 3], [2, 3]])); // true
console.log(sequenceReconstruction([1], [[1]])); // true
console.log(sequenceReconstruction([4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]])); // true
console.log(sequenceReconstruction([1, 4, 2, 3], [[1, 2], [4, 2], [3]])); // false (3 unrestrained)
console.log(sequenceReconstruction([3, 1, 2], [[3, 1], [1, 2]])); // true (nums not identity)
