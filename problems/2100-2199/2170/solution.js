/*
 * @lc app=leetcode id=2170 lang=javascript
 *
 * [2170] Minimum Operations to Make the Array Alternating
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const n = nums.length;
    const odd = new Map(), even = new Map();
    for (let i = 0; i < n; i++) {
        const m = i % 2 === 0 ? even : odd;
        m.set(nums[i], (m.get(nums[i]) || 0) + 1);
    }
    const topEven = getTop2(even);
    const topOdd = getTop2(odd);
    let maxKeep = 0;
    for (const [ev, ec] of topEven) {
        for (const [ov, oc] of topOdd) {
            if (ev !== ov) maxKeep = Math.max(maxKeep, ec + oc);
        }
    }
    return n - maxKeep;
};

function getTop2(map) {
    const entries = [...map.entries()].sort((a, b) => b[1] - a[1]);
    if (entries.length === 0) return [[0, 0]];
    if (entries.length === 1) return [entries[0], [0, 0]];
    return [entries[0], entries[1]];
}
// @lc code=end

// TEST:
console.log(minimumOperations([3,1,3,2,4,3]));
console.log(minimumOperations([1,2,2,2,2]));
console.log(minimumOperations([1,1,1,1]));
