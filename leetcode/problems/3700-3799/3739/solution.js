/*
 * @lc app=leetcode id=3739 lang=javascript
 *
 * [3739] Count Subarrays With Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    const prefix = new Array(n + 1);
    prefix[0] = 0;
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (nums[i] === target ? 1 : -1);
    }

    // Coordinate compression
    const sorted = [...new Set(prefix)].sort((a, b) => a - b);
    const rank = new Map();
    for (let i = 0; i < sorted.length; i++) rank.set(sorted[i], i + 1);

    // BIT
    const size = sorted.length + 2;
    const bit = new Int32Array(size);
    const update = (i) => { for (; i < size; i += i & -i) bit[i]++; };
    const query = (i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };

    let result = 0;
    update(rank.get(0));

    for (let i = 1; i <= n; i++) {
        const r = rank.get(prefix[i]);
        result += query(r - 1);
        update(r);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countMajoritySubarrays([1, 2, 2, 3], 2)); // 5
console.log(countMajoritySubarrays([1, 1, 1, 1], 1)); // 10
console.log(countMajoritySubarrays([1, 2, 3], 4)); // 0
console.log(countMajoritySubarrays([2], 2)); // 1
console.log(countMajoritySubarrays([2], 1)); // 0
