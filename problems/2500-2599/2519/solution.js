/*
 * @lc app=leetcode.cn id=2519 lang=javascript
 *
 * [2519] 统计 K-Big 索引的数量
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kBigIndices = function(nums, k) {
    const n = nums.length;
    const mkBit = () => {
        const bit = new Int32Array(n + 1);
        return {
            update(x) { for (; x <= n; x += x & (-x)) bit[x]++; },
            query(x) { let s = 0; for (; x > 0; x -= x & (-x)) s += bit[x]; return s; } // count <= x
        };
    };
    const left = new Int32Array(n);
    const right = new Int32Array(n);
    let b1 = mkBit();
    for (let i = 0; i < n; i++) {
        left[i] = nums[i] > 1 ? b1.query(nums[i] - 1) : 0;
        b1.update(nums[i]);
    }
    b1 = mkBit();
    for (let i = n - 1; i >= 0; i--) {
        right[i] = nums[i] > 1 ? b1.query(nums[i] - 1) : 0;
        b1.update(nums[i]);
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (left[i] >= k && right[i] >= k) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(kBigIndices([2,3,6,5,2,3], 2)); // 2
console.log(kBigIndices([1,1,1], 3)); // 0
console.log(kBigIndices([1,2,3], 1)); // 0 (no index has smaller values on both sides)
console.log(kBigIndices([3,2,1], 1)); // 0
console.log(kBigIndices([5], 1)); // 0
