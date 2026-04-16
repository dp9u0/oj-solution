/*
 * @lc app=leetcode id=1577 lang=javascript
 *
 * [1577] Number of Ways Where Square of Number Is Equal to Product of Two Numbers
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function(nums1, nums2) {
    const countPairs = (squares, nums) => {
        const freq = new Map();
        for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
        const vals = [...freq.keys()].sort((a, b) => a - b);

        let total = 0;
        for (const sq of squares) {
            let lo = 0, hi = vals.length - 1;
            while (lo <= hi) {
                const prod = vals[lo] * vals[hi];
                if (prod === sq) {
                    if (lo === hi) {
                        const f = freq.get(vals[lo]);
                        total += f * (f - 1) / 2;
                    } else {
                        total += freq.get(vals[lo]) * freq.get(vals[hi]);
                    }
                    lo++;
                    hi--;
                } else if (prod < sq) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
        return total;
    };

    const sq1 = nums1.map(n => n * n);
    const sq2 = nums2.map(n => n * n);

    return countPairs(sq1, nums2) + countPairs(sq2, nums1);
};
// @lc code=end

// TEST:
console.log(numTriplets([7,4], [5,2,8,9])); // 1
console.log(numTriplets([1,1], [1,1,1])); // 9
console.log(numTriplets([7,7,8,3], [1,2,9,7])); // 2
