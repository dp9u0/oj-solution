/*
 * @lc app=leetcode.cn id=4123 lang=javascript
 *
 * [4123] 删除数组的最小代价
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minCost = function(nums) {
    const n = nums.length;
    let even = 0;      // min sum choosing an even count of interior elements
    let odd = Infinity; // min sum choosing an odd count
    for (let i = 1; i < n - 1; i++) {
        const x = nums[i];
        const nEven = Math.min(even, odd + x);
        const nOdd = Math.min(odd, even + x);
        even = nEven;
        odd = nOdd;
    }
    return nums[0] + nums[n - 1] + even;
};
// @lc code=end

// TEST:
console.log(minCost([2,-7,3,-5])); // -7
console.log(minCost([4,0,-5,2])); // 1
console.log(minCost([7,-8,1])); // 8
console.log(minCost([3,9])); // 12
console.log(minCost([1,-1,1,-1,1])); // 0
