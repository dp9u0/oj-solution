/*
 * @lc app=leetcode id=2611 lang=javascript
 *
 * [2611] Mice and Cheese
 */

// @lc code=start
/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function(reward1, reward2, k) {
    const n = reward1.length;
    const diff = [];
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += reward2[i];
        diff.push(reward1[i] - reward2[i]);
    }
    diff.sort((a, b) => b - a);
    for (let i = 0; i < k; i++) {
        total += diff[i];
    }
    return total;
};
// @lc code=end

// TEST:
console.log(miceAndCheese([1,1,3,4], [4,4,1,1], 2)); // 15
console.log(miceAndCheese([1,1], [1,1], 2)); // 2
console.log(miceAndCheese([1,2,3,4,5], [5,4,3,2,1], 3)); // 4+5+3+2+1=15? let's see
