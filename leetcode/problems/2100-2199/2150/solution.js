/*
 * @lc app=leetcode id=2150 lang=javascript
 *
 * [2150] Find All Lonely Numbers in the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    const cnt = new Map();
    for (const x of nums) cnt.set(x, (cnt.get(x) || 0) + 1);
    const ans = [];
    for (const x of nums) {
        if (cnt.get(x) === 1 && !cnt.has(x - 1) && !cnt.has(x + 1)) ans.push(x);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(findLonely([10,6,5,8])); // [10,8]
console.log(findLonely([1,3,5,3])); // [1,5]
console.log(findLonely([1])); // [1]
