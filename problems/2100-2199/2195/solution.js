/*
 * @lc app=leetcode id=2195 lang=javascript
 *
 * [2195] Append K Integers With Minimal Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimalKSum = function(nums, k) {
    const sorted = [...new Set(nums)].sort((a, b) => a - b);

    let sum = 0;
    let prev = 0;

    for (const x of sorted) {
        if (k === 0) break;
        const gap = x - prev - 1;
        if (gap > 0) {
            const take = Math.min(k, gap);
            sum += (prev + 1 + prev + take) * take / 2;
            k -= take;
        }
        prev = x;
    }

    if (k > 0) {
        sum += (prev + 1 + prev + k) * k / 2;
    }

    return sum;
};
// @lc code=end

// TEST:
console.log(minimalKSum([1, 4, 25, 10, 25], 2)); // 5
console.log(minimalKSum([5, 6], 6)); // 25
console.log(minimalKSum([1], 1)); // 2
console.log(minimalKSum([2], 1)); // 1
console.log(minimalKSum([100], 3)); // 6
