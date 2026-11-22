/*
 * @lc app=leetcode.cn id=2863 lang=javascript
 *
 * [2863] 最长半递减子数组的长度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrayLength = function(nums) {
    const n = nums.length;
    const idx = Array.from({ length: n }, (_, i) => i).sort((a, b) => nums[a] - nums[b]);
    let ans = 0, maxIdx = -1;
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && nums[idx[j]] === nums[idx[i]]) j++;
        for (let t = i; t < j; t++) {
            const x = idx[t];
            if (maxIdx > x) ans = Math.max(ans, maxIdx - x + 1);
        }
        for (let t = i; t < j; t++) maxIdx = Math.max(maxIdx, idx[t]);
        i = j;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxSubarrayLength([7,6,5,4,3,2,1,6,10,11])); // 8
console.log(maxSubarrayLength([57,55,50,60,61,58,63,59,64,60,63])); // 6
console.log(maxSubarrayLength([1,2,3,4])); // 0
console.log(maxSubarrayLength([5,5,5])); // 0
console.log(maxSubarrayLength([3,1])); // 2
