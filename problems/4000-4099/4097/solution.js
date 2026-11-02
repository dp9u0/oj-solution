/*
 * @lc app=leetcode.cn id=4097 lang=javascript
 *
 * [4097] 合并整数后的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMergedInteger = function(nums) {
    let ans = Infinity;
    for (let i = 0; i < nums.length; i += 2) {
        const a = nums[i];
        const b = nums[i + 1];
        // b 的十进制位权：10^位数
        let d = 10;
        let t = Math.floor(b / 10);
        while (t > 0) { d *= 10; t = Math.floor(t / 10); }
        const merged = a * d + b;
        if (merged < ans) ans = merged;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(minMergedInteger([23,55,42,21])); // Expected: 2355
console.log(minMergedInteger([34,7,11,11])); // Expected: 347
console.log(minMergedInteger([9,20])); // Expected: 920
console.log(minMergedInteger([1,1000])); // Expected: 11000
console.log(minMergedInteger([1000,1,2,3])); // Expected: 23
console.log(minMergedInteger([10,10])); // Expected: 1010
console.log(minMergedInteger([5,5,5,5])); // Expected: 55
