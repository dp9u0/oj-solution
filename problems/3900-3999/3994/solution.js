/*
 * @lc app=leetcode id=3994 lang=javascript
 *
 * [3994] Minimum Adjacent Swaps to Partition Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var minAdjacentSwaps = function(nums, a, b) {
    const MOD = 1e9 + 7;
    let cnt1 = 0; // number of group-1 elements seen so far
    let cnt2 = 0; // number of group-2 elements seen so far
    let ans = 0;

    for (const num of nums) {
        if (num < a) {
            ans = (ans + cnt1 + cnt2) % MOD;
        } else if (num <= b) {
            ans = (ans + cnt2) % MOD;
            cnt1++;
        } else {
            cnt2++;
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minAdjacentSwaps([1,3,2,4,5,6], 3, 4) === 1);
console.log(minAdjacentSwaps([9,7,5,3], 4, 8) === 5);
console.log(minAdjacentSwaps([3,7,5,9], 4, 8) === 0);
console.log(minAdjacentSwaps([5], 4, 8) === 0);                 // single middle element
console.log(minAdjacentSwaps([2,2,2], 4, 8) === 0);            // all group 0, no inversions
console.log(minAdjacentSwaps([1,5,2], 4, 8) === 1);            // groups [0,1,0]: one inversion
console.log(minAdjacentSwaps([9,1,9,1,9], 4, 8) === 3);        // groups [2,0,2,0,2]: three inversions
