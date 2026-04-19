/*
 * @lc app=leetcode id=2025 lang=javascript
 *
 * [2025] Maximum Number of Ways to Partition an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var waysToPartition = function(nums, k) {
    const n = nums.length;
    const total = nums.reduce((a, b) => a + b, 0);

    // prefix[p] = sum of nums[0..p-1], valid pivots are p in [1, n-1]
    // condition: total - 2 * prefix[p] = 0

    // no change case
    let prefix = 0;
    let noChange = 0;
    for (let p = 1; p < n; p++) {
        prefix += nums[p - 1];
        if (total - 2 * prefix === 0) noChange++;
    }

    // change nums[i] to k: diff = k - nums[i]
    // pivot <= i: need total - 2*prefix[p] = -diff  (left map)
    // pivot > i: need total - 2*prefix[p] = diff   (right map)
    const rightMap = new Map();
    prefix = 0;
    for (let p = 1; p < n; p++) {
        prefix += nums[p - 1];
        const key = total - 2 * prefix;
        rightMap.set(key, (rightMap.get(key) || 0) + 1);
    }

    let ans = noChange;
    const leftMap = new Map();
    prefix = 0;

    for (let i = 0; i < n; i++) {
        if (i > 0) {
            prefix += nums[i - 1];
            const key = total - 2 * prefix;
            leftMap.set(key, (leftMap.get(key) || 0) + 1);
            rightMap.set(key, (rightMap.get(key) || 0) - 1);
        }

        const diff = k - nums[i];
        const leftCount = leftMap.get(-diff) || 0;
        const rightCount = rightMap.get(diff) || 0;
        ans = Math.max(ans, leftCount + rightCount);
    }

    return ans;
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(waysToPartition, [[2, -1, 2], 3], 1);
test(waysToPartition, [[0, 0, 0], 1], 2);
test(waysToPartition, [[22, 4, -25, -20, -15, 15, -16, 7, 19, -10, 0, -13, -14], -33], 4);
test(waysToPartition, [[1, 1], 2], 1);
test(waysToPartition, [[1, 2, 3, 4, 5], 5], 1);
