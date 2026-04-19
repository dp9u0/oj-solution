/*
 * @lc app=leetcode id=2333 lang=javascript
 *
 * [2333] Minimum Sum of Squared Difference
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let n = nums1.length;
    let diffs = [];
    for (let i = 0; i < n; i++) {
        diffs.push(Math.abs(nums1[i] - nums2[i]));
    }
    diffs.sort((a, b) => b - a);
    diffs.push(0);

    let k = k1 + k2;
    let count = 1;

    for (let i = 0; i < n; i++) {
        let gap = diffs[i] - diffs[i + 1];
        let need = count * gap;
        if (k >= need) {
            k -= need;
            count++;
        } else {
            let reduce = Math.floor(k / count);
            let extra = k % count;
            let base = diffs[i] - reduce;
            let sum = extra * (base - 1) * (base - 1) + (count - extra) * base * base;
            for (let j = i + 1; j < n; j++) {
                sum += diffs[j] * diffs[j];
            }
            return sum;
        }
    }
    return 0;
};
// @lc code=end

// TEST:
console.log(minSumSquareDiff([1,2,3,4], [2,10,20,19], 0, 0)); // 579
console.log(minSumSquareDiff([1,4,10,12], [5,8,6,9], 1, 1)); // 43
console.log(minSumSquareDiff([1,1,1], [1,1,1], 5, 5)); // 0
