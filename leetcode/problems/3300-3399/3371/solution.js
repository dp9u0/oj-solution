/*
 * @lc app=leetcode id=3371 lang=javascript
 *
 * [3371] Identify the Largest Outlier in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var getLargestOutlier = function(nums) {
    const freq = new Map();
    let totalSum = 0;
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        totalSum += num;
    }

    let result = -Infinity;
    for (const num of nums) {
        // totalSum = 2 * sumOfSpecials + outlier
        // sumElement = (totalSum - outlier) / 2
        const diff = totalSum - num;
        if (diff % 2 !== 0) continue;
        const sumElement = diff / 2;
        if (!freq.has(sumElement)) continue;
        // If sumElement == outlier, need at least 2 occurrences
        if (sumElement === num && freq.get(sumElement) < 2) continue;
        result = Math.max(result, num);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(getLargestOutlier([2,3,5,10]));          // 10
console.log(getLargestOutlier([-2,-1,-3,-6,4]));     // 4
console.log(getLargestOutlier([1,1,1,1,1,5,5]));     // 5
