/*
 * @lc app=leetcode id=3852 lang=javascript
 *
 * [3852] Smallest Pair With Different Frequencies
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function(nums) {
    const freq = new Map();
    for (const v of nums) freq.set(v, (freq.get(v) || 0) + 1);

    const values = [...freq.keys()].sort((a, b) => a - b);

    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (freq.get(values[i]) !== freq.get(values[j])) {
                return [values[i], values[j]];
            }
        }
    }

    return [-1, -1];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minDistinctFreqPair([1,1,2,2,3,4]))); // [1,3]
console.log(JSON.stringify(minDistinctFreqPair([1,5]))); // [-1,-1]
console.log(JSON.stringify(minDistinctFreqPair([7]))); // [-1,-1]
console.log(JSON.stringify(minDistinctFreqPair([1,1,1,2,2,3]))); // [1,2]
console.log(JSON.stringify(minDistinctFreqPair([1,2,3,4]))); // [-1,-1]
