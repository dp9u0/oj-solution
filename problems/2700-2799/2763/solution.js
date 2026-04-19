/*
 * @lc app=leetcode id=2763 lang=javascript
 *
 * [2763] Sum of Imbalance Numbers of All Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumImbalanceNumbers = function(nums) {
    const n = nums.length;
    let total = 0;

    for (let l = 0; l < n; l++) {
        const sorted = [];
        let imbalance = 0;

        for (let r = l; r < n; r++) {
            const v = nums[r];
            let lo = 0, hi = sorted.length;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (sorted[mid] < v) lo = mid + 1;
                else hi = mid;
            }

            if (lo < sorted.length && sorted[lo] === v) {
                // duplicate, no change
            } else {
                const p = lo > 0 ? sorted[lo - 1] : null;
                const s = lo < sorted.length ? sorted[lo] : null;
                if (p !== null && v - p > 1) imbalance++;
                if (s !== null && s - v > 1) imbalance++;
                if (p !== null && s !== null && s - p > 1) imbalance--;
                sorted.splice(lo, 0, v);
            }
            total += imbalance;
        }
    }
    return total;
};
// @lc code=end

// TEST:
console.log(sumImbalanceNumbers([2,3,1,4])); // 3
console.log(sumImbalanceNumbers([1,3,3,3,5])); // 8
console.log(sumImbalanceNumbers([1])); // 0
console.log(sumImbalanceNumbers([1,2])); // 0
console.log(sumImbalanceNumbers([1,3])); // 1
