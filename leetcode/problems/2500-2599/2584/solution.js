/*
 * @lc app=leetcode id=2584 lang=javascript
 *
 * [2584] Split the Array to Make Coprime Products
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function(nums) {
    const n = nums.length;
    const lastOcc = new Map();

    const getPrimeFactors = (x) => {
        const factors = new Set();
        for (let d = 2; d * d <= x; d++) {
            if (x % d === 0) {
                factors.add(d);
                while (x % d === 0) x /= d;
            }
        }
        if (x > 1) factors.add(x);
        return factors;
    };

    for (let i = 0; i < n; i++) {
        for (const p of getPrimeFactors(nums[i])) {
            lastOcc.set(p, i);
        }
    }

    let farthest = 0;
    for (let i = 0; i < n - 1; i++) {
        for (const p of getPrimeFactors(nums[i])) {
            farthest = Math.max(farthest, lastOcc.get(p));
        }
        if (farthest === i) return i;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(findValidSplit([4,7,8,15,3,5])); // 2
console.log(findValidSplit([4,7,15,8,3,5])); // -1
console.log(findValidSplit([2,3,3])); // 0
