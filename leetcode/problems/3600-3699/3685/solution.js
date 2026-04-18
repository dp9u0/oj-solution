/*
 * @lc app=leetcode id=3685 lang=javascript
 *
 * [3685] Subsequence Sum After Capping Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean[]}
 */
var subsequenceSumAfterCapping = function(nums, k) {
    const n = nums.length;
    const count = new Array(n + 1).fill(0);
    for (const v of nums) count[Math.min(v, n)]++;

    const result = new Array(n).fill(false);
    const mask = (1n << BigInt(k + 1)) - 1n;

    let bitset = 1n; // bit 0 set (sum 0 achievable)
    let cappedCount = n;

    for (let x = 1; x <= n; x++) {
        // Move elements with value x from capped to uncapped
        for (let c = 0; c < count[x]; c++) {
            bitset = (bitset | (bitset << BigInt(x))) & mask;
            cappedCount--;
        }

        // Check if k is achievable: need (k - j*x) in bitset for some j in [0, cappedCount]
        const maxJ = Math.min(cappedCount, Math.floor(k / x));
        for (let j = 0; j <= maxJ; j++) {
            if ((bitset >> BigInt(k - j * x)) & 1n) {
                result[x - 1] = true;
                break;
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(subsequenceSumAfterCapping([4,3,2,4], 5))); // [false,false,true,true]
console.log(JSON.stringify(subsequenceSumAfterCapping([1,2,3,4,5], 3))); // [true,true,true,true,true]
console.log(JSON.stringify(subsequenceSumAfterCapping([1], 1))); // [true]
