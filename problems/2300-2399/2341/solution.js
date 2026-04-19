/*
 * @lc app=leetcode id=2341 lang=javascript
 *
 * [2341] Maximum Number of Pairs in Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const count = new Map();
    for (const num of nums) count.set(num, (count.get(num) || 0) + 1);
    let pairs = 0, leftover = 0;
    for (const c of count.values()) {
        pairs += Math.floor(c / 2);
        leftover += c % 2;
    }
    return [pairs, leftover];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(numberOfPairs([1,3,2,1,3,2,2]))); // [3,1]
console.log(JSON.stringify(numberOfPairs([1,1]))); // [1,0]
console.log(JSON.stringify(numberOfPairs([0]))); // [0,1]
