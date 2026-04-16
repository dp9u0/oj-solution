/*
 * @lc app=leetcode id=2442 lang=javascript
 *
 * [2442] Count Number of Distinct Integers After Reverse Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set = new Set(nums);
    let rev = x => parseInt(String(x).split('').reverse().join(''), 10);
    for (let x of nums) set.add(rev(x));
    return set.size;
};
// @lc code=end

// TEST:
console.log(countDistinctIntegers([1,13,10,12,31])); // 6
console.log(countDistinctIntegers([2,2,2])); // 1
console.log(countDistinctIntegers([100,200])); // 3 (100,200,1,2)
