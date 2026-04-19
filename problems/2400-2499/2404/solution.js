/*
 * @lc app=leetcode id=2404 lang=javascript
 *
 * [2404] Most Frequent Even Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const count = new Map();
    for (const num of nums) {
        if (num % 2 === 0) {
            count.set(num, (count.get(num) || 0) + 1);
        }
    }
    if (count.size === 0) return -1;

    let result = -1;
    let maxFreq = 0;
    for (const [num, freq] of count) {
        if (freq > maxFreq || (freq === maxFreq && num < result)) {
            maxFreq = freq;
            result = num;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(mostFrequentEven([0,1,2,2,4,4,1]));         // 2
console.log(mostFrequentEven([4,4,4,9,2,4]));            // 4
console.log(mostFrequentEven([29,47,21,41,13,37,25,7])); // -1
console.log(mostFrequentEven([0,0,2,2]));                // 0
