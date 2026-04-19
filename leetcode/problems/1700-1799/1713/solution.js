/*
 * @lc app=leetcode id=1713 lang=javascript
 *
 * [1713] Minimum Operations to Make a Subsequence
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function(target, arr) {
    const pos = new Map();
    for (let i = 0; i < target.length; i++) pos.set(target[i], i);

    const seq = [];
    for (const v of arr) {
        if (pos.has(v)) seq.push(pos.get(v));
    }

    // LIS on seq
    const tails = [];
    for (const v of seq) {
        let lo = 0, hi = tails.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (tails[mid] < v) lo = mid + 1;
            else hi = mid;
        }
        if (lo === tails.length) tails.push(v);
        else tails[lo] = v;
    }

    return target.length - tails.length;
};
// @lc code=end

// TEST:
console.log(minOperations([5,1,3], [9,4,2,3,4])); // 2
console.log(minOperations([6,4,8,1,3,2], [4,7,6,2,3,8,6,1])); // 3
console.log(minOperations([1,2], [1,2])); // 0
console.log(minOperations([1,2,3], [1,2])); // 1
console.log(minOperations([1], [1])); // 0
