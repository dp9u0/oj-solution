/*
 * @lc app=leetcode.cn id=3411 lang=javascript
 *
 * [3411] 最长乘积等价子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    // lcm(1..10) = 2520, gcd <= 10, so lcm * gcd <= 25200;
    // once prod exceeds it, extending further can never satisfy prod == lcm * gcd
    const LIMIT = 25200;
    const gcd = (a, b) => {
        while (b !== 0) [a, b] = [b, a % b];
        return a;
    };

    const n = nums.length;
    let ans = 2; // any length-2 subarray satisfies prod == gcd * lcm
    for (let i = 0; i < n; i++) {
        let prod = nums[i];
        let g = nums[i];
        let l = nums[i];
        for (let j = i + 1; j < n; j++) {
            const x = nums[j];
            prod *= x;
            g = gcd(g, x);
            l = (l / gcd(l, x)) * x;
            if (prod > LIMIT) break;
            if (prod === l * g) ans = Math.max(ans, j - i + 1);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxLength([1,2,1,2,1,1,1])); // 5
console.log(maxLength([2,3,4,5,6])); // 3
console.log(maxLength([1,2,3,1,4,5,1])); // 5
console.log(maxLength([1,1,1,1])); // 4
console.log(maxLength([7,7,7])); // 2
console.log(maxLength([2,3,5])); // 3
console.log(maxLength([4,6,4])); // 2
console.log(maxLength([10,5])); // 2
console.log(maxLength([1,1])); // 2
