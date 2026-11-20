/*
 * @lc app=leetcode.cn id=1874 lang=javascript
 *
 * [1874] 两个数组的最小乘积和
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    const a = nums1.slice().sort((x, y) => x - y);
    const b = nums2.slice().sort((x, y) => y - x);
    let sum = 0;
    for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
    return sum;
};
// @lc code=end

// TEST:
console.log(minProductSum([5,3,4,2], [4,2,2,5])); // 40
console.log(minProductSum([2,1,4,5,7], [3,2,4,8,6])); // 65
console.log(minProductSum([1], [9])); // 9
console.log(minProductSum([1,2,3], [1,2,3])); // 10 (1*3+2*2+3*1)
console.log(minProductSum([100,100], [100,100])); // 20000
