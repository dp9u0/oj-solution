/*
 * @lc app=leetcode.cn id=4089 lang=javascript
 *
 * [4089] 统计宽界子数组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let ans = 0;
    let len = 0; // 以当前元素结尾的连续合法段长
    for (const x of nums) {
        if (x >= minK && x <= maxK) {
            len++;
            ans += len;
        } else {
            len = 0;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countSubarrays([1,4,7,3], 1, 5) === 4);
console.log(countSubarrays([1,1], 1, 1) === 3);
console.log(countSubarrays([9,9,9], 1, 5) === 0);
console.log(countSubarrays([2,3,4], 2, 4) === 6); // 全段长3: 3+2+1
console.log(countSubarrays([5,1,5], 1, 5) === 6);
console.log(countSubarrays([6,1,0,1,6], 1, 5) === 2); // 越界切出两段各长1
