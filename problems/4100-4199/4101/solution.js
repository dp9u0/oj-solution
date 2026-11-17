/*
 * @lc app=leetcode.cn id=4101 lang=javascript
 *
 * [4101] 找到所有数组中消失的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findDisappearedNumbers = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    const res = [];
    let cur = lower;
    for (const x of nums) {
        if (x < cur || x > upper) continue;
        if (cur < x) res.push([cur, x - 1]);
        cur = x + 1;
    }
    if (cur <= upper) res.push([cur, upper]);
    return res;
};
// @lc code=end

// TEST:
console.log(findDisappearedNumbers([3, 9, 7], 1, 12)); // [[1,2],[4,6],[8,8],[10,12]]
console.log(findDisappearedNumbers([1, 1, 1000000000], 5, 1000000000)); // [[5,999999999]]
console.log(findDisappearedNumbers([2, 3, 5], 2, 3)); // []
console.log(findDisappearedNumbers([10], 1, 5)); // [[1,5]]
console.log(findDisappearedNumbers([5, 5], 5, 5)); // []
