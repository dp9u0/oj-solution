/*
 * @lc app=leetcode id=3766 lang=javascript
 *
 * [3766] Minimum Operations to Make Binary Palindrome
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minOperations = function(nums) {
    // Generate binary palindromes by constructing bit patterns
    const pals = [];
    for (let len = 1; len <= 14; len++) {
        const half = Math.ceil(len / 2);
        const isOdd = len % 2 === 1;
        for (let mask = 0; mask < (1 << half); mask++) {
            // First bit must be 1 (no leading zeros)
            if (!((mask >> (half - 1)) & 1)) continue;
            let val = 0;
            for (let i = 0; i < half; i++) {
                if ((mask >> (half - 1 - i)) & 1) val = (val << 1) | 1;
                else val = val << 1;
            }
            // Mirror: for odd length, skip the middle bit
            const mirrorLen = isOdd ? half - 1 : half;
            for (let i = 0; i < mirrorLen; i++) {
                const bit = isOdd ? ((mask >> (i + 1)) & 1) : ((mask >> i) & 1);
                val = (val << 1) | bit;
            }
            pals.push(val);
        }
    }
    pals.sort((a, b) => a - b);

    const findMin = (x) => {
        let lo = 0, hi = pals.length - 1;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (pals[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        let res = Math.abs(pals[lo] - x);
        if (lo > 0) res = Math.min(res, Math.abs(pals[lo - 1] - x));
        return res;
    };

    return nums.map(findMin);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minOperations([1,2,4]))); // [0,1,1]
console.log(JSON.stringify(minOperations([6,7,12]))); // [1,0,3]
console.log(JSON.stringify(minOperations([5]))); // [0]
