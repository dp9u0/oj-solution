/*
 * @lc app=leetcode id=2654 lang=javascript
 *
 * [2654] Minimum Number of Operations to Make All Array Elements Equal to 1
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let n = nums.length;
    let ones = nums.filter(x => x === 1).length;
    if (ones > 0) return n - ones;

    // find shortest subarray with gcd = 1
    let minLen = Infinity;
    for (let i = 0; i < n; i++) {
        let g = 0;
        for (let j = i; j < n; j++) {
            g = gcd(g, nums[j]);
            if (g === 1) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }
    if (minLen === Infinity) return -1;
    return (minLen - 1) + (n - 1);
};

function gcd(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}
// @lc code=end

// TEST:
console.log(minOperations([2,6,3,4])); // 4
console.log(minOperations([2,10,6,14])); // -1
console.log(minOperations([1,2,3])); // 2
