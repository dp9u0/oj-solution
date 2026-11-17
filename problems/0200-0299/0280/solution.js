/*
 * @lc app=leetcode.cn id=280 lang=javascript
 *
 * [280] 摆动排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    // want: nums[even] <= nums[even+1] >= nums[even+2] ...
    // one pass: swap with the previous neighbor when violated
    for (let i = 1; i < nums.length; i++) {
        const shouldRise = i % 2 === 1; // odd index should be a peak
        if (shouldRise ? nums[i] < nums[i - 1] : nums[i] > nums[i - 1]) {
            const tmp = nums[i];
            nums[i] = nums[i - 1];
            nums[i - 1] = tmp;
        }
    }
};
// @lc code=end

// TEST:
const run = arr => {
    wiggleSort(arr);
    return arr;
};
const isWiggled = a => a.every((x, i) => i === 0 || (i % 2 === 1 ? a[i] >= a[i - 1] : a[i] <= a[i - 1]));
for (const t of [[3, 5, 2, 1, 6, 4], [1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [1], [2, 2, 2, 1]]) {
    const out = run([...t]);
    console.log(out, isWiggled(out));
}
// expect all "true" on isWiggled
