/*
 * @lc app=leetcode id=3334 lang=javascript
 *
 * [3334] Find the Maximum Factor Score of Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => a / gcd(a, b) * b;
    const n = nums.length;

    const preGcd = new Array(n);
    const sufGcd = new Array(n);
    const preLcm = new Array(n);
    const sufLcm = new Array(n);

    preGcd[0] = nums[0];
    preLcm[0] = nums[0];
    for (let i = 1; i < n; i++) {
        preGcd[i] = gcd(preGcd[i - 1], nums[i]);
        preLcm[i] = lcm(preLcm[i - 1], nums[i]);
    }

    sufGcd[n - 1] = nums[n - 1];
    sufLcm[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        sufGcd[i] = gcd(sufGcd[i + 1], nums[i]);
        sufLcm[i] = lcm(sufLcm[i + 1], nums[i]);
    }

    // No removal
    let best = preGcd[n - 1] * preLcm[n - 1];

    // Remove element at i (only if n > 1)
    for (let i = 0; n > 1 && i < n; i++) {
        const g = i === 0 ? sufGcd[1] : i === n - 1 ? preGcd[n - 2] : gcd(preGcd[i - 1], sufGcd[i + 1]);
        const l = i === 0 ? sufLcm[1] : i === n - 1 ? preLcm[n - 2] : lcm(preLcm[i - 1], sufLcm[i + 1]);
        best = Math.max(best, g * l);
    }

    return best;
};
// @lc code=end

// TEST:
console.log(maxScore([2,4,8,16])); // 64
console.log(maxScore([1,2,3,4,5])); // 60
console.log(maxScore([3])); // 9
console.log(maxScore([2,3])); // 6 (no removal: gcd=1,lcm=6 -> 6; remove 2: gcd=3,lcm=3 -> 9; remove 3: gcd=2,lcm=2->4) -> max 9
console.log(maxScore([1,1])); // 1
console.log(maxScore([6,14])); // remove 14: 6*6=36; remove 6: 14*14=196; no removal: gcd=2,lcm=42 ->84 -> 196
