/*
 * @lc app=leetcode.cn id=2913 lang=javascript
 *
 * [2913] 子数组不同元素数目的平方和 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            seen.add(nums[j]);
            ans += seen.size * seen.size;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
if (require.main === module) {
  console.log(sumCounts([1, 2, 1]) === 15);   // example 1
  console.log(sumCounts([2, 2]) === 3);       // example 2
  console.log(sumCounts([1]) === 1);          // single element
  console.log(sumCounts([1, 2, 3]) === 20);   // all distinct: 1+1+1+4+4+9 = 20
  console.log(sumCounts([1, 1, 1]) === 6);    // all same: 6 subarrays, each distinct count 1 => 6
}
