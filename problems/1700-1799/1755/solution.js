/*
 * @lc app=leetcode id=1755 lang=javascript
 *
 * [1755] Closest Subsequence Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var minAbsDifference = function(nums, goal) {
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    const getSums = (arr) => {
        const sums = [0];
        for (const x of arr) {
            const len = sums.length;
            for (let i = 0; i < len; i++) {
                sums.push(sums[i] + x);
            }
        }
        return sums;
    };

    const sumsL = getSums(left);
    const sumsR = getSums(right).sort((a, b) => a - b);

    let ans = Infinity;
    for (const s of sumsL) {
        const target = goal - s;
        let lo = 0, hi = sumsR.length - 1;
        while (lo < hi) {
            const m = Math.floor((lo + hi) / 2);
            if (sumsR[m] < target) lo = m + 1;
            else hi = m;
        }
        if (lo < sumsR.length) ans = Math.min(ans, Math.abs(s + sumsR[lo] - goal));
        if (lo > 0) ans = Math.min(ans, Math.abs(s + sumsR[lo - 1] - goal));
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minAbsDifference([5, -7, 3, 5], 6)); // 0
console.log(minAbsDifference([7, -9, 15, -2], -5)); // 1
console.log(minAbsDifference([1, 2, 3], -7)); // 7
console.log(minAbsDifference([1], 1)); // 0
console.log(minAbsDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55)); // 0
