/*
 * @lc app=leetcode id=1879 lang=javascript
 *
 * [1879] Minimum XOR Sum of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumXORSum = function(nums1, nums2) {
    const n = nums1.length;
    const total = 1 << n;
    const dp = new Array(total).fill(Infinity);
    dp[0] = 0;

    for (let mask = 0; mask < total; mask++) {
        if (dp[mask] === Infinity) continue;
        const i = popCount(mask);
        if (i >= n) continue;
        for (let j = 0; j < n; j++) {
            if (mask & (1 << j)) continue;
            const next = mask | (1 << j);
            dp[next] = Math.min(dp[next], dp[mask] + (nums1[i] ^ nums2[j]));
        }
    }

    return dp[total - 1];
};

const popCount = (x) => {
    let count = 0;
    while (x) {
        x &= x - 1;
        count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(minimumXORSum([1,2], [2,3])); // 2
console.log(minimumXORSum([1,0,3], [5,3,4])); // 8
console.log(minimumXORSum([5,7,1], [4,2,6])); // 4
