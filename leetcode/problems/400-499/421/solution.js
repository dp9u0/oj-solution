/*
 * @lc app=leetcode id=421 lang=javascript
 *
 * [421] Maximum XOR of Two Numbers in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    let result = 0;
    for (let i = 30; i >= 0; i--) {
        const prefixes = new Set();
        for (const num of nums) {
            prefixes.add(num >> i);
        }

        const candidate = (result << 1) | 1;
        let found = false;
        for (const p of prefixes) {
            if (prefixes.has(p ^ candidate)) {
                found = true;
                break;
            }
        }

        result = found ? candidate : (result << 1);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));
// Expected: 28

console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));
// Expected: 127

console.log(findMaximumXOR([0]));
// Expected: 0
